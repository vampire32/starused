import React from "react";


const Furniture = (props) => {
	return (
		<section className="ui-section-feature">
			<div className="ui-layout-container">
				<h1 className="text-center">Used Furniture</h1>
				<p className=" text-center">Adipisicing aliquip mollit esse id.</p>
				<div className="ui-section-feature__layout ui-layout-grid ui-layout-grid-2">
					<img src={props.img} alt="#" className="ui-image-half-left" />

					<div>
						<h2>{props.Name}</h2>
						<p className="ui-text-intro">{props.desc}</p>
						<ul className="ui-component-list ui-component-list-feature ui-layout-grid">
							<li className="ui-component-list--item ui-component-list--item-check">
								{props.l1}
							</li>
							<li className="ui-component-list--item ui-component-list--item-check">
								{props.l2}
							</li>
							<li className="ui-component-list--item ui-component-list--item-check">
								{props.l3}
							</li>
							<li className="ui-component-list--item ui-component-list--item-check">
								{props.l4}
							</li>
						</ul>
					</div>
				</div>
				<div className="ui-section-feature__layout ui-layout-grid ui-layout-grid-2">
					<div>
						<h2>{props.Name2}</h2>
						<p className="ui-text-intro">{props.desc2}</p>
						<ul className="ui-component-list ui-component-list-feature ui-layout-grid">
							<li className="ui-component-list--item ui-component-list--item-check">
								{props.l11}
							</li>
							<li className="ui-component-list--item ui-component-list--item-check">
								{props.l22}
							</li>
							<li className="ui-component-list--item ui-component-list--item-check">
								{props.l33}
							</li>
							<li className="ui-component-list--item ui-component-list--item-check">
								{props.l44}
							</li>
						</ul>
					</div>
					<img src={props.img2} alt="#" className="ui-image-half-left" />
				</div>
			</div>
		</section>
	);
};

export default Furniture;
