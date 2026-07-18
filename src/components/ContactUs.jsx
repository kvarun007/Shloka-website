import React, { useState } from "react";
import ContactUs_image from "../assets/images/city_image.jpg";
import { getEmailConfigStatus, sendFormEmail } from "../utils/sendFormEmail";

const contactMethods = [
	{
		label: "Office",
		value: "80-16-25, Srinivas Nagar, AVA Road, Rajahmundry, Andhra Pradesh",
	},
	{
		label: "Phone",
		value: "+91 9281094964",
		href: "tel:+919281094964",
	},
	{
		label: "Email",
		value: "shlokadroneaviationservicesllp@gmail.com",
		href: "mailto:shlokadroneaviationservicesllp@gmail.com",
	},
	{
		label: "Instagram",
		value: "@shlokadroneaviationservices",
		href: "https://www.instagram.com/shlokadroneaviationservices/",
	},
];

const companyFacts = [
	{ label: "Company", value: "SHLOKA Drone Aviation Service LLP" },
	{ label: "Established", value: "August 01, 2025" },
	{ label: "Base", value: "Rajahmundry, Andhra Pradesh" },
	{ label: "Focus", value: "Drone operations, mapping, GIS support" },
];

const supportAreas = [
	"Drone surveying and mapping",
	"Agriculture spraying support",
	"Infrastructure inspection",
	"Security and surveillance",
	"Emergency response support",
	"GIS-ready data outputs",
];

const ContactUs = () => {
	const [status, setStatus] = useState({ type: "", message: "" });
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();
		const form = event.currentTarget;
		setIsSubmitting(true);
		setStatus({ type: "", message: "" });

		const formData = new FormData(form);
		const countryCodeValue = formData.get("phoneCountryCode");
		const countryCode = countryCodeValue.startsWith("+")
			? countryCodeValue
			: `+${countryCodeValue}`;
		const phoneNumber = formData.get("phoneNumber");

		try {
			await sendFormEmail("Contact Form", {
				name: formData.get("name"),
				email: formData.get("email"),
				phone: `${countryCode} ${phoneNumber}`,
				phone_country_code: countryCode,
				phone_number: phoneNumber,
				service: formData.get("service"),
				message: formData.get("message"),
			});

			form.reset();
			setStatus({
				type: "success",
				message: "Thank you! Your message has been sent successfully.",
			});
		} catch (error) {
			console.error("Contact form email failed:", error);
			const configStatus = getEmailConfigStatus();
			const missingConfig =
				!configStatus.hasServiceId ||
				!configStatus.hasTemplateId ||
				!configStatus.hasPublicKey;

			setStatus({
				type: "error",
				message: missingConfig
					? "Email service is not configured. Please add the EmailJS details and restart the website."
					: `Sorry, your message could not be sent right now. ${error?.text || error?.message || "Please check your EmailJS service and template settings."}`,
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="bg-gray-100">
			<section
				className="relative bg-gray-900 text-white min-h-[340px] flex items-end"
				style={{
					backgroundImage: `url(${ContactUs_image})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className="absolute inset-0 bg-black opacity-60"></div>
				<div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
				<div className="relative z-10 w-full px-4 py-12 sm:py-16">
					<div className="container mx-auto max-w-6xl">
						<p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-200">
							Shloka Drone Aviation Services LLP
						</p>
						<h1 className="max-w-3xl text-3xl sm:text-4xl md:text-5xl font-bold">
							Let us plan your next drone and GIS operation.
						</h1>
						<p className="mt-5 max-w-2xl text-base sm:text-lg text-gray-100">
							Reach our team for drone surveying, mapping, agriculture,
							inspection, surveillance, and project-specific aerial data support
							across Andhra Pradesh and nearby regions.
						</p>
					</div>
				</div>
			</section>

			<section className="bg-white px-4 py-10">
				<div className="container mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-4">
					{companyFacts.map((fact) => (
						<div
							key={fact.label}
							className="border-l-4 border-blue-600 bg-gray-50 p-5"
						>
							<p className="text-sm font-semibold uppercase text-gray-500">
								{fact.label}
							</p>
							<p className="mt-2 text-base font-semibold text-gray-900">
								{fact.value}
							</p>
						</div>
					))}
				</div>
			</section>

			<section className="px-4 py-12 sm:py-16">
				<div className="container mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr]">
					<div className="space-y-6">
						<div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
							<h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
								Company Contact Details
							</h2>
							<p className="mt-3 text-base leading-7 text-gray-700">
								SHLOKA Drone Aviation Service LLP helps teams capture precise
								aerial data, reduce site time, and convert field information
								into practical outputs for planning, monitoring, and
								decision-making.
							</p>

							<div className="mt-7 divide-y divide-gray-200">
								{contactMethods.map((method) => (
									<div
										key={method.label}
										className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[120px_1fr]"
									>
										<p className="font-semibold text-gray-900">
											{method.label}
										</p>
										{method.href ? (
											<a
												href={method.href}
												target={
													method.href.startsWith("http") ? "_blank" : undefined
												}
												rel={
													method.href.startsWith("http")
														? "noopener noreferrer"
														: undefined
												}
												className="break-words text-blue-700 hover:text-blue-900"
											>
												{method.value}
											</a>
										) : (
											<p className="text-gray-700">{method.value}</p>
										)}
									</div>
								))}
							</div>
						</div>

						<div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg text-white">
							<h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
								How We Can Help
							</h2>
							<p className="mt-3 text-gray-900">
								Share your site location, service requirement, timeline, and any
								special permissions or deliverables needed. Our team will review
								the details and respond with the right next step.
							</p>
							<div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
								{supportAreas.map((area) => (
									<p
										key={area}
										className="border border-gray-700 bg-white text-blue-600 px-4 py-3 text-sm font-medium"
									>
										{area}
									</p>
								))}
							</div>
						</div>
					</div>

					<div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
						<div className="mb-7">
							<p className="text-sm font-semibold uppercase text-blue-700">
								Start a Conversation
							</p>
							<h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900">
								Send Us a Message
							</h2>
							<p className="mt-3 text-gray-700">
								Fill in the details below and we will get back to you with a
								clear response.
							</p>
						</div>
						<form className="space-y-6" onSubmit={handleSubmit}>
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
									htmlFor="service"
									className="block text-base sm:text-lg font-medium text-gray-700"
								>
									Service Needed
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
									htmlFor="message"
									className="block text-base sm:text-lg font-medium text-gray-700"
								>
									Message
								</label>
								<textarea
									id="message"
									name="message"
									rows="5"
									required
									minLength="10"
									maxLength="1000"
									className="mt-1 block w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base sm:text-lg"
									placeholder="Tell us about your project or query..."
								></textarea>
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
								className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white px-6 py-3 rounded-md text-base sm:text-lg font-semibold transition-colors duration-300"
							>
								{isSubmitting ? "Sending..." : "Submit"}
							</button>
						</form>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ContactUs;
