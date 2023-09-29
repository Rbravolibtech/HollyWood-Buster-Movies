import React, { useState, useEffect } from "react";
import { getSearchResults } from "../lib/API/Api";
import Card from "../components/card";
import styles from "./search.module.css";

function Page() {
	const [searchText, setSearchText] = useState("");
	// const [page, setPage] = useState(1);
	const [searchResults, setSearchResults] = useState([]);
	const [loadingSearchResults, setLoadingSearchResults] = useState(false);
	const [errorResults, setErrorResults] = useState("");

	const submitQuery = async (e) => {
		e.preventDefault();
		const result = await getSearchResults(searchText);
		setSearchResults(result);
	};

	useEffect(() => {
		setLoadingSearchResults(true);
		const fetchData = async () => {
			try {
				const searchArray = await getSearchResults(searchText);
				if (searchArray.length < 1) {
					setErrorResults("No results found");
				} else {
					setSearchResults(searchArray);
				}
			} catch (error) {
				setErrorResults("An error occurred while fetching results.");
			} finally {
				setLoadingSearchResults(false);
			}
		};

		fetchData();
	}, []);


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
