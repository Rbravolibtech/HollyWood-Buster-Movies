import React from "react";
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
				setLoading(false); // Move setLoading inside fetchData
			}
		}

		fetchData();
	}, []);

	if (loading) {
		return <p>Loading...</p>
	}

	if (error !== "") return <p>ERROR BUDDY</p>

	return (
		<div>
			<div>
				<img src={movie.photo} alt="" />
			</div>
			<div>
				<h1>{movie.title}</h1>
			</div>

			<div>
				<p>{movie.rating}</p>
				<p>{movie.date}</p>
				<p>{movie.runtime}</p>
				<p>{movie.language}</p>
			</div>
		</div>
	);
}

export default Page;
