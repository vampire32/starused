import React from 'react'
import { AiFillPhone } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

const Floating = () => {
  return (
		<>
			<a
				href="https://api.whatsapp.com/send?phone+03469413675"
				target="_blank"
				class="float"
			>
				<AiFillPhone class="fa fa-plus my-float"></AiFillPhone>
			</a>
			<a
				href="https://api.whatsapp.com/send?phone+03469413675"
				target="_blank"
				class="float2"
			>
				<BsWhatsapp class="fa fa-plus my-float"></BsWhatsapp>
			</a>
		</>
	);
}

export default Floating
