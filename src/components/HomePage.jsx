import React from "react";
import { Link } from "react-router-dom";
import home_image from "../assets/images/home_image.jpg";

const HomePage = () => {
	return (
		<div>
			{/* Hero Section */}
			<section
				className="relative bg-gray-900 text-white h-screen flex items-center justify-center"
				style={{
					backgroundImage: `url(${home_image})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className="absolute inset-0 bg-black opacity-50"></div>
				<div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-75"></div>
				<div className="relative z-10 text-center p-4">
					<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
						Revolutionizing Industries with Precision Drone & GIS Solutions
					</h1>
					<p className="text-md sm:text-lg md:text-xl mb-6">
						Delivering high-accuracy, fast, and efficient drone operations for
						every industry.
					</p>
					<p className="text-base sm:text-lg font-semibold mb-8">
						Precise • Proficient • Prompt
					</p>
					<div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
						<Link
							to="/services"
							className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg"
						>
							Explore Services
						</Link>
						<Link
							to="/contact"
							className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg text-lg"
						>
							Contact Us
						</Link>
						<a
							href="https://wa.me/911234567890"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg"
						>
							WhatsApp Chat
						</a>
					</div>
				</div>
			</section>

			{/* Why Choose Us Section */}
			<section className="py-16 bg-gray-100">
				<div className="container mx-auto text-center px-4 ">
					<h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-800">
						WHY CHOOSE US
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="bg-white p-8 rounded-lg shadow-lg">
							<h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">
								High-Accuracy Drone Data Outputs
							</h3>
							<p className="text-gray-700">
								Leverage our advanced drones for unparalleled data precision,
								crucial for detailed analysis and informed decision-making
								across all sectors.
							</p>
						</div>
						<div className="bg-white p-8 rounded-lg shadow-lg">
							<h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">
								Faster Turnaround Time
							</h3>
							<p className="text-gray-700">
								Experience swift project completion with our efficient drone
								operations, ensuring timely delivery without compromising on
								quality or accuracy.
							</p>
						</div>
						<div className="bg-white p-8 rounded-lg shadow-lg">
							<h3 className="text-2xl font-semibold mb-4 text-gray-800">
								Industry-Standard Safety Protocols
							</h3>
							<p className="text-gray-700">
								Our commitment to safety means every operation adheres to strict
								industry protocols, protecting personnel and assets while
								ensuring compliance.
							</p>
						</div>
						<div className="bg-white p-8 rounded-lg shadow-lg">
							<h3 className="text-2xl font-semibold mb-4 text-gray-800">
								GIS-Integrated Drone Intelligence
							</h3>
							<p className="text-gray-700">
								Transform raw drone data into actionable intelligence through
								seamless integration with advanced GIS platforms, enhancing
								spatial analysis capabilities.
							</p>
						</div>
						<div className="bg-white p-8 rounded-lg shadow-lg">
							<h3 className="text-2xl font-semibold mb-4 text-gray-800">
								Reliable, Scalable & Cost-Effective
							</h3>
							<p className="text-gray-700">
								Benefit from drone solutions that are not only robust and
								expandable to meet growing demands but also optimized for
								cost-efficiency without sacrificing performance.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Industries We Serve Section */}
			<section className="py-16 bg-gray-200">
				<div className="container mx-auto text-center px-4">
					<h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-800">
						INDUSTRIES WE SERVE
					</h2>
					<div className="flex flex-wrap justify-center gap-4 sm:gap-6">
						<span className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-lg">
							Agriculture
						</span>
						<span className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-lg">
							Mining
						</span>
						<span className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-lg">
							Construction
						</span>
						<span className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-lg">
							Government Projects
						</span>
						<span className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-lg">
							GIS Companies
						</span>
						<span className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-lg">
							Industrial Monitoring
						</span>
					</div>
				</div>
			</section>

			{/* CTA Block */}
			<section className="py-20 bg-gray-100 text-center px-4">
				<div className="container mx-auto">
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800">
						Ready to Transform Your Operations?
					</h2>
					<p className="text-md sm:text-lg md:text-xl mb-10">
						Contact us today to discuss your project requirements.
					</p>
					<Link
						to="/get-quote"
						className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-lg sm:text-xl font-semibold"
					>
						Get a Free Consultation
					</Link>
				</div>
			</section>
		</div>
	);
};

export default HomePage;
