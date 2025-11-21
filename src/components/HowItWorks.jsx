import React from 'react';
import { MessageSquare, Sparkles, Rocket } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageSquare,
      step: "01",
      title: "Chat with AI",
      description: "Describe your project in plain English. Our AI assistant asks smart questions to understand your vision, budget, and timeline.",
      time: "3 minutes",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Sparkles,
      step: "02",
      title: "AI Builds Prototype",
      description: "Our AI analyzes your requirements and generates a fully functional prototype using cutting-edge tools like Lovable and GPT-4.",
      time: "24-48 hours",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Rocket,
      step: "03",
      title: "Launch & Iterate",
      description: "Review your prototype, request changes, and go live. We handle hosting, support, and future updates—all in one place.",
      time: "2-5 days",
      color: "from-accent-500 to-accent-600"
    }
  ];

  return (
    <section id="how-it-works" className="section bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Simple Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            From Idea to Live App in
            <span className="gradient-text"> Three Simple Steps</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We've streamlined development to be as simple as having a conversation. 
            No technical knowledge required.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Lines (Desktop) */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-accent-200 z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10">
              <div className="card card-hover text-center">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold shadow-lg`}>
                    {step.step}
                  </div>
                </div>

                {/* Icon */}
                <div className={`w-20 h-20 mx-auto mt-8 mb-6 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center transform hover:rotate-6 transition-transform duration-300`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {step.description}
                </p>

                {/* Time Badge */}
                <div className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                  ⏱ {step.time}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Ready to see it in action?
            </h3>
            <p className="text-gray-600 mb-6">
              Start your project today and get a working prototype within 48 hours
            </p>
            <button className="btn-accent">
              Start Your Project Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
