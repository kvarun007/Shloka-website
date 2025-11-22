import React from "react";
import services_image from "../assets/images/city_image.jpg";

const Services = () => {
	const services = [
		{
			title: "Surveying & Mapping",
			copy: "High-accuracy drone surveying for land development, mining, construction planning, and GIS mapping. We deliver contour maps, orthomosaics, DEM/DSM, volumetric analysis, and georeferenced data outputs.",
		},
		{
			title: "Agriculture Spraying",
			copy: "Automated drone spraying improves coverage, saves time, and reduces chemical exposure. Ideal for pesticides, fertilizers, and crop-spraying operations.",
		},
		{
			title: "Infrastructure Inspection",
			copy: "Drone inspections for bridges, towers, solar plants, power lines, and industrial assets. Reduce manual risk and get real-time high-resolution inspection reports.",
		},
		{
			title: "Security Surveillance",
			copy: "Real-time aerial surveillance for events, border areas, restricted zones, and public gatherings. Supports monitoring, patrolling, and threat assessment.",
		},
		{
			title: "Emergency Response",
			copy: "Rapid drone deployment for disaster response, search & rescue, flood monitoring, and emergency assessment.",
		},
	];

	return (
		<div className=" mx-auto py-12">
			{/* Hero Image */}
			<section
				className="relative bg-gray-900 text-white h-52 flex items-center justify-center w-full mb-6"
				style={{
					backgroundImage: `url(${services_image})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className="absolute inset-0 bg-black opacity-50"></div>
				<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>
				<h1 className="relative  z-10 text-3xl sm:text-4xl md:text-5xl font-bold px-4 text-center">
					Our Drone Services
				</h1>
			</section>

			{/* Service Cards */}
			<section className=" container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-12 px-4">
				{services.map((service, index) => (
					<div
						key={index}
						className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
					>
						<h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
							{service.title}
						</h3>
						<p className="text-gray-600 leading-relaxed">{service.copy}</p>
					</div>
				))}
			</section>

			{/* CTA to Contact */}
			<section className="py-16 bg-blue-700 text-white text-center rounded-lg shadow-xl px-4">
				<h2 className="text-3xl sm:text-4xl font-bold mb-6">
					Ready to Elevate Your Operations?
				</h2>
				<p className="text-md sm:text-xl mb-8">
					Discover how SHLOKA's drone services can benefit your project.
				</p>
				<button className="bg-white text-blue-700 font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-lg hover:bg-gray-100 transition-colors duration-300">
					Contact Us for Services
				</button>
			</section>
		</div>
	);
};

export default Services;
