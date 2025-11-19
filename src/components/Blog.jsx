import React from 'react';

const Blog = () => {
  const articles = [
    {
      title: "How Drone Mapping is Transforming Land Surveying in India",
      summary: "Explore the revolutionary impact of drone mapping on land surveying practices, enhancing accuracy and efficiency across India.",
      link: "#"
    },
    {
      title: "Top 5 Benefits of Agricultural Drone Spraying",
      summary: "Discover the significant advantages of using drones for agricultural spraying, from improved coverage to reduced chemical exposure.",
      link: "#"
    },
    {
      title: "Why Industrial Inspections Should Shift to Drone-Based Monitoring",
      summary: "Understand the critical reasons for transitioning industrial inspections to drone-based monitoring, emphasizing safety and data quality.",
      link: "#"
    },
    {
      title: "GIS + Drones: The Future of Smart Infrastructure Planning",
      summary: "Learn how the integration of GIS and drone technology is paving the way for more intelligent and efficient infrastructure planning.",
      link: "#"
    },
  ];

  return (
    <div className="container mx-auto py-12">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white h-64 flex items-center justify-center mb-12" style={{ backgroundImage: 'url(https://via.placeholder.com/1500x400)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-bold px-4 text-center">Drone Insights & Technology Blog</h1>
      </section>

      {/* Articles Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4">
        {articles.map((article, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800">{article.title}</h3>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">{article.summary}</p>
            <a href={article.link} className="text-blue-600 hover:underline font-semibold text-sm sm:text-base">Read More &rarr;</a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Blog;
