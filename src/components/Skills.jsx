import React from "react";

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
							<li>JavaScript</li>
							<li>React</li>
							<li>Redux</li>
							<li>JQuery</li>
							<li>Gulp</li>
						</ul>
						<ul className="list-disc list-inside">
							<li>TailwindCSS</li>
							<li>BootStrap</li>
							<li>Sass</li>
							<li>Git</li>
						</ul>
					</div>
					<p className="mt-2">
						Visit my{" "}
						<a
							href="https://www.linkedin.com/in/prince-singh-703b5b1a4/"
							target="/blank"
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
