import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import "../../styles/home.scss";

export function Card(props) {
	const [iconcolor, seticonColor] = useState("white");

	let buttonstyles = {
		backgroundColor: "goldenrod",
		borderColor: "black",
		color: "black"
	};
	let marginstyles = {
		marginLeft: "90px",
		backgroundColor: "goldenrod",
		borderColor: "black",
		color: iconcolor
	};

	let bodycolor = {
		backgroundColor: "rgb(159, 158, 155)"
	};

	return (
		<div className="col-3 ">
			<div className="card">
				<img src="https://unsplash.it/600/400" className="card-img-top" alt="" />
				<div className="card-body" style={bodycolor}>
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text"> Population: {props.population}</p>
					<button className="btn btn-primary" style={buttonstyles}>
						Learn more!
					</button>
					<button
						className="btn btn-primary"
						style={marginstyles}
						onClick={() => {
							if (iconcolor == "white") {
								seticonColor("yellow");
							} else {
								seticonColor("white");
							}
						}}>
						<i className="fas fa-star" />
					</button>
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	title: PropTypes.string,
	population: PropTypes.string,
	image: PropTypes.string
};
