import Container from "react-bootstrap/Container";
import React from "react";
import "../index.css";
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
			console.log(moviesArray);
			if (moviesArray.length < 1) {
				setErrorMovies("No movies found");
			} else {
				setMovies(moviesArray);
			}
		}
		moviesFetch();
		setLoadingMovies(false);
	}, [])

	if (loadingMovies) {
		return <p>loading</p>;
	}

	if (errorMovies) {
		return <p>{errorMovies}</p>
	}

	return (
		<Container className="mainContent">
			<div>
				<p>Welcome to Hollywood-Buster</p>
			</div>
			<div>
				<p>Movies</p>
				{movies.map((m) => {
					return <Card movie={m} key={m.id} />
				})}
			</div>
			<div>
				<p>TV Shows</p>
			</div>
		</Container>
	);
}

export default Page;
