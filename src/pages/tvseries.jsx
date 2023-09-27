import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import Card from "../components/card";
import { getTrendingTVShows } from "../lib/API/Api";

function Page() {
	const [loadingTVShows, setLoadingTVShows] = useState(false);
	const [errorTVShows, setErrorTVShows] = useState("");
	const [TVShows, setTVShows] = useState([]);

	useEffect(() => {
		setLoadingTVShows(true);
		const tvFetch = async () => {
			try {
				const tvArray = await getTrendingTVShows();
				if (tvArray.length < 1) {
					setErrorTVShows("No TV shows found");
				} else {
					setTVShows(tvArray);
				}
			} catch (error) {
				setErrorTVShows("An error occurred while fetching TV shows.");
			} finally {
				setLoadingTVShows(false);
			}
		};

		tvFetch();
	}, []);

	return (
		<div>
			<div className={styles.titleCards}>
				<h2>TV Shows</h2>
				<div className={styles.movies}>
					{loadingTVShows && <p>Loading</p>}
					{errorTVShows && <p>{errorTVShows}</p>}
					{!loadingTVShows &&
						!errorTVShows &&
						TVShows.map((tvShow) => {
							return <Card key={tvShow.id} movie={tvShow} />;
						})}
				</div>
			</div>
		</div>
	);
}

export default Page;
