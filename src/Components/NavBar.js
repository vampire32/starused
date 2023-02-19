import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const NavBar = (props) => {
     const navList = [
				{
					pageName: "Home",
					link: "/",
				},
				{
					pageName: "About",
					link: "/about",
				},
				{
					pageName: "Services",
					link: "/services",
				},
				
				{
					pageName: "Contact us",
					link: "/Contactus",
				},
			];
  return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-[#d9c7a4]">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					Navbar
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse justify-content-center"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav  ">
						<li className="nav-item">
							<Link className="nav-link  text-white" aria-current="page" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link text-white" to="/about">
								About
							</Link>
						</li>
						<li className="nav-item dropdown text-white">
							<Link
								className="nav-link dropdown-toggle text-white"
								id="navbarDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Services
							</Link>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
								<li>
									<Link className="dropdown-item" to="/usedfurniture">
										Used Furniture
									</Link>
								</li>
								<li>
									<li>
										<hr className="dropdown-divider" />
									</li>
									<Link className="dropdown-item" to="/homeappliances">
										Home Appliances
									</Link>
								</li>
								<li>
									<hr className="dropdown-divider" />
								</li>
								<li>
									<Link className="dropdown-item" to="/usedaircondition">
										Used Air condition
									</Link>
								</li>
							</ul>
						</li>
						<li className="nav-item">
							<Link className="nav-link text-white" to="/contactus">
								Contact Us
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default NavBar
