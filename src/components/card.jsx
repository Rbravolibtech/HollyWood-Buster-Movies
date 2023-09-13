import React from "react";

function Cards({ movie }) {
	return (
		<div>
			<img src={movie.image} />
			<h4>
				{movie.title} | {movie.date}
			</h4>
		</div>
	);
}

export default Cards;
