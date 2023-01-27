import React, { useState } from "react";
import { TbLetterP } from "react-icons/tb";
import { RiMenuFill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
	const [navOpen, setNavOpen] = useState(false);
	const navList = (
		<>
			<ul className="flex flex-col  md:flex-row  md:items-center space-y-5 md:space-y-0 pt-8 md:pt-0 py-3 md:py-0 md:pb-0  w-full md:w-auto md:space-x-8 text-textColor">
				<li className="hover:bg-slate-700 md:hover:bg-inherit md:hover:scale-105 w-full md:w-auto text-center py-1 md:py-0 font-medium md:font-normal">
					About
				</li>
				<li className="hover:bg-slate-700 md:hover:bg-inherit md:hover:scale-105 w-full text-center py-1 font-medium md:font-normal">
					Skills
				</li>
				<li className="hover:bg-slate-700 md:hover:bg-inherit md:hover:scale-105 w-full text-center py-1 font-medium md:font-normal">
					Projects
				</li>
				<li className="hover:bg-slate-700 md:hover:bg-inherit md:hover:scale-105 w-full text-center py-1 font-medium md:font-normal">
					Contact
				</li>
				<li className="hover:bg-slate-700 md:hover:bg-inherit  w-full text-center py-1 font-medium md:font-normal">
					<button className="border-2  border-neon px-4 rounded-md text-textColor  hover:bg-slate-700 md:hover:bg-none md:hover:scale-105  md:w-auto text-center py-1 md:py-0 font-medium md:font-normal">
						Resume
					</button>
				</li>
			</ul>
		</>
	);
	return (
		<>
			<nav className="sticky backdrop-blur-2xl h-10 top-0 z-50  flex flex-col justify-center ">
				<div className="flex justify-between items-center w-full pr-5 ">
					<div>
						<TbLetterP className="text-3xl text-textColor " />
					</div>
					<div className="hidden md:flex items-center justify-center">{navList}</div>
					<div className="md:hidden flex justify-end z-40 ">
						<button
							className="text-white text-3xl focus:outline-none active:outline-none"
							onClick={() => setNavOpen(!navOpen)}
						>
							{navOpen ? <IoCloseSharp /> : <RiMenuFill />}
						</button>
					</div>
				</div>
				<div
					className={`absolute top-0  z-30  w-1/2  bg-slate-600 transition-all duration-300 ${
						navOpen ? "right-0 top-0" : "-right-full w-0"
					}  md:hidden `}
				>
					<div className={`${navOpen ? "right-0 top-0" : "-right-full w-0"} h-screen`}>
						{navOpen && navList}
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;

{
	/* <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed  w-full top-0 left-0 border-b border-gray-200 dark:border-gray-600">
				<div className="container flex flex-wrap items-center justify-between md:grid md:grid-cols-7  mx-auto">
					<TbLetterP className="text-6xl text-red-500 col-span-2" />
					<div className="flex md:order-2 ">
						<button
							data-collapse-toggle="navbar-sticky"
							type="button"
							className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
							aria-controls="navbar-sticky"
							aria-expanded="false"
							onClick={() => setNavOpen(!navOpen)}
						>
							{navOpen ? (
								<RiMenuFill className="text-3xl text-white" />
							) : (
								<IoCloseSharp className="text-3xl text-white" />
							)}
						</button>
					</div>
					<div
						className={`items-center justify-between ${
							navOpen ? "hidden" : ""
						} w-full md:flex md:w-auto md:order-1`}
						id="navbar-sticky"
					>
						<ul className="flex  text-white flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-10 md:ml-10 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
							<li className="block py-2 pl-3 pr-4 text-white hover:bg-slate-600 md:hover:bg-slate-900 md:hover:text-slate-300  rounded md:p-0 md:text-lg dark:text-white">
								About
							</li>{" "}
							<li className="block py-2 pl-3 pr-4 text-white hover:bg-slate-600 md:hover:bg-slate-900 md:hover:text-slate-300  rounded md:p-0 md:text-lg dark:text-white">
								Skills
							</li>{" "}
							<li className="block py-2 pl-3 pr-4 text-white hover:bg-slate-600 md:hover:bg-slate-900 md:hover:text-slate-300  rounded md:p-0 md:text-lg dark:text-white">
								Projects
							</li>{" "}
							<li className="block py-2 pl-3 pr-4 text-white hover:bg-slate-600 md:hover:bg-slate-900 md:hover:text-slate-300  rounded md:p-0 md:text-lg dark:text-white">
								Contact
							</li>
							<button className="text-white px-4 py-1 md:text-xl bg-blue-400 rounded-md">
								Resume
							</button>
						</ul>
					</div>
				</div>
			</nav> */
}
