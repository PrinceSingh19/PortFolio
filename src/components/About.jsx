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
							Experienced Software Engineer with a strong background in both frontend and backend
							technologies. I have a proven track record of driving product enhancements, optimizing
							user experiences, and mastering diverse tech stacks. Adept at translating complex
							client needs into impactful solutions, I am passionate about leveraging my expertise
							to tackle challenging projects and contribute to your organization's success. My
							hunger for continuous learning drives me to explore and master new programming
							languages and emerging technologies, ensuring I stay at the forefront of industry
							advancements.
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
