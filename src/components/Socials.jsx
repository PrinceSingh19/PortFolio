import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const Socials = () => {
	return (
		<div>
			<li>
				<a
					href="https://www.linkedin.com/in/prince-singh-703b5b1a4/"
					target="_blank"
					className="socials"
				>
					<BsLinkedin className="fill-blue-500" /> LinkedIn
				</a>
			</li>
			<li>
				<a href="https://www.instagram.com/princesingh.8080/" target="_blank" className="socials">
					<BsInstagram className="fill-pink-500" /> Instagram
				</a>
			</li>
			<li>
				<a href="https://github.com/PrinceSingh19" target="_blank" className="socials">
					<BsGithub className="fill-green-500" /> Github
				</a>
			</li>
		</div>
	);
};

export default Socials;
