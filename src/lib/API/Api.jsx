async function getTrending() {
    try {
        const trendingURL = 'https://api.themoviedb.org/3/trending/movie/week?api_key=b2117cd326264da14382275ee3292712';
        const response = await fetch(trendingURL);
        if (!response.ok) {
            throw new Error(`HTTP error. Status: ${response.status}`);
        }
        const results = await response.json();
        return results;
    }
    catch (error) {
        console.error('Fetch error:', error);
    }
}

getTrending();