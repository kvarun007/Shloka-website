import React from "react";
import ContactUs_image from "../assets/images/city_image.jpg";
const ContactUs = () => {
	return (
		<div className=" mx-auto py-12">
			{/* Hero Section */}
			<section
				className="relative bg-gray-900 text-white h-52 flex items-center justify-center w-full mb-6"
				style={{
					backgroundImage: `url(${ContactUs_image})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className="absolute inset-0 bg-black opacity-50"></div>
				<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>
				<h1 className="relative  z-10 text-3xl sm:text-4xl md:text-5xl font-bold px-4 text-center">
					Contact Us
				</h1>
			</section>
			{/* Contact Details and Form */}
			<section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-4">
				{/* Left: Contact details */}
				<div className="bg-white p-8 rounded-lg shadow-lg">
					<h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">
						Get in Touch
					</h2>
					<div className="space-y-4 text-gray-700 text-base sm:text-lg">
						<p>
							<span className="font-semibold">Address:</span> 123, Sample
							Industrial Area, Hyderabad, Telangana
						</p>
						<p>
							<span className="font-semibold">Phone:</span> +91 1234567890
						</p>
						<p>
							<span className="font-semibold">Email:</span> info@shlokadrone.com
						</p>
						<p>
							<span className="font-semibold">LinkedIn / Instagram:</span>{" "}
							Placeholder
						</p>
					</div>
				</div>

				{/* Right: Contact form */}
				<div className="bg-white p-8 rounded-lg shadow-lg">
					<h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">
						Send us a Message
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
								htmlFor="service"
								className="block text-base sm:text-lg font-medium text-gray-700"
							>
								Service Needed
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
								htmlFor="message"
								className="block text-base sm:text-lg font-medium text-gray-700"
							>
								Message
							</label>
							<textarea
								id="message"
								name="message"
								rows="5"
								className="mt-1 block w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base sm:text-lg"
								placeholder="Tell us about your project or query..."
							></textarea>
						</div>
						<button
							type="submit"
							className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-base sm:text-lg font-semibold transition-colors duration-300"
						>
							Submit
						</button>
					</form>
				</div>
			</section>
		</div>
	);
};

export default ContactUs;
