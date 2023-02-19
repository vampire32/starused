import React from 'react'
import icon1 from '../images/icon-1.png'
import icon2 from '../images/icon-2.png'
import icon3 from '../images/icon-3.png'
import icon4 from '../images/icon-4.png'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const OurServices = () => {
   const services = [
			{
				title: "Used Furnitures",
				descriptiion:
					"There are many variations of passages of Lorem Ipsum available, but the",
				img: icon1,
				link: "/usedfurniture",
			},
			{
				title: "Used Home Appliances",
				descriptiion:
					"There are many variations of passages of Lorem Ipsum available, but the",
				img: icon2,
				link: "/homeappliances",
			},
			{
				title: "Used Air Condition",
				descriptiion:
					"There are many variations of passages of Lorem Ipsum available, but the",
				img: icon3,
				link: "/usedaircondition",
			},
		];
  return (
		<div className="services_section layout_padding">
			<div className="container">
				<h1 className="services_taital">our services</h1>
				<p className="many_taital">
					There are many variations of passages of Lorem Ipsum{" "}
				</p>
				<div className="services_section2 layout_padding">
					<div className="row">
						{services.map((item) => (
							<div key={item.title} className="col-lg-4 col-sm-6 pb-10">
								<div className="icon_1">
									<img className='img_adjust' src={item.img} />
								</div>
								<h2 className="furnitures_text">{item.title}</h2>
								<p className="dummy_text">
									{item.descriptiion}
								</p>
								<div className="read_bt_main">
									<div className="read_bt">
										<Link to={item.link}>Read More</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default OurServices