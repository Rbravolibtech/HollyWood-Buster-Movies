
import React from "react";
import styles from "./index.module.css";
import Card from "../components/card";
import { getTrendingMovies } from "../lib/API/Api";

function Page() {
	const [loadingMovies, setLoadingMovies] = React.useState(false);
	const [errorMovies, setErrorMovies] = React.useState("");
	const [movies, setMovies] = React.useState([]);

	React.useEffect(() => {
		setLoadingMovies(true);
		const moviesFetch = async () => {
			const moviesArray = await getTrendingMovies();
			if (moviesArray.length < 1) {
				setErrorMovies("No movies found");
			} else {
				setMovies(moviesArray);
			}
		}
		moviesFetch();
		setLoadingMovies(false);
	}, [])

	return (
		<div className="mainContent">
			<div>
				<h2>Movies</h2>
				<div className={styles.movies}>
					{loadingMovies && <p>Loading</p>}
					{errorMovies && <p>{errorMovies}</p>}
					{!loadingMovies && !errorMovies && movies.map((m) => {
						return <Card key={m.id} movie={m} />
					})}
				</div>
			</div>
			<div>
				<h2>TV Shows</h2>
			</div>
		</div>
	);
}

export default Page;
