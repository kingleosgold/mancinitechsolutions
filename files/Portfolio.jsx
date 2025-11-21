const Portfolio = () => {
  const projects = [
    {
      title: "Biotech Startup Website",
      category: "Website Development",
      description: "Built professional website with AI assistant integration for biotech company. Modern design with Claude-powered chat for visitor engagement.",
      tech: ["React", "Lovable", "Claude AI", "Responsive Design"],
      results: "Modern web presence in 2 weeks with AI-powered visitor support",
      image: "🧬",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Route Tracking System",
      category: "Business Automation",
      description: "Custom delivery route tracker for J&B Group. Automated driver assignment, payment calculation, and real-time route visualization.",
      tech: ["React", "Custom API", "Google Maps", "Payment Integration"],
      results: "Saved 15+ hours/week on route planning and driver payments",
      image: "🚚",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Drapery Product Calculator",
      category: "E-commerce Integration",
      description: "Complex Shopify calculator for custom drapery ordering. Handles fabric selection, pleat calculations, pricing, and multiple room configurations.",
      tech: ["JavaScript", "Shopify API", "Custom UI", "Complex Logic"],
      results: "Increased conversions 40% with accurate instant quotes",
      image: "🪟",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Dog Training Website",
      category: "Website Development",
      description: "Professional website for Companion K9 dog training business. Fast, modern design with service showcase and contact integration.",
      tech: ["React", "Lovable", "Responsive Design", "SEO Optimized"],
      results: "Online presence established in 1 week",
      image: "🐕",
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Recent Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real projects for real businesses. From quick websites to complex automation systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
            >
              {/* Project Image/Icon Area */}
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="text-8xl opacity-80 group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-900 text-sm font-semibold rounded-lg shadow-lg">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span 
                        key={idx}
                        className={`px-3 py-1 bg-gradient-to-r ${project.color} text-white text-sm rounded-full`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="pt-6 border-t border-gray-200">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-1">Result:</p>
                      <p className="text-gray-600">{project.results}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-600 mb-6">
            Ready to see what we can build for you?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
