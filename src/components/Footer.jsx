import React from "react";

const Footer = () => {
	return (
		<footer className="bg-gray-800 text-white p-6 sm:p-8 ">
			<div className="container mx-auto text-center">
				<p>
					&copy; {new Date().getFullYear()} SHLOKA Drone Aviation Service LLP.
					All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
