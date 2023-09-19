import React from "react";
import styles from "./index.module.css";
import { useSearchParams } from "react-router-dom";
import { getTitlePageInfo } from "../lib/API/Api";

function Page() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [movie, setMovie] = React.useState();
	const [error, setError] = React.useState("");
	const [loading, setLoading] = React.useState(true);

	React.useEffect(() => {
		const id = searchParams.get("id");
		const type = searchParams.get("type");

		async function fetchData() {
			try {
				const data = await getTitlePageInfo(id, type);
				if (!data) {
					setError("Failed to fetch the data");
				} else {
					setMovie(data);
				}
			} catch (error) {
				setError("An error occurred while fetching the data");
			} finally {
				setLoading(false);
			}
		}

		fetchData();
	}, []);

	if (loading) {
		return <p>Loading...</p>
	}

	if (error !== "") return <p>ERROR BUDDY</p>

	return (
		<div className="titleMain">
			<div>
				<img src={movie.photo} alt="" />
			</div>
			<div>
				<h1>{movie.title}</h1>
			</div>

			<div>
				<p>Rating: {movie.rating}</p>
				<p>Release Year: {movie.date}</p>
				<p>{movie.type === 'movie' ? `${movie.runtime} Minutes` : `${movie.runtime} Seasons`}</p>
			</div>
		</div>
	);
}

export default Page;
