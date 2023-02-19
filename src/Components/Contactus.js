import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contactus = (props) => {
  return (
		<>
			<div className="container mt-10 pb-10">
				<h1 className="text-center text-[2.5rem] mb-5">{props.heading}</h1>
				<div className=" row">
					<div className="col-lg-4 col-md-5">
						<div
							className="card text-center bg-[#d9c7a4] text-white pt-4 hover:bg-black drop-shadow-2xl rounded-2xl"
							style={{ width: "18rem" }}
						>
							<MdOutlineEmail className="contact__option-icon  ml-[6rem] w-[80px] h-[80px]" />
							<div className="card-body">
								<h5 className="card-title">Email</h5>
								<h5>hkhankor@gmail.com</h5>
								<a href="mailto:hkhankor@gmail.com" target="_blank">
									Send a message
								</a>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-5">
						<div
							className="card text-center bg-[#d9c7a4] text-white pt-4  hover:bg-black drop-shadow-2xl rounded-2xl"
							style={{ width: "18rem" }}
						>
							<BsWhatsapp className="contact__option-icon ml-[6rem] w-[80px] h-[80px]" />
							<div className="card-body">
								<h4>WhatsApp</h4>
								<h5>03469413675</h5>
								<a
									href="https://api.whatsapp.com/send?phone+03469413675"
									target="_blank"
								>
									Send message{" "}
								</a>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-5">
						<div
							className="card text-center bg-[#d9c7a4] text-white pt-4  hover:bg-black drop-shadow-2xl rounded-2xl"
							style={{ width: "18rem" }}
						>
							<RiMessengerLine className="contact__option-icon ml-[6rem] w-[80px] h-[80px]" />
							<div className="card-body">
								<h4>Messenger</h4>
								<h5>Hasan Tariq</h5>
								<a href="#">Send a message </a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Contactus