
import React from "react";
import styles from "./index.module.css";
import Card from "../components/card";
import { getTrendingMovies } from "../lib/API/Api";
import { getTrendingTVShows } from "../lib/API/Api";

function Page() {
	const [loadingMovies, setLoadingMovies] = React.useState(false);
	const [errorMovies, setErrorMovies] = React.useState("");
	const [movies, setMovies] = React.useState([]);

	const [loadingTVShows, setLoadingTVShows] = React.useState(false);
	const [errorTVShows, setErrorTVShows] = React.useState("");
	const [TVShows, setTVShows] = React.useState([]);

	React.useEffect(() => {
		setLoadingMovies(true);
		setLoadingTVShows(true);

		const moviesFetch = async () => {
			const moviesArray = await getTrendingMovies();
			if (moviesArray.length < 1) {
				setErrorMovies("No movies found");
			} else {
				setMovies(moviesArray);
			}
		}

		const tvFetch = async () => {
			const tvArray = await getTrendingTVShows();
			if (tvArray.length < 1) {
				setErrorTVShows("No TV shows found");
			} else {
				setTVShows(tvArray);
			}
		}

		moviesFetch();
		tvFetch();
		setLoadingMovies(false);
		setLoadingTVShows(false);
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
				<div className={styles.movies}>
					{loadingTVShows && <p>Loading</p>}
					{errorTVShows && <p>{errorTVShows}</p>}
					{!loadingTVShows && !errorTVShows && TVShows.map((m) => {
						return <Card key={m.id} movie={m} />
					})}
				</div>
			</div>
		</div>
	);
}

export default Page;
