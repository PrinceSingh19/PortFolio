import React, { useState } from "react";
import { TbLetterP } from "react-icons/tb";
import { RiMenuFill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
	const [navOpen, setNavOpen] = useState(false);
	return (
		<>
			<div className="px-2 sticky grid grid-cols-2 items-center bg-slate-900  ">
				<div>
					<TbLetterP className="stroke-red-500 stroke-2 text-6xl" />
				</div>
				<div className="md:hidden flex justify-end  z-50">
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
				<div
					className={`md:hidden  bg-slate-900 float-right w-1/2 h-60 z-40 transition-all ease-in-out duration-500 ${
						navOpen ? "-translate-y-[1000px]" : "translate-y-0"
					}`}
				>
					<ol
						className={`flex flex-col justify-center bg-slate-900 gap-y-5 items-end text-cyan-400 h-full text-lg mr-3`}
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
