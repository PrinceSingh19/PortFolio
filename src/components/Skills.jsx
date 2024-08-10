import React, { useRef } from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap, FaGulp, FaReact } from "react-icons/fa";
import {
	SiTailwindcss,
	SiFastify,
	SiExpress,
	SiReactquery,
	SiRedux,
	SiDrizzle,
	SiPostgresql,
	SiPassport,
} from "react-icons/si";
import { DiGit, DiSass } from "react-icons/di";
import { RiNextjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";
const Skills = () => {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				delay: 0.1,
				staggerChildren: 0.2,
			},
		},
	};

	const item = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
	};
	return (
		<div id="skills" className="w-3/4 mx-auto mt-20 md:mt-40">
			<hr className="text-textColor w-1/2" />
			<div className="mt-2">
				<motion.h1
					initial={{ opacity: 0 }}
					transition={{ delay: 0.1 }}
					whileInView={{ opacity: 1 }}
					className="text-slate-300 text-2xl font-medium mb-4"
				>
					My Skills
				</motion.h1>
				<div className="w-3/4">
					<motion.p
						initial={{ opacity: 0 }}
						transition={{ delay: 0.1 }}
						whileInView={{ opacity: 1 }}
					>
						I creates the applications that are performant, easy to use and build with keeping the
						end-user in mind.
					</motion.p>
					<br />
					<motion.p
						initial={{ opacity: 0 }}
						transition={{ delay: 0.1 }}
						whileInView={{ opacity: 1 }}
					>
						Here are the technologies I have been worked till date
					</motion.p>
					<div className="grid grid-cols-2 mt-4">
						<motion.ul
							variants={container}
							whileInView="show"
							initial="hidden"
							className="list-disc list-inside space-y-2"
						>
							<motion.li variants={item} className="list">
								<IoLogoJavascript className="fill-yellow-300 text-xl" /> JavaScript
							</motion.li>
							<motion.li variants={item} className="list">
								<FaReact className="fill-blue-300 text-xl" /> ReactJS
							</motion.li>
							<motion.li variants={item} className="list">
								<RiNextjsLine className="fill-purple-500 text-xl" /> NextJS
							</motion.li>
							<motion.li variants={item} className="list">
								<RiTailwindCssFill className="fill-blue-500 text-xl" /> TailwindCSS
							</motion.li>
							<motion.li variants={item} className="list">
								<SiReactquery className="fill-red-500 text-xl" /> React Query
							</motion.li>
							<motion.li variants={item} className="list">
								<SiRedux className="fill-red-500 text-xl" /> Redux/Redux Toolkit
							</motion.li>
						</motion.ul>
						<motion.ul
							variants={container}
							initial="hidden"
							whileInView="show"
							className="list-disc list-inside space-y-2"
						>
							<motion.li variants={item} className="list">
								<FaNodeJs className="fill-blue-500 text-xl" /> NodeJS
							</motion.li>
							<motion.li variants={item} className="list">
								<SiExpress className="fill-purple-500 text-xl" /> ExpressJS{" "}
							</motion.li>
							<motion.li variants={item} className="list">
								<SiFastify className="fill-pink-500 text-xl" /> Fastify
							</motion.li>
							<motion.li variants={item} className="list">
								<SiDrizzle className="fill-red-500 text-xl" /> Drizzle Orm
							</motion.li>
							<motion.li variants={item} className="list">
								<SiPostgresql className="fill-red-500 text-xl" /> Postgresql
							</motion.li>
							<motion.li variants={item} className="list">
								<SiPassport className="fill-red-500 text-xl" /> PassportJS
							</motion.li>
						</motion.ul>
					</div>
					<motion.p
						initial={{ opacity: 0 }}
						transition={{ delay: 0.1 }}
						whileInView={{ opacity: 1 }}
						className="mt-4"
					>
						Visit my{" "}
						<a
							href="https://www.linkedin.com/in/prince-singh-703b5b1a4/"
							target="_blank"
							className="text-textColor"
						>
							linkedin
						</a>{" "}
						profile for more details or contact me.
					</motion.p>
				</div>
			</div>
		</div>
	);
};

export default Skills;
