import React from 'react';
import { Code, Globe, Server, Check } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Web Applications",
      description: "Full-stack applications built with modern frameworks. From SaaS dashboards to internal tools.",
      features: [
        "React, Next.js, or Vue.js",
        "Database integration",
        "API development",
        "User authentication",
        "Real-time features",
        "Mobile responsive"
      ],
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Globe,
      title: "Professional Websites",
      description: "Beautiful, fast websites that convert visitors into customers. Perfect for businesses of all sizes.",
      features: [
        "Custom design",
        "SEO optimized",
        "Content management",
        "E-commerce ready",
        "Analytics integration",
        "Lightning fast"
      ],
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Server,
      title: "Managed Hosting",
      description: "Worry-free hosting with automatic updates, backups, and 24/7 monitoring. One bill, zero hassle.",
      features: [
        "99.9% uptime SLA",
        "Auto SSL certificates",
        "Daily backups",
        "CDN included",
        "DDoS protection",
        "Priority support"
      ],
      gradient: "from-accent-500 to-accent-600"
    }
  ];

  return (
    <section id="services" className="section">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-accent-100 text-accent-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to
            <span className="gradient-text"> Build & Launch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From concept to live product, we handle every aspect of your digital presence
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card card-hover group">
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <Check className="w-5 h-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <button className={`text-transparent bg-clip-text bg-gradient-to-r ${service.gradient} font-semibold hover:opacity-80 transition-opacity`}>
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Why Choose AI-Powered Development?
          </h3>
          <div className="grid md:grid-cols-4 gap-8 mt-8">
            <div>
              <div className="text-4xl font-bold text-accent-400 mb-2">10x</div>
              <div className="text-white/80">Faster Development</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-400 mb-2">50%</div>
              <div className="text-white/80">Cost Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-400 mb-2">100%</div>
              <div className="text-white/80">Custom Solutions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-400 mb-2">24/7</div>
              <div className="text-white/80">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
