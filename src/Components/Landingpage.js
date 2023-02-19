import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Landingpage = (props) => {
  return (
		<>
			<section className="ui-section-hero bg-gradient-to-r from-[#d9c7a4] to-[#614124] text-white     ">
				<div className="ui-layout-container">
					<div className="ui-section-hero__layout ui-layout-grid ">
						<div className=" text-center">
							<h2 className="text-white text-[2rem] mb-3">{props.topname}</h2>
							<h1 className="text-white text-[2.5rem] mb-3">{props.secondryname}</h1>
							<h2 className=" text-white text-[2rem] mb-3">{props.thirdname}</h2>
							<p className="ui-text-intro mb-3">{props.desc}</p>
							<Link to='/about' className=" btnnn">Read More</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Landingpage

