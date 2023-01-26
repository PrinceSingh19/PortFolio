import React from "react";
import { BsCodeSlash } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { FaCircle } from "react-icons/fa";

const OtherProjects = ({ other }) => {
	const { title, imgSrc, tech, demo, github } = other;
	return (
		<div className="hover:transition-all hover:duration-500 hover:scale-105 hover:shadow-md hover:shadow-slate-400">
			<div className="pb-2 md:h-64 text-white bg-slate-700 rounded-md pt-1">
				<div className="grid grid-cols-2 gap-x-5 place-items-center mt-2 px-2">
					<div className="md:text-lg flex gap-x-2">
						<FaCircle className="fill-red-400" />
						<FaCircle className="fill-yellow-400" />
						<FaCircle className="fill-blue-400" />
					</div>
					<div className="space-x-8 flex text-xl items-center">
						<button className="hover:scale-110">
							<a href={github} target="/blank">
								<BsCodeSlash className="fill-textColor md:text-2xl" />
							</a>
						</button>
						<button className="hover:scale-110">
							<a href={demo} target="/blank">
								<FiExternalLink className="stroke-slate-200 md:text-2xl" />
							</a>
						</button>
					</div>
				</div>
				<figure className="w-11/12 mx-auto mt-6">
					<img src={imgSrc} alt="alt" className="rounded-md " />
					<figcaption className="text-center font-medium pb-2 md:pb-0">{title}</figcaption>
				</figure>
				<div>
					<h3 className="text-center text-textColor text-sm">{tech}</h3>
				</div>
			</div>
		</div>
	);
};

export default OtherProjects;
