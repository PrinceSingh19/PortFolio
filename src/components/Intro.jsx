import React from "react";
import { motion } from "framer-motion";

const Intro = () => {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const item = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
	};

	return (
		<motion.div
			variants={container}
			initial="hidden"
			animate="show"
			id="intro"
			className="flex flex-col md:w-3/4 px-10 md:px-0 h-screen justify-center md:mx-auto"
		>
			<motion.h3 variants={item} className="text-textColor md:text-xl">
				Hi,
			</motion.h3>
			<motion.h3 variants={item} className="text-textColor md:text-xl">
				My name is,
			</motion.h3>
			<motion.h3 variants={item} className="text-3xl md:text-7xl font-semibold">
				{" "}
				Prince Singh.
			</motion.h3>{" "}
			<motion.sp variants={item} an className="text-slate-400 text-xl md:text-3xl font-medium">
				Software Engineer
			</motion.sp>
			{/* <motion.h3 variants={item} className="text-slate-400 text-xl md:text-3xl font-medium ">
				I build applications for the web.
			</motion.h3> */}
			<motion.p variants={item} className="text-lg md:text-xl mt-12 md:w-3/4 xl:w-1/2">
				Experienced Software Engineer with a strong foundation in both frontend and backend
				technologies. I excel in enhancing products, optimizing user experiences, and adapting to
				diverse tech stacks. Passionate about solving complex challenges, I continuously learn new
				programming languages and technologies to deliver impactful solutions that drive success.
			</motion.p>
		</motion.div>
	);
};

export default Intro;
