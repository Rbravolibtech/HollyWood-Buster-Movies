import React, { useState, useEffect } from "react";
import Layout from "./layout";
// import styles from "./TextExplosion.module.css";

const TextExplosion = () => {
	const [text, setText] = useState("Click Me!");
	const [exploded, setExploded] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setText("Buster");
			setExploded(true);
		}, 1000);
	}, []); // The empty dependency array ensures this effect runs once on mount

	return (
		<div className={`text-explosion${exploded ? ".exploded" : ""}`}>
			{Buster}
		</div>
	);
};

export default TextExplosion;
