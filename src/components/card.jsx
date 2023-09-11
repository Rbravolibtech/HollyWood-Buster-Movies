import React from "react";

function Card({ movie }) {
	return (
		<div className="card">
			{
				movie.title// add content to display movie info
			}
		</div>
	);
}

export default Card;
