import React from "react";

const Intro = () => {
	return (
		<div className="flex flex-col md:w-3/4 px-10 md:px-0 h-screen justify-center md:mx-auto">
			<h3 className="text-textColor md:text-xl">Hi,</h3>
			<h3 className="text-textColor md:text-xl">My name is,</h3>
			<h1 className="text-3xl md:text-7xl font-semibold"> Prince Singh.</h1>{" "}
			<span className="text-slate-400 text-xl md:text-3xl font-medium">Front end engineer</span>
			<h3 className="text-slate-400 text-xl md:text-3xl font-medium ">
				I build applications for the web.
			</h3>
			<p className="text-lg md:text-xl mt-12 md:w-80">
				I'm a frontend engineer specializing in building accessible and user facing features with
				the help of reusable codes
			</p>
		</div>
	);
};

export default Intro;
