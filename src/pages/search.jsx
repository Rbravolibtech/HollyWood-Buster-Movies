import React, { useState, useEffect } from "react";
import { getSearchResults } from "../lib/API/Api";
import Card from "../components/card";

const Search = ({ keyword, onChange }) => {
	const BarStyle = {
		width: "100%",
		background: "#F0F0F0",
		border: "2px solid #ccc",
		padding: "0.8% ",
	};
	return (
		<input
			style={BarStyle}
			key="search-bar"
			value={keyword}
			placeholder={"SEARCH MOVIES AND TV SHOWS"}
			onChange={(e) => onChange(e.target.value)}
		/>
	);
};

export default Search;
