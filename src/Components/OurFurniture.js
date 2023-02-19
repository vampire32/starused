import React from 'react'
import img1 from '../images/img-1.png'

const OurFurniture = () => {
  return (
		<section className=" container">
			<h1 className=" text-center ">Our Furniture</h1>
			<p className=" text-center">
				Eu veniam esse esse velit fugiat exercitation dolore aliqua tempor
				eiusmod.
			</p>
			<div className=" row g-0">
				<div className=" col-md-4  ">
					<img className="furniture_imge" src={img1} />
				</div>
				<div className=" col-md-8 text-center">
					<h2 className="text-[2rem] font-bold">New Furniture</h2>
					<p className=" text-justify pb-10 ">
						Commodo aute aute esse excepteur incididunt mollit pariatur.
						Pariatur culpa qui ipsum fugiat laboris officia commodo veniam
						consequat minim. Officia reprehenderit adipisicing proident mollit
						velit adipisicing enim consectetur cillum sint incididunt nostrud
						nisi aliqua. Cillum in aliqua proident sunt ipsum fugiat amet magna
						pariatur eu laboris proident aliquip. Reprehenderit proident veniam
						amet deserunt enim commodo ullamco.
					</p>
					<a href="#" className="btnnn">
						Read More
					</a>
				</div>
			</div>
			<div className=" row g-0 " style={{ marginTop: "15rem" }}>
				<div className=" col-md-8 text-center">
					<h2>New Furniture</h2>
					<p className="text-justify pb-10 ">
						Commodo aute aute esse excepteur incididunt mollit pariatur.
						Pariatur culpa qui ipsum fugiat laboris officia commodo veniam
						consequat minim. Officia reprehenderit adipisicing proident mollit
						velit adipisicing enim consectetur cillum sint incididunt nostrud
						nisi aliqua. Cillum in aliqua proident sunt ipsum fugiat amet magna
						pariatur eu laboris proident aliquip. Reprehenderit proident veniam
						amet deserunt enim commodo ullamco.
					</p>
					<a href="#" className="btnnn">
						Read More
					</a>
				</div>
				<div className=" col-md-4 ">
					<img className="furniture_imge" src={img1} />
				</div>
			</div>
			<div className=" row g-0 " style={{ marginTop: "15rem" }}>
				<div className=" col-md-4 ">
					<img className="furniture_imge" src={img1} />
				</div>
				<div className=" col-md-8 text-center ">
					<h2>New Furniture</h2>
					<p className="text-justify pb-10 ">
						Commodo aute aute esse excepteur incididunt mollit pariatur.
						Pariatur culpa qui ipsum fugiat laboris officia commodo veniam
						consequat minim. Officia reprehenderit adipisicing proident mollit
						velit adipisicing enim consectetur cillum sint incididunt nostrud
						nisi aliqua. Cillum in aliqua proident sunt ipsum fugiat amet magna
						pariatur eu laboris proident aliquip. Reprehenderit proident veniam
						amet deserunt enim commodo ullamco.
					</p>
					<a href="#" className="btnnn">
						Read More
					</a>
				</div>
			</div>
		</section>
	);
}

export default OurFurniture
