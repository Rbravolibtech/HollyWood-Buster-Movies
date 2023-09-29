import React, { useState, useEffect } from "react";
import { getSearchResults } from "../lib/API/Api";
import Card from "../components/card";

function Page() {
	const [searchText, setSearchText] = useState("");
	const [page, setPage] = useState(1);
	const [searchResults, setSearchResults] = useState([]);

	const BarStyle = {
		width: "100%",
		background: "#F0F0F0",
		border: "2px solid #ccc",
		padding: "0.8% ",
	};

	const submitQuery = async (e) => {
		e.preventDefault();
		const result = await getSearchResults(searchText);
		setSearchResults(result);
	};

	return (
		<form onSubmit={submitQuery}>
			<input
				style={BarStyle}
				value={searchText}
				placeholder={"SEARCH MOVIES AND TV SHOWS"}
				onInput={(e) => setSearchText(e.target.value)}
			/>
			<input type="submit" />
		</form>
	);
}

export default Page;
