import React, { Component, useState, useContext } from "react";
import PropTypes from "prop-types";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export function Card2(props) {
	const [iconcolor, seticonColor] = useState("white");
	const { store, actions } = useContext(Context);
	const [favorite, setFavorite] = useState(props.favorite);

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
					<p className="card-text"> {"Gender: " + props.gender}</p>
					<p className="card-text"> {"Eyes color: " + props.eye}</p>
					<p className="card-text"> {"Hair color: " + props.hair}</p>
					<button className="btn btn-primary" style={buttonstyles}>
						Learn more!
					</button>
					<button className="btn btn-primary" style={marginstyles}>
						<i
							className="fas fa-star"
							onClick={() => {
								if (iconcolor == "white") {
									seticonColor("yellow");
									setFavorite(props.favorite);
									actions.sumFavorites();
									actions.setlistFavorites(favorite);
								} else {
									seticonColor("white");
									setFavorite(props.favorite);
									actions.lessFavorites();
									actions.removelistFavorites([favorite]);
								}
							}}
						/>
					</button>
				</div>
			</div>
		</div>
	);
}

Card2.propTypes = {
	title: PropTypes.string,
	image: PropTypes.string,
	gender: PropTypes.string,
	eye: PropTypes.string,
	hair: PropTypes.string,
	favorite: PropTypes.string
};
