import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";
const AllFixedSocials = () => {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
			},
		},
	};

	const item = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
	};

	return (
		<div className="sticky top-52 hidden md:block ">
			<div className="absolute top-52 left-4">
				<motion.ul
					variants={container}
					initial="hidden"
					animate="show"
					className="space-y-4 flex flex-col items-center"
				>
					<motion.li variants={item}>
						<a href="mailto:princesingh808087@gmail.com" className="md:text-lg contact">
							<HiOutlineMail className="text-3xl stroke-slate-100" />
						</a>
					</motion.li>
					<motion.li variants={item}>
						<a
							href="https://www.linkedin.com/in/prince-singh-703b5b1a4/"
							target="_blank"
							className="socials"
						>
							<BsLinkedin className="fill-slate-100 text-2xl" />
						</a>
					</motion.li>
					<motion.li variants={item}>
						<a
							href="https://www.instagram.com/princesingh.8080/"
							target="_blank"
							className="socials"
						>
							<BsInstagram className="fill-slate-100 text-2xl" />
						</a>
					</motion.li>
					<motion.li variants={item}>
						<a href="https://github.com/PrinceSingh19" target="_blank" className="socials">
							<BsGithub className="fill-slate-100 text-2xl" />
						</a>
					</motion.li>
				</motion.ul>
			</div>
		</div>
	);
};

export default AllFixedSocials;
