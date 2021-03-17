import React, { Component } from "react";
import "../../styles/home.scss";

export function Card() {
	let buttonstyles = {
		backgroundColor: "goldenrod",
		borderColor: "black",
		color: "black"
	};
	let marginstyles = {
		marginLeft: "90px",
		backgroundColor: "goldenrod",
		borderColor: "black"
	};

	let bodycolor = {
		backgroundColor: "rgb(159, 158, 155)"
	};
	return (
		<div className="col-3 ">
			<div className="card">
				<img src="https://unsplash.it/600/400" className="card-img-top" alt="..." />
				<div className="card-body" style={bodycolor}>
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Some quick example text to build on the card title and make up the bulk of the cards content.
					</p>
					<button className="btn btn-primary" style={buttonstyles}>
						Learn more!
					</button>
					<button className="btn btn-primary" style={marginstyles}>
						<i className="fas fa-star" />
					</button>
				</div>
			</div>
		</div>
	);
}
