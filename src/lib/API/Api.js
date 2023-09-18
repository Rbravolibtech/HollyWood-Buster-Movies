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
        return results.map((i) => {
            return {
                id: i.id,
                title: i.title,
                image: "https://image.tmdb.org/t/p/w300" + i.poster_path,
                date: i.release_date.slice(0, 4),
            }
        })
    }
    catch (error) {
        console.error('Fetch error:', error);
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
            }
        })
    }
    catch (error) {
        console.error('Fetch error:', error);
        return [];
    }
}

export async function getTitlePageInfo() {
    try {
        const movieDetailsURL = 'https://api.themoviedb.org/3/movie/movie_id?api_key=' + import.meta.env.VITE_TMDB_KEY;
        const TVDetailsURL = 'https://api.themoviedb.org/3/tv/series_id?api_key=' + import.meta.env.VITE_TMDB_KEY;
        const movieResponse = await fetch(movieDetailsURL);
        const TVResponse = await fetch(TVDetailsURL);
        if (!movieResponse.ok || !TVResponse.ok) {
            throw new Error(`HTTP error. Status: ${response.status}`);
        }
        const { movieResults } = await movieResponse.json();
        const { TVResults } = await TVResponse.json();
        return TVResults.map((i) => {
            return {
                id: i.id,
                title: i.name,
                poster: "https://image.tmdb.org/t/p/w300" + i.poster_path,
                photo: "https://image.tmdb.org/t/p/w300" + i.backdrop_path,
                date: i.first_air_date.slice(0, 4),
                rating: i.vote_average,
                seasons: i.number_of_seasons,
                language: i.original_language,
                overview: i.overview
            }
        })
    }
    catch (error) {
        console.error('Fetch error:', error);
        return [];
    }
}