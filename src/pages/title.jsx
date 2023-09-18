import React from "react";
import { useSearchParams } from "react-router-dom";
import { getTitlePageInfo } from "../lib/API/Api";

function Page() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [movie, setMovie] = React.useState();

	React.useEffect(() => {
		const id = searchParams.get("id");
		const type = searchParams.get("type");

		async function fetchData() {
			const data = await getTitlePageInfo(id, type);
			setMovie(data);
		}

		fetchData();
	}, []);

	return (
		<div>
			<div>
				<img src={`${photo}`} alt=""></img>
			</div>
			<div>
				<h1>{Title}</h1>
			</div>

			<div>
				<p>{Rating}</p>
				<p>{type === "movie" ? movie.release_date : movie.first_air_date}</p>
				<p>{type === "movie" ? movie.runtime : movie.seasons}</p>
				<p>{Language}</p>
			</div>
		</div>
	);
}

export default Page;
