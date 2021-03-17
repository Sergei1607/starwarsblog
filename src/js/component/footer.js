import React, { Component } from "react";

export const Footer = () => {
	let navstyle = {
		backgroundColor: "black"
	};

	let iconstyle = {
		color: "goldenrod"
	};
	return (
		<div style={navstyle}>
			<footer className="footer mt-auto text-center">
				<nav className="navbar">
					<span style={iconstyle} className="navbar-brand h1">
						Footer
					</span>
				</nav>
			</footer>
		</div>
	);
};
