import React from 'react';
import { X, Bot, ArrowRight } from 'lucide-react';

const AIModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slide-up">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-primary-600 to-accent-500 p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">AI Project Assistant</h3>
                <p className="text-white/80">Tell us about your project</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="space-y-6">
            {/* Placeholder Message */}
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 border border-primary-200 rounded-xl p-6">
              <h4 className="font-semibold text-primary-900 mb-2">🚀 Coming Soon!</h4>
              <p className="text-gray-700 mb-4">
                Our AI-powered project intake system is currently in development. Soon, you'll be able to describe your project in natural language, and our AI will generate a custom prototype within 24 hours.
              </p>
              <p className="text-gray-700 font-medium">
                For now, let's connect directly:
              </p>
            </div>

            {/* Contact Form */}
            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you! We\'ll be in touch soon. For now, this is a demo - integrate with your real form handler.');
            }}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Type
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                >
                  <option value="">Select a project type...</option>
                  <option value="web-app">Web Application</option>
                  <option value="website">Website</option>
                  <option value="mobile-app">Mobile App</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us about your project
                </label>
                <textarea
                  required
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="What problem are you solving? Who's your target audience? Any specific features you need?"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget Range
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                >
                  <option value="">Select budget range...</option>
                  <option value="under-3k">Under $3,000</option>
                  <option value="3k-8k">$3,000 - $8,000</option>
                  <option value="8k-15k">$8,000 - $15,000</option>
                  <option value="15k-plus">$15,000+</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full btn-accent flex items-center justify-center space-x-2"
              >
                <span>Submit Project Request</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            {/* Features List */}
            <div className="border-t pt-6 mt-6">
              <h4 className="font-semibold text-gray-900 mb-3">What Happens Next?</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-accent-500 mr-2">✓</span>
                  <span>We'll review your project within 4 business hours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-2">✓</span>
                  <span>Get a detailed proposal with timeline and pricing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-2">✓</span>
                  <span>See an AI-generated prototype within 24-48 hours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-2">✓</span>
                  <span>Launch your app in days, not months</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIModal;
