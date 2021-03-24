import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Singlep = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	let buttonstyles = {
		backgroundColor: "goldenrod",
		borderColor: "black",
		color: "black"
	};
	return (
		<div className="jumbotron">
			{" "}
			<div className="container">
				<div className="row">
					<div className="col-6 ">
						<img src="https://unsplash.it/600/400" className="card-img-top" height="400px" />
					</div>
					<div className="col-6">
						<h1 className="d-flex justify-content-center">{store.planets[params.theid].name}</h1>
						<p className="text-center mt-5">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
							been the industrys standard dummy text ever since the 1500s, when an unknown printer took a
							galley of type and scrambled it to make a type specimen book. It has survived not only five
							centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
							It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
							passages, and more recently with desktop publishing software like Aldus PageMaker including
							versions of Lorem Ipsum.
						</p>
					</div>
				</div>
			</div>
			<hr className="my-4 bg-warning" />
			<div className="container">
				<div className="row">
					<div className="col-2 text-center">
						<h3>Name</h3>
					</div>
					<div className="col-2 text-center">
						<h3>Climate</h3>
					</div>
					<div className="col-2 text-center">
						<h3>Terrain</h3>
					</div>
					<div className="col-2 text-center">
						<h3>Population</h3>
					</div>
					<div className="col-2 text-center">
						<h3>Gravity</h3>
					</div>
					<div className="col-2 text-center">
						<h3>Rotation</h3>
					</div>
				</div>
				<div className="row">
					<div className="col-2 text-center">
						<h5 className="mt-3 text-capitalize">{store.planets[params.theid].name}</h5>
					</div>
					<div className="col-2 text-center">
						<h5 className="mt-3 text-capitalize">{store.planets[params.theid].climate}</h5>
					</div>
					<div className="col-2 text-center">
						<h5 className="mt-3 text-capitalize">{store.planets[params.theid].terrain}</h5>
					</div>
					<div className="col-2 text-center">
						<h5 className="mt-3 text-capitalize">{store.planets[params.theid].population}</h5>
					</div>
					<div className="col-2 text-center">
						<h5 className="mt-3 text-capitalize">{store.planets[params.theid].gravity}</h5>
					</div>
					<div className="col-2 text-center">
						<h5 className="mt-3 text-capitalize">{store.planets[params.theid].rotation_period}</h5>
					</div>
				</div>
			</div>
			<div className="container">
				<Link to="/">
					<button className="btn btn-primary btn-lg mt-4 ml-4" href="#" role="button" style={buttonstyles}>
						Back home
					</button>
				</Link>
			</div>
		</div>
	);
};

Singlep.propTypes = {
	match: PropTypes.object
};
