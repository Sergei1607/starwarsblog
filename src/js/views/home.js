import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Card } from "../component/card.js";

export const Home = () => {
	let backstyle = {
		backgroundColor: "rgb(37, 36, 36 )"
	};

	let over = {
		overflowX: "scroll",
		flexWrap: "nowrap"
	};

	return (
		<div className="container-flux p-5" style={backstyle}>
			<h1 className="my-5">Characters</h1>
			<div className="row overflow-scroll" style={over}>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<h1 className="my-5">Planets</h1>
			<div className="row" style={over}>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};
