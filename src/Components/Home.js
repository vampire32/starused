import React from 'react'
import PLay from '../images/play.png'
import Slider from '../images/slider-img.png'

const Home = () => {
   
			
   
  return (
		<section className="slider_section ">
			<div className="play_btn">
				<a href="">
					<img src={PLay} alt="" />
				</a>
			</div>
		
			<div className="container">
				<div
					id="carouselExampleIndicators"
					className="carousel slide"
					data-ride="carousel"
				>
					<ol className="carousel-indicators">
						<li
							data-target="#carouselExampleIndicators"
							data-slide-to="0"
							className="active"
						></li>
						<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
						<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
						<li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
					</ol>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<div className="row">
								<div className="col-md-6">
									<div className="detail-box">
										<h1>BUY AND SELL USED FURNITURE IN ABU DHABI | BEST FURNITURE BUYERS IN AL IN</h1>
										<span>USED AND NEW FURNITURE.</span>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore
										</p>
										<div className="btn-box">
											<a href="" className="btn-1">
												Read More
											</a>
											<a href="" className="btn-2">
												Contact us
											</a>
										</div>
									</div>
								</div>
								<div className="col-md-6 img-container">
									<div className="img-box">
										<img src={Slider} alt="" />
									</div>
								</div>
							</div>
						</div>
						<div className="carousel-item ">
							<div className="row">
								<div className="col-md-6">
									<div className="detail-box">
										<h1>The Latest</h1>
										<span>Furniture</span>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore
										</p>
										<div className="btn-box">
											<a href="" className="btn-1">
												Read More
											</a>
											<a href="" className="btn-2">
												Contact us
											</a>
										</div>
									</div>
								</div>
								<div className="col-md-6 img-container">
									<div className="img-box">
										<img src={Slider} alt="" />
									</div>
								</div>
							</div>
						</div>
						<div className="carousel-item ">
							<div className="row">
								<div className="col-md-6">
									<div className="detail-box">
										<h1>The Latest</h1>
										<span>Furniture</span>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore
										</p>
										<div className="btn-box">
											<a href="" className="btn-1">
												Read More
											</a>
											<a href="" className="btn-2">
												Contact us
											</a>
										</div>
									</div>
								</div>
								<div className="col-md-6 img-container">
									<div className="img-box">
										<img src={Slider} alt="" />
									</div>
								</div>
							</div>
						</div>
						<div className="carousel-item ">
							<div className="row">
								<div className="col-md-6">
									<div className="detail-box">
										<h1>The Latest</h1>
										<span>Furniture</span>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore
										</p>
										<div className="btn-box">
											<a href="" className="btn-1">
												Read More
											</a>
											<a href="" className="btn-2">
												Contact us
											</a>
										</div>
									</div>
								</div>
								<div className="col-md-6 img-container">
									<div className="img-box">
										<img src={Slider} alt="" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Home