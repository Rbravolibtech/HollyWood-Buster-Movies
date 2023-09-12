//Functions are set up to only return the information we will use in the cards
//movie/tv show id is id, movie/tv show title is title, movie/tv show poser_path is image, movie/tv show release_date is date

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
        console.log(results);
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