import React from "react";
import getQuote_image from "../assets/images/city_image.jpg";

const GetQuote = () => {
	return (
		<div className=" mx-auto py-12 bg-gray-100">
			{/* Hero Section */}

			<section
				className="relative bg-gray-900 text-white h-52 flex items-center justify-center w-full mb-6"
				style={{
					backgroundImage: `url(${getQuote_image})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className="absolute inset-0 bg-black opacity-50"></div>
				<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>
				<h1 className="relative  z-10 text-3xl sm:text-4xl md:text-5xl font-bold px-4 text-center">
					Request a Custom Quote
				</h1>
			</section>

			{/* Quote Form */}
			<section className="bg-white p-6 sm:p-8 rounded-lg shadow-lg max-w-2xl mx-auto px-4">
				<h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 text-center">
					Tell Us About Your Project
				</h2>
				<form className="space-y-6">
					<div>
						<label
							htmlFor="name"
							className="block text-base sm:text-lg font-medium text-gray-700"
						>
							Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							className="mt-1 block w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base sm:text-lg"
							placeholder="Your Name"
						/>
					</div>
					<div>
						<label
							htmlFor="company"
							className="block text-base sm:text-lg font-medium text-gray-700"
						>
							Company
						</label>
						<input
							type="text"
							id="company"
							name="company"
							className="mt-1 block w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base sm:text-lg"
							placeholder="Your Company Name (Optional)"
						/>
					</div>
					<div>
						<label
							htmlFor="email"
							className="block text-base sm:text-lg font-medium text-gray-700"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							className="mt-1 block w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base sm:text-lg"
							placeholder="you@example.com"
						/>
					</div>
					<div>
						<label
							htmlFor="phone"
							className="block text-base sm:text-lg font-medium text-gray-700"
						>
							Phone
						</label>
						<input
							type="tel"
							id="phone"
							name="phone"
							className="mt-1 block w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base sm:text-lg"
							placeholder="+91 XXXXXXXXXX"
						/>
					</div>
					<div>
						<label
							htmlFor="location"
							className="block text-base sm:text-lg font-medium text-gray-700"
						>
							Location
						</label>
						<input
							type="text"
							id="location"
							name="location"
							className="mt-1 block w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base sm:text-lg"
							placeholder="Project Location (City, State)"
						/>
					</div>
					<div>
						<label
							htmlFor="service"
							className="block text-base sm:text-lg font-medium text-gray-700"
						>
							Service
						</label>
						<select
							id="service"
							name="service"
							className="mt-1 block w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base sm:text-lg"
						>
							<option value="">Select a Service</option>
							<option value="surveying">Surveying & Mapping</option>
							<option value="agriculture">Agriculture Spraying</option>
							<option value="inspection">Infrastructure Inspection</option>
							<option value="surveillance">Security Surveillance</option>
							<option value="emergency">Emergency Response</option>
							<option value="other">Other</option>
						</select>
					</div>
					<div>
						<label
							htmlFor="requirements"
							className="block text-base sm:text-lg font-medium text-gray-700"
						>
							Requirements
						</label>
						<textarea
							id="requirements"
							name="requirements"
							rows="5"
							className="mt-1 block w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base sm:text-lg"
							placeholder="Describe your project requirements in detail..."
						></textarea>
					</div>
					<div>
						<label
							htmlFor="fileUpload"
							className="block text-base sm:text-lg font-medium text-gray-700"
						>
							File Upload (Optional)
						</label>
						<input
							type="file"
							id="fileUpload"
							name="fileUpload"
							className="mt-1 block w-full text-base sm:text-lg text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
						/>
					</div>
					<button
						type="submit"
						className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-base sm:text-lg font-semibold transition-colors duration-300"
					>
						Request Quote
					</button>
				</form>
			</section>
		</div>
	);
};

export default GetQuote;
