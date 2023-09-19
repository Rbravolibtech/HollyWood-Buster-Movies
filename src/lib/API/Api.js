//Functions are set up to only return the information we will use in the cards
//id is id, title is title, poser_path is image, release_date is date

export async function getTrendingMovies() {
    try {
        const trendingMoviesURL = 'https://api.themoviedb.org/3/trending/movie/week?api_key=' + import.meta.env.VITE_TMDB_KEY;
        const response = await fetch(trendingMoviesURL);
        if (!response.ok) {
            throw new Error(`HTTP error. Status: ${response.status}`);
        }
        const { results } = await response.json();
        console.log(results);
        return results.map((i) => {
            return {
                id: i.id,
                title: i.title,
                image: "https://image.tmdb.org/t/p/w300" + i.poster_path,
                date: i.release_date.slice(0, 4),
                type: "movie"
            }
        })
    }
    catch (error) {
        console.error('Fetch error:', error.message);
        return [];
    }
}

export async function getTrendingTVShows() {
    try {
        const trendingTVShowsURL = 'https://api.themoviedb.org/3/trending/tv/week?api_key=' + import.meta.env.VITE_TMDB_KEY;
        const response = await fetch(trendingTVShowsURL);
        if (!response.ok) {
            throw new Error(`HTTP error. Status: ${response.status}`);
        }
        const { results } = await response.json();
        return results.map((i) => {
            return {
                id: i.id,
                title: i.name,
                image: "https://image.tmdb.org/t/p/w300" + i.poster_path,
                date: i.first_air_date.slice(0, 4),
                type: "tv"
            }
        })
    }
    catch (error) {
        console.error('Fetch error:', error.message);
        return [];
    }
}

export async function getTitlePageInfo(id, type) {
    try {
        if (type === 'movie') {
            const movieDetailsURL = `https://api.themoviedb.org/3/movie/${id}?api_key=` + import.meta.env.VITE_TMDB_KEY;
            const movieResponse = await fetch(movieDetailsURL);
            if (!movieResponse.ok) {
                throw new Error(`HTTP error. Status: ${movieResponse.status}`);
            }
            
            const movieResults = await movieResponse.json();

            if (!movieResults) {
                throw new Error('Movie details not found');
            }
            return {
                id: movieResults.id,
                title: movieResults.title,
                poster: "https://image.tmdb.org/t/p/w300" + movieResults.poster_path,
                photo: "https://image.tmdb.org/t/p/w1280" + movieResults.backdrop_path,
                date: movieResults.release_date.slice(0, 4),
                rating: movieResults.vote_average,
                runtime: movieResults.runtime,
                overview: movieResults.overview
            };
        }

        if (type === 'tv') {
            const TVDetailsURL = `https://api.themoviedb.org/3/tv/${id}?api_key=` + import.meta.env.VITE_TMDB_KEY;
            const TVResponse = await fetch(TVDetailsURL);
            if (!TVResponse.ok) {
                throw new Error(`HTTP error. Status: ${TVResponse.status}`);
            }
            const TVResults = await TVResponse.json();
            if (!TVResults) {
                throw new Error('TV details not found');
            }
            return {
                id: TVResults.id,
                title: TVResults.name,
                poster: "https://image.tmdb.org/t/p/w300" + TVResults.poster_path,
                photo: "https://image.tmdb.org/t/p/w300" + TVResults.backdrop_path,
                date: TVResults.first_air_date.slice(0, 4),
                rating: TVResults.vote_average,
                runtime: TVResults.number_of_seasons,
                overview: TVResults.overview
            }
        }
        
        throw new Error('Invalid media type provided')
    }
    catch (error) {
        console.error('Fetch error:', error.message);
        return undefined;
    }
}