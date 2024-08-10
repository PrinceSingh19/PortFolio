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
							Results-driven Software Engineer with over 1.5 years of experience enhancing product
							functionality and optimizing user experiences. I've led the development of 10+ web
							applications, boosting user engagement by 50% and improving site performance by 70%.
							Skilled in translating complex requirements into scalable solutions, I stay updated on
							industry advancements and have mastered many programming languages.
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
								<li>ReactJS/ NextJS</li>
							</ul>
							<ul className="list-disc list-inside text-white">
								<li>NodeJS</li>
								<li>Tailwindcss</li>
							</ul>
						</div>
					</motion.div>
					<div className=" mt-6 mb-3 md:mb-0 md:mt-0 md:ml-20 flex justify-center">
						<img
							src="/images/my-photo.jpeg"
							alt="my profie image"
							className="object-cover w-52 md:w-80 rounded-md "
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
