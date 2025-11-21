import React from 'react';
import { ExternalLink, Clock, Code } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Shopify Product Calculator",
      category: "Web Application",
      description: "Advanced calculator for custom window treatments with real-time pricing, fabric selection, and Shopify integration. Handles complex measurements and automated yardage calculations.",
      tech: ["JavaScript", "Shopify API", "GraphQL", "CSS"],
      deliveryTime: "7 days",
      image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&h=600&fit=crop",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "AI-Powered Business Dashboard",
      category: "Web Application",
      description: "Real-time analytics platform with AI-driven insights, automated reporting, and seamless third-party integrations for modern businesses.",
      tech: ["React", "Next.js", "AI APIs", "Tailwind"],
      deliveryTime: "5 days",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      title: "Professional Service Website",
      category: "Website",
      description: "Conversion-optimized website with modern design, fast loading, SEO best practices, and integrated booking system for service-based businesses.",
      tech: ["React", "Framer Motion", "Vercel"],
      deliveryTime: "3 days",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=600&fit=crop",
      gradient: "from-accent-500 to-accent-600"
    },
    {
      title: "Custom E-Commerce Solution",
      category: "Web Application",
      description: "Tailored online store with inventory management, automated fulfillment, payment processing, and customer portal for specialty retail.",
      tech: ["React", "Node.js", "Stripe", "PostgreSQL"],
      deliveryTime: "6 days",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      gradient: "from-emerald-500 to-emerald-600"
    }
  ];

  return (
    <section id="portfolio" className="section bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Recent Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Projects Delivered
            <span className="gradient-text"> This Month</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real projects built with AI-powered development. From concept to production in days.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card card-hover group overflow-hidden p-0">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>

                {/* Delivery Time Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                    <Clock className="w-4 h-4 text-accent-600" />
                    <span className="text-sm font-medium text-gray-900">{project.deliveryTime}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex items-center space-x-2 mb-6">
                  <Code className="w-5 h-5 text-gray-400" />
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button className="flex items-center space-x-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                  <span>View Case Study</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Want to see your project here?
          </p>
          <button className="btn-accent">
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
