import React from "react";
import SingleProject from "./SingleProject";
import { Data, otherData } from "./Data";
import OtherProjects from "./OtherProjects";

const Projects = () => {
	const mobileOther = otherData.slice(0, 3);
	return (
		<div id="projects" className="w-3/4 mx-auto mt-20 md:mt-40">
			<hr className="text-textColor w-1/2" />
			<div className="mt-2">
				{/* Displaying main react projects */}
				<h1 className="text-slate-300 text-2xl font-medium mb-4">
					Project that I have made recently
				</h1>
				<div>
					{Data.map((project, index) => {
						return <SingleProject key={index} ind={index} project={project} />;
					})}
				</div>
				<div>
					{/* Displaying other small projects */}
					<h1 className="text-textColor">Other noteworthy projects</h1>

					<div className="grid grid-cols-1 gap-y-3 gap-x-7 mb-7 mt-4 md:hidden">
						{/* Displaying only 3 projects on mobile devices */}
						{mobileOther.map((other, index) => {
							return <OtherProjects key={index} other={other} />;
						})}
					</div>
					<div className="hidden md:grid gap-y-3 grid-cols-3 gap-x-7 mb-7 mt-4 ">
						{/* Displaying all other projects on md devices */}
						{otherData.map((other, index) => {
							return <OtherProjects key={index} other={other} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
