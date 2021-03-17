import React, { Component } from "react";

export const Footer = () => {
	let navstyle = {
		backgroundImage:
			'url("https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Hyades.jpg/1200px-Hyades.jpg")',
		height: "100px"
	};

	let iconstyle = {
		color: "goldenrod",
		marginTop: "25px",
		marginLeft: "600px"
	};

	return (
		<div style={navstyle}>
			<footer className="footer mt-auto text-center">
				<nav className="navbar">
					<span style={iconstyle} className="navbar-brand h1">
						StarWars Blog
					</span>
				</nav>
			</footer>
		</div>
	);
};
