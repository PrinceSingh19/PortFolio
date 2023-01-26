import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const SingleProject = ({ ind, project }) => {
	const isEven = ind % 2 === 0;
	const { title, description, github, demoLink, imgSrc, tech, alt } = project;
	return (
		<div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-x-10 items-center">
			<div className="md:hidden">
				<h3 className="text-textColor">Featured Project</h3>
				<h1 className="text-xl md:text-3xl text-slate-400 font-medium mb-4">{title}</h1>
			</div>
			<div className={`${isEven == false ? "md:order-1" : ""} `}>
				<figure>
					<img src={imgSrc} alt={alt} className="rounded-md " />
				</figure>
			</div>
			<div className="mt-4">
				<div className="hidden md:block">
					<h3 className="text-textColor ">Featured Project</h3>
					<h1 className="text-xl md:text-3xl text-slate-400 font-medium">{title}</h1>
				</div>
				<p className="my-4">{description}</p>
				<small className="text-sm text-textColor">{tech}</small>
				<div className="mt-2 flex items-center gap-6">
					<button className="px-4 py-2 border-2 border-neon hover:bg-violet-900 rounded-md">
						<a href={github} target="/blank" className="flex items-center gap-x-2">
							<FaGithub className="fill-green-300 text-lg" /> Github
						</a>
					</button>
					<button className="px-4 py-2 border-2 border-neon rounded-md hover:bg-violet-900">
						<a href={demoLink} target="/blank" className="flex items-center gap-x-2">
							<FiExternalLink className="stroke-green-300 text-lg" /> Demo
						</a>
					</button>
				</div>
			</div>
		</div>
	);
};

export default SingleProject;
