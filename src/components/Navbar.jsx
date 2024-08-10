import React, { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { NavHashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
import { inPageNav } from "./Data";
const Navbar = () => {
	const [navOpen, setNavOpen] = useState(false);
	const scrollWithOffset = (el) => {
		const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
		const yOffset = -60;
		window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
	};

	const navList = inPageNav.map((el, i) => {
		return (
			<motion.ul
				className="flex flex-col  md:flex-row  md:items-center space-y-5 md:space-y-0 pt-8 md:pt-0 py-3 md:py-0 md:pb-0  w-full md:w-auto md:space-x-8 text-textColor"
				key={i}
				initial={{ opacity: 0, y: -10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.3, delay: 0.2 * i }}
			>
				<NavHashLink
					to={el.link}
					smooth
					scroll={scrollWithOffset}
					className="hover:bg-slate-700 md:hover:bg-inherit md:hover:scale-105 w-full text-center py-1  font-medium md:font-normal"
				>
					{el.title}
				</NavHashLink>
			</motion.ul>
		);
	});

	return (
		<>
			<nav className="sticky backdrop-blur-2xl h-10 top-0 z-50  flex flex-col justify-center py-4 ">
				<div className="flex justify-between items-center w-full pr-5 ">
					<div className="mt-1">
						<img src="/images/Logo.png" alt="logo" className="w-14 md:w-20" />
					</div>
					<div className="hidden md:flex items-center justify-center space-y-5 md:space-y-0 md:space-x-8">
						{navList}
						<motion.div
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, delay: 0.2 * 4 }}
						>
							<a
								href="https://drive.google.com/file/d/1QFoYNy-Pe1UiZRxjDcMKmcP81GsFbsRS/view?usp=sharing"
								target="_blank"
								className="hover:bg-slate-700 md:hover:bg-inherit  w-full text-center py-1 font-medium md:font-normal"
							>
								<button className="border-2  border-neon px-4 rounded-md text-textColor  hover:bg-slate-700 md:hover:bg-none md:hover:scale-105  md:w-auto text-center py-1 md:py-0 font-medium md:font-normal">
									Resume
								</button>
							</a>
						</motion.div>
					</div>
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
						{navOpen && (
							<div className="flex flex-col items-center ">
								{navList}
								<motion.div
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3, delay: 0.2 * 4 }}
									className="pt-9"
								>
									<a
										href="https://drive.google.com/file/d/1QFoYNy-Pe1UiZRxjDcMKmcP81GsFbsRS/view?usp=sharing"
										target="_blank"
										className="hover:bg-slate-700 md:hover:bg-inherit  w-full text-center py-1 font-medium md:font-normal"
									>
										<button className="border-2  border-neon px-4 rounded-md text-textColor  hover:bg-slate-700 md:hover:bg-none md:hover:scale-105  md:w-auto text-center py-1 md:py-0 font-medium md:font-normal">
											Resume
										</button>
									</a>
								</motion.div>
							</div>
						)}
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
