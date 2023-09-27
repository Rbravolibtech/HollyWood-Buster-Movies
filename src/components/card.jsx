import React from "react";

function Cards({ movie }) {
	return (
		<a
			className="cardTitle"
			href={"/title?id=" + movie.id + "&type=" + movie.type}
		>
			<img src={movie.image} />
			<h4>
				{movie.title}
				<br />
				{movie.date}
			</h4>
		</a>
	);
}

export default Cards;
