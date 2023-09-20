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
				<div className={styles.showPhoto} style={{ background: `linear-gradient(270deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 84%, rgba(0, 0, 0, 0) 96%), url(${movie.photo}) no-repeat top center` }}></div>
				<div className={styles.showOverview} style={{ backgroundColor: "black" }}>
					<h1>{movie.title}</h1>
					<p>{movie.overview}</p>
				</div>
			</div>
			<div className={styles.titleInfo}>
				<img src={movie.poster} alt="" />
				<div>
					<p>Rating: {movie.rating}</p>
					<p>Release Year: {movie.date}</p>
					<p>{type === 'movie' ? `Runtime: ${movie.runtime} Minutes` : `Seasons: ${movie.runtime}`}</p>
				</div>
			</div>
		</div>
	);
}

export default Page;
