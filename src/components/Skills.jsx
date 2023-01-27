import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap, FaGulp, FaReact } from "react-icons/fa";
import { SiJquery, SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { DiGit, DiSass } from "react-icons/di";

const Skills = () => {
	return (
		<div className="w-3/4 mx-auto mt-20 md:mt-40">
			<hr className="text-textColor w-1/2" />
			<div className="mt-2">
				<h1 className="text-slate-300 text-2xl font-medium mb-4">My Skills</h1>
				<div className="w-3/4">
					<p>
						I create website that are performant, easy to use and build with keeping the end-user in
						mind. My main area of expertise is front-end-development.
					</p>
					<br />
					<p>Here are the technologies I have been worked till date</p>
					<div className="grid grid-cols-2 mt-4">
						<ul className="list-disc list-inside ">
							<li className="list">
								<IoLogoJavascript className="fill-yellow-300 text-xl" /> JavaScript
							</li>
							<li className="list">
								<FaReact className="fill-blue-300 text-xl" /> React
							</li>
							<li className="list">
								<SiRedux className="fill-purple-500 text-xl" /> Redux
							</li>
							<li className="list">
								<SiJquery className="fill-blue-500 text-xl" /> Jquery
							</li>
							<li className="list">
								<FaGulp className="fill-red-500 text-xl" /> Gulp
							</li>
						</ul>
						<ul className="list-disc list-inside">
							<li className="list">
								<SiTailwindcss className="fill-blue-500 text-xl" /> TailwindCSS
							</li>
							<li className="list">
								<FaBootstrap className="fill-purple-500 text-xl" /> BootStrap
							</li>
							<li className="list">
								<DiSass className="fill-pink-500 text-xl" /> Sass
							</li>
							<li className="list">
								<DiGit className="fill-red-500 text-xl" /> Git
							</li>
						</ul>
					</div>
					<p className="mt-2">
						Visit my{" "}
						<a
							href="https://www.linkedin.com/in/prince-singh-703b5b1a4/"
							target="_blank"
							className="text-textColor"
						>
							linkedin
						</a>{" "}
						profile for more details or contact me.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Skills;
