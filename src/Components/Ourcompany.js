import React from 'react'
import ExpImage from '../images/img-2.png'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Ourcompany = () => {
    const company = [
			{
				title: "10 Year Experinces",
				description:
					"Mollit ad laboris deserunt sit officia sit commodo eiusmod ut tempor adipisicing adipisicing ex. Magna occaecat id laboris laboris est tempor duis do. Excepteur nostrud fugiat duis ex esse nostrud eu incididunt duis. Veniam laborum elit ex cupidatat dolore mollit do nisi do sint ex. Consectetur anim et eu ullamco quis ad sit in. Velit laborum consequat minim ullamco adipisicing commodo minim consectetur excepteur elit et occaecat laboris exercitation. Qui proident duis cupidatat non.",
				img: ExpImage,
			},
			{
				title: "10 Year Experinces",
				description:
					"Mollit ad laboris deserunt sit officia sit commodo eiusmod ut tempor adipisicing adipisicing ex. Magna occaecat id laboris laboris est tempor duis do. Excepteur nostrud fugiat duis ex esse nostrud eu incididunt duis. Veniam laborum elit ex cupidatat dolore mollit do nisi do sint ex. Consectetur anim et eu ullamco quis ad sit in. Velit laborum consequat minim ullamco adipisicing commodo minim consectetur excepteur elit et occaecat laboris exercitation. Qui proident duis cupidatat non.",
				img: ExpImage,
			},
			{
				title: "10 Year Experinces",
				description:
					"Mollit ad laboris deserunt sit officia sit commodo eiusmod ut tempor adipisicing adipisicing ex. Magna occaecat id laboris laboris est tempor duis do. Excepteur nostrud fugiat duis ex esse nostrud eu incididunt duis. Veniam laborum elit ex cupidatat dolore mollit do nisi do sint ex. Consectetur anim et eu ullamco quis ad sit in. Velit laborum consequat minim ullamco adipisicing commodo minim consectetur excepteur elit et occaecat laboris exercitation. Qui proident duis cupidatat non.",
				img: ExpImage,
			},
		];
  return (
		<>
			<div className=" pb-10">
				<h1 className=" text-center text-[2.5rem] font-bold">WHY INITIATIVE COMPANY</h1>
			</div>
			<div className=" container mt-10">
				<div className="row text-center">
					{company.map((item) => (
						<div key={item.title} className=" col-lg-4 col-md-6  pb-10 ">
							<img className="  pb-5 company_img"  src={item.img} />
							<h3>{item.title}</h3>
							<p className=" pb-5 ">{item.description}</p>
							<Link to='/about' className=" btnn ">Read More</Link>
						</div>
					))}
				</div>
			</div>
		</>
	);
}


export default Ourcompany
