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
				setLoading(false);
			}
		}

		fetchData();
	}, []);

	if (loading) {
		return <p>Loading...</p>
	}

	if (error !== "") return <p>ERROR BUDDY</p>

	const type = searchParams.get("type");

	return (
		<div className="titleMain">
			<div className="titlePhoto" style={{ backgroundImage: `linear-gradient(90deg, rgba(161, 0, 255, 0) 20%, rgba(0, 0, 0, 0) 84%, rgba(0, 0, 0, 0) 96%), url(${movie.photo})` }}>
				<h1>{movie.title}</h1>
				<p>{movie.overview}</p>
			</div>
			<div className="titleInfo">
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
