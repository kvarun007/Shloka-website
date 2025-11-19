import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto py-12">
      {/* Hero Image */}
      <section className="relative bg-gray-900 text-white h-64 flex items-center justify-center mb-12" style={{ backgroundImage: 'url(https://via.placeholder.com/1500x400)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-bold px-4 text-center">About SHLOKA Drone Aviation Service LLP</h1>
      </section>

      {/* Company Intro + Mission */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 px-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700 leading-relaxed">
            SHLOKA Drone Aviation Service LLP is a technology-driven company delivering end-to-end drone solutions and GIS support across multiple industries. Established on August 01, 2025, SHLOKA focuses on providing precise, efficient, and time-saving UAV operations rooted in innovation and reliability.
          </p>
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            To improve precision and complete work in significantly lesser time using cutting-edge drone technology.
          </p>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-12 bg-gray-100 rounded-lg shadow-lg px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Precision at Scale</h3>
              <p className="text-gray-700">Delivering accurate results consistently, even for large-scale projects.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Timely Execution</h3>
              <p className="text-gray-700">Ensuring prompt project delivery without compromising quality.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Safe & Compliant Operations</h3>
              <p className="text-gray-700">Adhering to the highest safety standards and regulatory compliance.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Innovation-First Thinking</h3>
              <p className="text-gray-700">Continuously exploring and adopting cutting-edge drone technology.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Client-Centric Delivery</h3>
              <p className="text-gray-700">Focusing on client needs to provide tailored and effective solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline/Facts - Placeholder */}
      {/* This section is mentioned in the wireframe but no specific content is provided. 
          I'll leave a placeholder for now, and it can be populated later if details emerge. */}
      <section className="py-16 text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">Our Journey & Milestones</h2>
        <p className="text-gray-600">[Timeline / Key Facts about SHLOKA will go here]</p>
      </section>

    </div>
  );
};

export default AboutUs;
