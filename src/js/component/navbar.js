import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	let iconstyle = {
		color: "goldenrod"
	};

	let buttonstyle = {
		backgroundColor: "goldenrod",
		color: "black"
	};

	let navstyle = {
		backgroundColor: "black"
	};

	return (
		<div className="container-fluid p-3" style={navstyle}>
			<div className="row">
				<div className="col-5">
					<i className="fab fa-facebook fa-2x px-2 " style={iconstyle} />
					<i className="fab fa-instagram fa-2x px-2" style={iconstyle} />
					<i className="fab fa-tumblr fa-2x px-2" style={iconstyle} />
					<i className="fab fa-twitter fa-2x px-2" style={iconstyle} />
					<i className="fab fa-youtube fa-2x px-2" style={iconstyle} />
				</div>
				<div className="col-4 ms-5">
					<img
						className="ms-5"
						src="https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo-1.png"
						height="80px"
					/>
				</div>
				<div className="col-3">
					<form className="d-flex">
						<input
							className="form-control me-2"
							type="search"
							placeholder="Search Star Wars"
							aria-label="Search"
						/>
						<div className="dropdown">
							<button
								className="btn btn-primary dropdown-toggle"
								type="button"
								id="dropdownMenuButton1"
								data-bs-toggle="dropdown"
								aria-expanded="false"
								style={buttonstyle}>
								Favorites
								<spam> 0</spam>
							</button>
							<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
								<li>
									<a className="dropdown-item" href="#">
										Action
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Another action
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Something else here
									</a>
								</li>
							</ul>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
