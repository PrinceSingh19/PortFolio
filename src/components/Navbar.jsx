import React, { useState } from "react";
import { TbLetterP } from "react-icons/tb";
import { RiMenuFill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
	const [navOpen, setNavOpen] = useState(false);
	return (
		<>
			<div className="mx-2 sticky grid grid-cols-2 items-center  ">
				<div>
					<TbLetterP className="stroke-red-500 stroke-2 text-6xl" />
				</div>
				<div className="md:hidden flex justify-end mr-3 z-50">
					<button onClick={() => setNavOpen(!navOpen)}>
						{navOpen ? (
							<RiMenuFill className="text-white text-3xl" />
						) : (
							<IoCloseSharp className="text-white text-3xl" />
						)}
					</button>
				</div>
				<div className="text-cyan-400 text-lg hidden md:block">
					<ol className="flex md:justify-center items-center space-x-10">
						<li className="cursor-pointer hover:text-cyan-600">About</li>
						<li className="cursor-pointer hover:text-cyan-600">My Skills</li>
						<li className="cursor-pointer hover:text-cyan-600">Projects</li>
						<li className="cursor-pointer hover:text-cyan-600">Contact</li>
					</ol>
				</div>
			</div>
			<div>
				<div className="md:hidden bg-white z-40">
					<ol
						className={`flex flex-col gap-y-3 items-end text-cyan-400 text-lg mr-3 ${
							navOpen ? "hidden" : "right-0 duration-1000"
						}`}
					>
						<li className="cursor-pointer hover:text-cyan-600">About</li>
						<li className="cursor-pointer hover:text-cyan-600">My Skills</li>
						<li className="cursor-pointer hover:text-cyan-600">Projects</li>
						<li className="cursor-pointer hover:text-cyan-600">Contact</li>
					</ol>
				</div>
			</div>
		</>
	);
};

export default Navbar;
