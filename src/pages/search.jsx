import React, { useState, useEffect } from "react";
import { getSearchResults } from "../lib/API/Api";
import Card from "../components/card";
import styles from "./search.module.css";

function Page() {
	const [searchText, setSearchText] = useState("");
	const [page, setPage] = useState(1);
	const [searchResults, setSearchResults] = useState([]);

	const submitQuery = async (e) => {
		e.preventDefault();
		const result = await getSearchResults(searchText);
		setSearchResults(result);
	};

	return (
		<form onSubmit={submitQuery}>
			<input
				className={styles.barStyle}
				value={searchText}
				placeholder={"SEARCH MOVIES AND TV SHOWS"}
				onInput={(e) => setSearchText(e.target.value)}
			/>
			<input type="submit" />
		</form>
	);
}

export default Page;
