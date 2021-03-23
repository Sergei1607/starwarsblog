import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Card1 } from "../component/card1.js";
import { Card2 } from "../component/card2.js";

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
					return <Card1 key={index} title={item.name} population={item.population} favorite={item.name} />;
				})}
			</div>
			<h1 className="my-5">Planets</h1>
			<div className="row" style={over}>
				{store.characters.map((item, index) => {
					return (
						<Card2
							key={index}
							title={item.name}
							gender={item.gender}
							eye={item.eye_color}
							hair={item.hair_color}
							favorite={item.name}
						/>
					);
				})}
			</div>
		</div>
	);
};
