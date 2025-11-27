import React from "react";
// import Portfolio_image from "../assets/images/portfolio_image.jpg";
import Portfolio_image from "../assets/images/city_image.jpg";
const Portfolio = () => {
	const caseStudies = [
		{
			name: "Precision Agriculture for Wheat Fields",
			sector: "Agriculture",
			objective:
				"Optimize fertilizer application and monitor crop health over 500 acres.",
			process:
				"Drone flight for NDVI imaging, GIS analysis for variable rate application maps, photogrammetry for yield estimation.",
			output:
				"High-resolution NDVI maps, variable rate application prescriptions, detailed crop health reports.",
			result:
				"20% reduction in fertilizer usage, 15% increase in yield, early detection of disease outbreaks.",
		},
		{
			name: "Mining Volume Calculation & Stockpile Management",
			sector: "Mining",
			objective:
				"Accurate volumetric analysis of stockpiles and pit progression.",
			process:
				"Drone flights with RTK/PPK GPS for high-accuracy data, 3D model generation, volumetric analysis software.",
			output:
				"Accurate stockpile volumes, pit progression maps, change detection reports.",
			result:
				"Improved inventory management, enhanced operational efficiency, reduced surveying time by 70%.",
		},
		{
			name: "Construction Site Progress Monitoring",
			sector: "Construction",
			objective:
				"Monitor construction progress, track earthwork, and identify potential issues on a large commercial project.",
			process:
				"Regular drone flights, orthomosaic generation, 3D site modeling, progress comparison reports.",
			output:
				"Weekly orthomosaics, 3D progress models, cut/fill analysis, visual documentation.",
			result:
				"Enhanced project oversight, timely issue identification, improved stakeholder communication.",
		},
		{
			name: "GIS Data Acquisition for Urban Planning",
			sector: "GIS",
			objective:
				"Collect high-resolution aerial data for urban planning and infrastructure development in a metropolitan area.",
			process:
				"Drone-based aerial photography, photogrammetry for orthomosaic and DSM generation, GIS integration.",
			output:
				"Georeferenced orthomosaic maps, digital surface models, 3D building models.",
			result:
				"Provided accurate and up-to-date geospatial data for urban planning decisions, faster data acquisition compared to traditional methods.",
		},
		{
			name: "Industrial Asset Inspection for Power Lines",
			sector: "Industrial Monitoring",
			objective:
				"Inspect 100km of power lines for structural integrity, potential damage, and vegetation encroachment.",
			process:
				"Drone flights with high-resolution thermal and RGB cameras, AI-powered defect detection, detailed inspection reports.",
			output:
				"Thermal and visual inspection reports, geolocated defect identification, vegetation encroachment maps.",
			result:
				"Reduced inspection time by 80%, minimized human risk, proactive maintenance scheduling.",
		},
	];

	return (
		<div className=" mx-auto py-12 bg-gray-100">
			{/* Hero Section */}
			<section
				className="relative bg-gray-900 text-white h-52 flex items-center justify-center w-full"
				style={{
					backgroundImage: `url(${Portfolio_image})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className="absolute inset-0 bg-black opacity-50"></div>
				<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>
				<h1 className="relative  z-10 text-3xl sm:text-4xl md:text-5xl font-bold px-4 text-center">
					Portfolio & Case Studies
				</h1>
			</section>

			{/* Grid of Case Study Cards */}
			<section className="container mx-auto pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4">
				{caseStudies.map((study, index) => (
					<div
						key={index}
						className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
					>
						<h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800">
							{study.name}
						</h3>
						<p className="text-gray-600 mb-2 text-sm sm:text-base">
							<span className="font-semibold">Sector:</span> {study.sector}
						</p>
						<p className="text-gray-600 mb-2 text-sm sm:text-base">
							<span className="font-semibold">Objective:</span>{" "}
							{study.objective}
						</p>
						<p className="text-gray-600 mb-2 text-sm sm:text-base">
							<span className="font-semibold">Process Used:</span>{" "}
							{study.process}
						</p>
						<p className="text-gray-600 mb-2 text-sm sm:text-base">
							<span className="font-semibold">Output Delivered:</span>{" "}
							{study.output}
						</p>
						<p className="text-gray-600 mb-4 text-sm sm:text-base">
							<span className="font-semibold">Result:</span> {study.result}
						</p>
						<button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm sm:text-md">
							View Details
						</button>
					</div>
				))}
			</section>
		</div>
	);
};

export default Portfolio;
