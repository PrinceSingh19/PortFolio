import React from "react";
import { BsCodeSlash } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { FaCircle } from "react-icons/fa";

const OtherProjects = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-x-7 mb-7 mt-4">
			<div className="h-52 md:h-60 text-white bg-slate-700 rounded-md">
				<div className="grid grid-cols-2 gap-x-5 place-items-center mt-2 px-2">
					<div className="md:text-lg flex gap-x-2">
						<FaCircle className="fill-red-400" />
						<FaCircle className="fill-yellow-400" />
						<FaCircle className="fill-blue-400" />
					</div>
					<div className="space-x-8 flex text-xl items-center">
						<button className="hover:scale-110">
							<a>
								<BsCodeSlash className="fill-textColor md:text-2xl" />
							</a>
						</button>
						<button className="hover:scale-110">
							<a>
								<FiExternalLink className="stroke-slate-200 md:text-2xl" />
							</a>
						</button>
					</div>
				</div>
				<figure className="w-11/12 mx-auto mt-6">
					<img src="../../public/images/shoppingapp.jpg" alt="alt" className="rounded-md " />
					<figcaption className="md:text-lg text-center font-medium pb-2 md:pb-0">
						Survey Form
					</figcaption>
				</figure>
				<div>
					<h3 className="text-center text-textColor text-sm">React, Redux-toolkit, HTML</h3>
				</div>
			</div>
		</div>
	);
};

export default OtherProjects;
