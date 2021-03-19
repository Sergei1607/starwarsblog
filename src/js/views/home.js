import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Card } from "../component/card.js";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

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
				{store.planets.map((item, index) => {
					return <Card key={index} title={item.name} population={item.population} />;
				})}
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
