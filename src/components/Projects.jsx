import React from "react";
import SingleProject from "./SingleProject";
import { Data } from "./Data";
import OtherProjects from "./OtherProjects";

const Projects = () => {
	return (
		<div className="w-3/4 mx-auto mt-20 md:mt-40">
			<hr className="text-textColor w-1/2" />
			<div className="mt-2">
				<h1 className="text-slate-300 text-2xl font-medium mb-4">
					Project that I have made recently
				</h1>
				<div>
					{Data.map((project, index) => {
						return <SingleProject key={index} ind={index} project={project} />;
					})}
				</div>
				<div>
					<h1 className="text-textColor">Other noteworthy projects</h1>
					<OtherProjects />
				</div>
			</div>
		</div>
	);
};

export default Projects;
