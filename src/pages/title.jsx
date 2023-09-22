import React from "react";
import { useSearchParams } from "react-router-dom";
import { getTitlePageInfo } from "../lib/API/Api";
import styles from "./title.module.css";

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

	React.useEffect(() => {
		const sloganElement = document.getElementById("slogan");
		if (sloganElement) {
			sloganElement.style.display = "none";
		}
	}, []);

	if (loading) {
		return <p>Loading...</p>
	}

	if (error !== "") return <p>ERROR BUDDY</p>

	const type = searchParams.get("type");

	return (
		<div className={styles.titleMain}>
			<div className={styles.titlePhoto} >
				<img src={movie.photo} alt={movie.title} className={styles.showPhoto} />
				<div className={styles.showOverview} style={{ backgroundColor: "black" }}>
					<h1>{movie.title}</h1>
					<p className={styles.showStats}>{movie.rating}/10 | {movie.date} | {type === 'movie' ? `Runtime: ${movie.runtime} Minutes` : `Seasons: ${movie.runtime}`}</p>
					<p>{movie.overview}</p>
				</div>
			</div>
		</div>
	);
}

export default Page;
