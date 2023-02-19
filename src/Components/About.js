import React from 'react'
import "../css/responsive.css";
import '../css/style2.css'
import {AiFillPlayCircle} from 'react-icons/ai'
import {FiPenTool} from 'react-icons/fi'
import {FaHorseHead} from 'react-icons/fa'
import {BiAnchor} from 'react-icons/bi'
import BM from '../images/about-business-man.jpg'
import {BiHappyAlt} from 'react-icons/bi'
import {AiOutlineDownload} from 'react-icons/ai'
import {FaThumbsUp} from 'react-icons/fa'
import {GiCoffeeCup} from 'react-icons/gi'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const About = () => {
  return (
		<>
			<section className="hero-area2">
				<div className="block">
					<div className="video-button">
						<a href="#" className="popup-video ">
							<AiFillPlayCircle className="w-[80px] h-[80px]" />
						</a>
					</div>
					<h1>Experience the new reality</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
						excepturi. At recusandae sit perferendis autem,iste tempora nostrum
						numquam sapiente!
					</p>
					<Link data-scroll to="/" className="btn btn-transparent">
						Explore Us
					</Link>
				</div>
			</section>

			<section className=" about section">
				<div className="container">
					<div className="row">
						<div
							className="title text-center wow fadeIn"
							data-wow-duration="1500ms"
						>
							<h2 className="text-black">
								About <span className="color">Us</span>{" "}
							</h2>
							<div className="border"></div>
						</div>

						<div
							className="col-md-4 text-center wow fadeInUp"
							data-wow-duration="500ms"
						>
							<div className="block">
								<div className="icon-box">
									<FiPenTool className="tf-tools ml-[50px]"></FiPenTool>
								</div>

								<div className="content text-center">
									<h3 className="ddd">We're Creative</h3>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Velit, nihil, libero, perspiciatis eos provident laborum eum
										dignissimos
									</p>
								</div>
							</div>
						</div>

						<div
							className="col-md-4 text-center wow fadeInUp"
							data-wow-duration="500ms"
							data-wow-delay="250ms"
						>
							<div className="block">
								<div className="icon-box">
									<FaHorseHead className="tf-strategy ml-[50px]"></FaHorseHead>
								</div>

								<div className="content text-center">
									<h3>We're Professional</h3>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Velit, nihil, libero, perspiciatis eos provident laborum eum
										dignissimos
									</p>
								</div>
							</div>
						</div>

						<div
							className="col-md-4 text-center wow fadeInUp"
							data-wow-duration="500ms"
							data-wow-delay="500ms"
						>
							<div className="block kill-margin-bottom">
								<div className="icon-box">
									<BiAnchor className="tf-anchor2 ml-[50px]"></BiAnchor>
								</div>

								<div className="content text-center">
									<h3>We're Genius</h3>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Velit, nihil, libero, perspiciatis eos provident laborum eum
										dignissimos
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="section about-2 padding-0 bg-[#d9c7a4]" id="about">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-6 padding-0 ">
							<img className="img-responsive" src={BM} alt="" />
						</div>
						<div className="col-md-6">
							<div className="content-block">
								<h2>We’re A Digital Design Agency.</h2>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Aliquam tempora itaque, autem dolores culpa cum mollitia
									voluptate nesciunt voluptatibus quasi.
								</p>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Perferendis eveniet vel et mollitia nemo corporis sed ut,
									exercitationem incidunt, rerum nam doloremque quos ratione
									doloribus, officiis adipisci error quasi soluta?
								</p>
								<p>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
									Dolore, magnam.
								</p>
								<div className="row">
									<div className="col-md-6">
										<div className="media">
											<div className="pull-left">
												<i className="tf-circle-compass"></i>
											</div>
											<div className="media-body">
												<h4 className="media-heading">SEO Optimized</h4>
												<p>
													Lorem ipsum, dolor sit amet consectetur adipisicing
													elit. Possimus consectetur dolores repellendus eos
													saepe
												</p>
											</div>
										</div>
									</div>
									<div className="col-md-6">
										<div className="media">
											<div className="pull-left">
												<i className="tf-hotairballoon"></i>
											</div>
											<div className="media-body">
												<h4 className="media-heading">Easy Customization</h4>
												<p>
													Lorem ipsum, dolor sit amet consectetur adipisicing
													elit. Possimus consectetur dolores repellendus{" "}
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id="counter" className="parallax-section bg-1 section overly">
				<div className="container">
					<div className="row">
						<div
							className="col-md-3 col-sm-6 col-xs-12 text-center wow fadeInDown"
							data-wow-duration="500ms"
						>
							<div className="counters-item">
								<BiHappyAlt className="tf-ion-android-happy w-[80px] h-[80px]  ml-[95px] "></BiHappyAlt>
								<span data-speed="3000" data-to="320">
									320
								</span>
								<h3>Happy Clients</h3>
							</div>
						</div>

						<div
							className="col-md-3 col-sm-6 col-xs-12 text-center wow fadeInDown"
							data-wow-duration="500ms"
							data-wow-delay="200ms"
						>
							<div className="counters-item">
								<AiOutlineDownload className="tf-ion-android-happy w-[80px] h-[80px] ml-[95px] "></AiOutlineDownload>
								<span data-speed="3000" data-to="565">
									565
								</span>
								<h3>Projects completed</h3>
							</div>
						</div>

						<div
							className="col-md-3 col-sm-6 col-xs-12 text-center wow fadeInDown"
							data-wow-duration="500ms"
							data-wow-delay="400ms"
						>
							<div className="counters-item">
								<FaThumbsUp className="tf-ion-android-happy w-[80px] h-[80px] ml-[95px]"></FaThumbsUp>
								<span data-speed="3000" data-to="95">
									95
								</span>
								<h3>Positive feedback</h3>
							</div>
						</div>

						<div
							className="col-md-3 col-sm-6 col-xs-12 text-center wow fadeInDown"
							data-wow-duration="500ms"
							data-wow-delay="600ms"
						>
							<div className="counters-item kill-margin-bottom">
								<GiCoffeeCup className="tf-ion-android-happy w-[80px] h-[80px] ml-[95px]"></GiCoffeeCup>
								<span data-speed="3000" data-to="2500">
									2500
								</span>
								<h3>Cups of Coffee</h3>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default About