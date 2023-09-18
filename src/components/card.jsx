import React from "react";

function Cards({ movie }) {
	return (
		<a href={"/title?id=" + movie.id + "&type=" + movie.type}>
			<img src={movie.image} />
			<h4>
				{movie.title} | {movie.date}
			</h4>
		</a>
	);
}

export default Cards;
