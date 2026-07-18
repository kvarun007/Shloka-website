import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import ContactUs from "./components/ContactUs";
import GetQuote from "./components/GetQuote";

function App() {
	return (
		<Router basename="/">
			<div className="flex flex-col min-h-screen">
				<Header />
				<main className="grow">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/about" element={<AboutUs />} />
						<Route path="/services" element={<Services />} />
						<Route path="/portfolio" element={<Portfolio />} />
						<Route path="/blog" element={<Blog />} />
						<Route path="/contact" element={<ContactUs />} />
						<Route path="/get-quote" element={<GetQuote />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
