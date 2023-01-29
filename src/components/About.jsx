import React from "react";
import { motion } from "framer-motion";
const About = () => {
	return (
		<div id="about" className="w-3/4 mx-auto mt-48">
			<hr className="text-textColor w-1/2" />
			<div className="mt-2">
				<motion.h1
					initial={{ opacity: 0 }}
					transition={{ delay: 0.1 }}
					whileInView={{ opacity: 1 }}
					className="text-slate-300 text-2xl font-medium mb-4"
				>
					About Me
				</motion.h1>
				<div className="grid grid-cols-1 md:grid-cols-2 ">
					<motion.div
						initial={{ opacity: 0 }}
						transition={{ delay: 0.1 }}
						whileInView={{ opacity: 1 }}
						className="order-2 md:order-first"
					>
						<p>
							Hello my name is Prince Singh and I love to build things that works in internet. I
							have serious passion for creating intuitive, dynamic user experiences and making web
							more accessible to people through my work.
						</p>
						<br />
						<p>
							My main focus is to build products that reaches to millions of people and make their
							lives easy.
						</p>
						<p>Here are the few technologies that I have been working with recently</p>
						<div className="grid grid-cols-2">
							<ul className="list-disc list-inside text-white">
								<li>JavaScript (ES6+)</li>
								<li>React</li>
							</ul>
							<ul className="list-disc list-inside text-white">
								<li>TailwindCSS</li>
								<li>BootStrap</li>
							</ul>
						</div>
					</motion.div>
					<div className=" mt-6 mb-3 md:mb-0 md:mt-0 md:ml-20 flex justify-center">
						<img
							src="/images/avatar.jpg"
							alt="my profie image"
							className="object-cover w-52 rounded-md mix-blend-luminosity"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
