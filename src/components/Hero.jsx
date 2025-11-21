import React, { useState } from 'react';
import { Sparkles, ArrowRight, MessageSquare } from 'lucide-react';
import AIModal from './AIModal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 animate-gradient-x"></div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent-400 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Content */}
        <div className="relative container-custom px-6 text-center z-10 pt-20">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8 animate-fade-in">
              <Sparkles className="w-5 h-5 text-accent-400" />
              <span className="text-white font-medium">AI-Powered Development</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up leading-tight">
              Transform Ideas Into
              <span className="block bg-gradient-to-r from-accent-400 to-accent-300 bg-clip-text text-transparent">
                Live Apps in Days
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Stop waiting months for custom software. We leverage cutting-edge AI tools to deliver 
              professional apps, websites, and hosting solutions at breakthrough speed and affordability.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="btn-accent flex items-center space-x-2 group"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Start in 60 Seconds</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="btn-secondary"
              >
                See How It Works
              </button>
            </div>

            {/* Social Proof */}
            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-12 text-white animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div>
                <div className="text-4xl font-bold text-accent-400">50+</div>
                <div className="text-gray-300">Apps Delivered</div>
              </div>
              <div className="hidden sm:block h-12 w-px bg-white/20"></div>
              <div>
                <div className="text-4xl font-bold text-accent-400">10+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="hidden sm:block h-12 w-px bg-white/20"></div>
              <div>
                <div className="text-4xl font-bold text-accent-400">72hrs</div>
                <div className="text-gray-300">Average Delivery</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/60 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* AI Modal */}
      <AIModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Hero;
