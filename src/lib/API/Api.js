//comments here about structure

export async function getTrendingMovies() {
    try {
        const trendingURL = 'https://api.themoviedb.org/3/trending/movie/week?api_key=b2117cd326264da14382275ee3292712';
        const response = await fetch(trendingURL);
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