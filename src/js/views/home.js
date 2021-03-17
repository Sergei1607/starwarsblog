import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Card } from "../component/card.js";

export const Home = () => {
	let backstyle = {
		backgroundColor: "darkgrey"
	};
	return (
		<div className="container-flux bg-dark p-5" style={backstyle}>
			<h1 className="my-5">Characters</h1>
			<div className="row">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<h1 className="my-5">Planets</h1>
			<div className="row">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};
