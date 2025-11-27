import React from "react";
import home_image from "../assets/images/home_image.jpg";
import Aboutus_image from "../assets/images/Aboutus_image.jpg";

const AboutUs = () => {
	return (
		<div className="pt-16 ">
			{/* About Us & Our Mission Combined Section */}
			<section
				className="relative py-16 px-4 text-white h-1/4"
				style={{
					backgroundImage: `url(${Aboutus_image})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className="absolute inset-0 bg-black opacity-60"></div>
				<div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center gap-12 py-8">
					<div className="md:w-1/3">
						{/* <img
							src={Aboutus_image}
							alt="Drone in action for Shloka Drone Aviation Service LLP"
							className="rounded-lg shadow-md w-full"
						/> */}
					</div>
					<div className="md:w-2/3">
						<h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
							About Us
						</h2>
						<p className="text-white leading-relaxed mb-6">
							SHLOKA Drone Aviation Service LLP is a technology-driven company
							delivering end-to-end drone solutions and GIS support across
							multiple industries. Established on August 01, 2025, SHLOKA
							focuses on providing precise, efficient, and time-saving UAV
							operations rooted in innovation and reliability.
						</p>
						<h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
							Our Mission
						</h3>
						<p className="text-white leading-relaxed">
							To improve precision and complete work in significantly lesser
							time using cutting-edge drone technology.
						</p>
					</div>
				</div>
			</section>

			{/* Values Grid */}
			<section className="py-16 bg-gray-100 px-4">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-800">
						Our Values
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
							<h3 className="text-2xl sm:text-2xl font-semibold mb-4 text-gray-800">
								Precision at Scale
							</h3>
							<p className="text-gray-700">
								Delivering accurate results consistently, even for large-scale
								projects.
							</p>
						</div>
						<div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
							<h3 className="text-2xl sm:text-2xl font-semibold mb-4 text-gray-800">
								Timely Execution
							</h3>
							<p className="text-gray-700">
								Ensuring prompt project delivery without compromising quality.
							</p>
						</div>
						<div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
							<h3 className="text-2xl sm:text-2xl font-semibold mb-4 text-gray-800">
								Safe & Compliant Operations
							</h3>
							<p className="text-gray-700">
								Adhering to the highest safety standards and regulatory
								compliance.
							</p>
						</div>
						<div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
							<h3 className="text-2xl sm:text-2xl font-semibold mb-4 text-gray-800">
								Innovation-First Thinking
							</h3>
							<p className="text-gray-700">
								Continuously exploring and adopting cutting-edge drone
								technology.
							</p>
						</div>
						<div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
							<h3 className="text-2xl sm:text-2xl font-semibold mb-4 text-gray-800">
								Client-Centric Delivery
							</h3>
							<p className="text-gray-700">
								Focusing on client needs to provide tailored and effective
								solutions.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Timeline/Facts - Placeholder */}
			<section className=" w-full py-16  bg-white rounded-lg shadow-lg text-center">
				<h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-800">
					Our Journey & Milestones
				</h2>
				<p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
					We are continuously growing and evolving. This section will feature
					key milestones, achievements, and a visual timeline of SHLOKA Drone
					Aviation Service LLP's journey, showcasing our progress and dedication
					to innovation.
				</p>
				<div className="mt-8 text-gray-500 italic">
					[Detailed timeline and key facts coming soon!]
				</div>
			</section>
		</div>
	);
};

export default AboutUs;
