import React from "react";
import Card from "react-bootstrap/Card";

function Cards({ movie }) {
	return (
		<Card className="bg-dark text-white">
			<Card.Img src={movie.image} />
			<Card.ImgOverlay>
				<Card.Title>
					{movie.title} | {movie.date}
				</Card.Title>
			</Card.ImgOverlay>
		</Card>
	);
}
export default Cards;
