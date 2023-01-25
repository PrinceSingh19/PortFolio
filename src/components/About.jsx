import React from "react";

const About = () => {
	return (
		<div className="w-3/4 mx-auto">
			<hr className="text-textColor w-1/2" />
			<div className="mt-2">
				<h1 className="text-slate-300 text-2xl font-medium mb-4">About Me</h1>
				<div className="grid grid-cols-1 md:grid-cols-2">
					<div>
						<p>
							Hello my name is Prince Singh and I love to build things that works in internet. I
							have serious passion for creating intuitive, dynamic user experiences and making web
							more accessible to people through my work.
						</p>
						<br />
						<p>
							My main focus is to build products that reaches to millions of people and make their
							lives easy.
						</p>
						<p>Here are the few technologies that I have been working with recently</p>
						<div className="grid grid-cols-2">
							<ul className="list-disc list-inside text-white">
								<li>JavaScript (ES6+)</li>
								<li>React</li>
							</ul>
							<ul className="list-disc list-inside text-white">
								<li>TailwindCSS</li>
								<li>BootStrap</li>
							</ul>
						</div>
					</div>
					<div className="mt-6 md:mt-0 md:ml-20 ">
						<img
							src="https://th.bing.com/th/id/R.0225855b2d84ed75edee72d336db94a7?rik=ur03%2b98dOcebMw&riu=http%3a%2f%2feskipaper.com%2fimages%2fimages-2.jpg&ehk=d1SxQlwf21gsnaF28wg0HZQjPhrc2N0xSKLqA2lgX3c%3d&risl=&pid=ImgRaw&r=0g"
							alt="my profie image"
							className="object-cover h-30"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
