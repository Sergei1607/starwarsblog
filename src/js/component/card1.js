import React, { Component, useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export function Card1(props) {
	const [iconcolor, seticonColor] = useState("white");
	const { store, actions } = useContext(Context);
	const [favorite, setFavorite] = useState([props.favorite]);
	const [number, setNumber] = useState(1);

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
					<p className="card-text"> {"Population: " + props.population}</p>
					<Link to="/single">
						<button className="btn btn-primary" style={buttonstyles}>
							Learn more!
						</button>
					</Link>
					<button
						className="btn btn-primary"
						style={marginstyles}
						onClick={() => {
							if (iconcolor == "white") {
								seticonColor("yellow");
								setFavorite([...favorite, props.favorite]);
								console.log(favorite);
								actions.setlistFavorites(favorite);
								setNumber(number + 1);
								actions.setnumberFavorites(number);
							} else {
								seticonColor("white");
							}
						}}>
						<i
							className="fas fa-star"
							onClick={() => {
								if (iconcolor == "white") {
									seticonColor("yellow");
								} else {
									seticonColor("white");
								}
							}}
						/>
					</button>
				</div>
			</div>
		</div>
	);
}

Card1.propTypes = {
	title: PropTypes.string,
	population: PropTypes.string,
	image: PropTypes.string,
	favorite: PropTypes.string
};
