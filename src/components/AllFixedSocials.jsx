import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const AllFixedSocials = () => {
	return (
		<div className="sticky top-52 hidden md:block ">
			<div className="absolute top-52 left-4">
				<ul className="space-y-4 flex flex-col items-center">
					<li>
						<a href="mailto:princesingh808087@gmail.com" className="md:text-lg contact">
							<HiOutlineMail className="text-3xl stroke-slate-100" />
						</a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/in/prince-singh-703b5b1a4/"
							target="_blank"
							className="socials"
						>
							<BsLinkedin className="fill-slate-100 text-2xl" />
						</a>
					</li>
					<li>
						<a
							href="https://www.instagram.com/princesingh.8080/"
							target="_blank"
							className="socials"
						>
							<BsInstagram className="fill-slate-100 text-2xl" />
						</a>
					</li>
					<li>
						<a href="https://github.com/PrinceSingh19" target="_blank" className="socials">
							<BsGithub className="fill-slate-100 text-2xl" />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default AllFixedSocials;
