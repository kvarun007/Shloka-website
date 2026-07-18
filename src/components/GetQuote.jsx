import React, { useState } from "react";
import getQuote_image from "../assets/images/city_image.jpg";
import { sendFormEmailWithAttachment } from "../utils/sendFormEmail";

const GetQuote = () => {
	const [status, setStatus] = useState({ type: "", message: "" });
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();
		const form = event.currentTarget;
		setIsSubmitting(true);
		setStatus({ type: "", message: "" });

		const formData = new FormData(form);
		const file = formData.get("fileUpload");
		const countryCodeValue = formData.get("phoneCountryCode");
		const countryCode = countryCodeValue.startsWith("+")
			? countryCodeValue
			: `+${countryCodeValue}`;
		const phoneNumber = formData.get("phoneNumber");

		try {
			form.elements.form_type.value = "Quote Form";
			form.elements.to_email.value = "shlokadroneaviationservicesllp@gmail.com";
			form.elements.phone.value = `${countryCode} ${phoneNumber}`;
			form.elements.phone_country_code.value = countryCode;
			form.elements.phone_number.value = phoneNumber;
			form.elements.file_name.value = file?.name || "No file uploaded";

			await sendFormEmailWithAttachment(form);

			form.reset();
			setStatus({
				type: "success",
				message: "Thank you! Your quote request has been sent successfully.",
			});
		} catch {
			setStatus({
				type: "error",
				message:
					"Sorry, your quote request could not be sent right now. Please try again later.",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

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
				<form className="space-y-6" onSubmit={handleSubmit}>
					<input type="hidden" name="form_type" />
					<input type="hidden" name="to_email" />
					<input type="hidden" name="phone" />
					<input type="hidden" name="phone_country_code" />
					<input type="hidden" name="phone_number" />
					<input type="hidden" name="file_name" />
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
							required
							minLength="2"
							maxLength="60"
							pattern="[A-Za-z\s.]+"
							title="Please enter a valid name using letters, spaces, and dots only."
							autoComplete="name"
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
							maxLength="100"
							pattern="[A-Za-z0-9\s.,&()'-]+"
							title="Please enter a valid company name."
							autoComplete="organization"
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
							required
							maxLength="100"
							autoComplete="email"
							className="mt-1 block w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base sm:text-lg"
							placeholder="you@example.com"
						/>
					</div>
					<div>
						<label
							htmlFor="phoneCountryCode"
							className="block text-base sm:text-lg font-medium text-gray-700"
						>
							Phone
						</label>
						<div className="mt-1 grid grid-cols-[110px_1fr] gap-3">
							<input
								type="tel"
								id="phoneCountryCode"
								name="phoneCountryCode"
								required
								minLength="1"
								maxLength="4"
								pattern="\+?[0-9]{1,3}"
								title="Please enter a country code, for example 91 or +91."
								autoComplete="tel-country-code"
								inputMode="tel"
								className="block w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base sm:text-lg"
								placeholder="+91"
							/>
							<input
								type="tel"
								id="phoneNumber"
								name="phoneNumber"
								required
								minLength="10"
								maxLength="10"
								pattern="[0-9]{10}"
								title="Please enter a 10 digit phone number."
								autoComplete="tel-national"
								inputMode="numeric"
								className="block w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base sm:text-lg"
								placeholder="9876543210"
							/>
						</div>
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
							required
							minLength="2"
							maxLength="100"
							pattern="[A-Za-z0-9\s.,'-]+"
							title="Please enter a valid project location."
							autoComplete="address-level2"
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
							required
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
							required
							minLength="10"
							maxLength="1200"
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
					{status.message && (
						<p
							className={`rounded-md px-4 py-3 text-sm sm:text-base ${
								status.type === "success"
									? "bg-green-50 text-green-700"
									: "bg-red-50 text-red-700"
							}`}
						>
							{status.message}
						</p>
					)}
					<button
						type="submit"
						disabled={isSubmitting}
						className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-base sm:text-lg font-semibold transition-colors duration-300"
					>
						{isSubmitting ? "Sending..." : "Request Quote"}
					</button>
				</form>
			</section>
		</div>
	);
};

export default GetQuote;
