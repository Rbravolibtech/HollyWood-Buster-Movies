import React, { useEffect, useState } from "react";
import styles from "./movies.module.css";
import Card from "../components/card";
import { getTopRatedMovies } from "../lib/API/Api";

function Page() {
	const [loadingMovies, setLoadingMovies] = useState(false);
	const [errorMovies, setErrorMovies] = useState("");
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		setLoadingMovies(true);
		const fetchData = async () => {
			try {
				const moviesArray = await getTopRatedMovies();
				if (moviesArray.length < 1) {
					setErrorMovies("No movies found");
				} else {
					setMovies(moviesArray);
				}
			} catch (error) {
				setErrorMovies("An error occurred while fetching movies.");
			} finally {
				setLoadingMovies(false);
			}
		};

		fetchData();
	}, []);

	return (
		<div>
			<div className={styles.titleCards}>
				<h2>Top Rated Movies</h2>
				<div className={styles.movies}>
					{loadingMovies && <p>Loading</p>}
					{errorMovies && <p>{errorMovies}</p>}
					{!loadingMovies &&
						!errorMovies &&
						movies.map((movie) => {
							return <Card key={movie.id} movie={movie} />;
						})}
				</div>
			</div>
		</div>
	);
}

export default Page;
