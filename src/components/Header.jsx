import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
// import logo from "../assets/images/react.svg"; //
import logo from "../assets/images/logo.jpg";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className="fixed top-0 left-0 w-full bg-white text-gray-900 p-4 z-50 shadow-md border-b border-gray-200">
			<div className=" mx-auto flex justify-between items-center">
				<div className="flex items-center">
					<Link to="/Shloka-website">
						<img src={logo} alt="Logo" className="h-12 w-12 ml-4 mr-4" />
					</Link>
					<Link to="/Shloka-website">
						<div className="flex flex-col items-start">
							<div className="text-4xl font-bold text-blue-600 hover:text-blue-700">
								SHLOKA
							</div>
							<div className="text-sm font-normal text-gray-600 ">
								Drone Aviation Services
							</div>
						</div>
					</Link>
				</div>
				<div className="md:hidden">
					<button
						onClick={toggleMenu}
						className="text-gray-900 focus:outline-none bg-white"
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="#374151" /* Explicitly setting stroke color to prevent dark mode issues */
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16m-7 6h7"
							></path>
						</svg>
					</button>
				</div>
				{/* Navigation links - responsive */}
				<nav
					className={`md:flex absolute md:relative top-20 md:top-auto w-full md:w-auto bg-white md:bg-white p-4 md:p-0 z-10 
          ${isMenuOpen ? "block right-0" : "hidden left-0"}
        `}
				>
					<ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-end md:items-center">
						<li>
							<Link
								to="/Shloka-website"
								className="hover:text-gray-300 text-gray-900"
								onClick={toggleMenu}
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								to="/about"
								className="hover:text-gray-300 text-gray-900"
								onClick={toggleMenu}
							>
								About Us
							</Link>
						</li>
						<li>
							<Link
								to="/services"
								className="hover:text-gray-300 text-gray-900"
								onClick={toggleMenu}
							>
								Services
							</Link>
						</li>
						<li>
							<Link
								to="/portfolio"
								className="hover:text-gray-300 text-gray-900"
								onClick={toggleMenu}
							>
								Portfolio
							</Link>
						</li>
						<li>
							<Link
								to="/blog"
								className="hover:text-gray-300 text-gray-900"
								onClick={toggleMenu}
							>
								Blog
							</Link>
						</li>
						<li>
							<Link
								to="/contact"
								className="hover:text-gray-300 text-gray-900"
								onClick={toggleMenu}
							>
								Contact Us
							</Link>
						</li>
					</ul>
				</nav>

				{/* Action buttons (Contact, WhatsApp) - responsive */}
				<div className="hidden md:flex md:space-x-4">
					<Link
						to="/contact"
						className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
					>
						Contact
					</Link>
					<a
						href="https://wa.me/911234567890"
						target="_blank"
						rel="noopener noreferrer"
						className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
					>
						WhatsApp
					</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
