import React, { useState, useEffect } from "react";
import { getSearchResults } from "../lib/API/Api";
import Card from "../components/card";
import styles from "./search.module.css";

function Page() {
	const [searchText, setSearchText] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const [loadingSearchResults, setLoadingSearchResults] = useState(false);
	const [errorResults, setErrorResults] = useState("");

	const submitQuery = async (e) => {
		e.preventDefault();
		setLoadingSearchResults(true);
		const result = await getSearchResults(searchText);
		if (result.length < 1) {
			setErrorResults("Could not find any movies that fit that criteria")
		}
		setSearchResults(result);
		setLoadingSearchResults(false);
	};

	return (
		<>
			<form onSubmit={submitQuery}>
				<input
					className={styles.barStyle}
					value={searchText}
					placeholder={"SEARCH MOVIES AND TV SHOWS"}
					onInput={(e) => setSearchText(e.target.value)}
				/>
				<input type="submit" />
			</form>
			<div className={styles.titleCards}>
				<div className={styles.movies}>
					{loadingSearchResults && <p>Loading</p>}
					{errorResults && <p>{errorResults}</p>}
					{!loadingSearchResults &&
						!errorResults &&
						searchResults.map((movie) => {
							return <Card key={movie.id} movie={movie} />;
						})}
				</div>
			</div>
		</>
	);
}

export default Page;
