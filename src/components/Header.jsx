import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center transition-all duration-300 ${
              isScrolled ? 'shadow-md' : ''
            }`}>
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <div>
              <h1 className={`font-bold text-xl transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Mancini Tech Solutions
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className={`font-medium transition-colors duration-300 hover:text-primary-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className={`font-medium transition-colors duration-300 hover:text-primary-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className={`font-medium transition-colors duration-300 hover:text-primary-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className={`font-medium transition-colors duration-300 hover:text-primary-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`font-medium transition-colors duration-300 hover:text-primary-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-accent text-sm px-6 py-3"
            >
              Start Your Project
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-6 pb-6 space-y-4 animate-fade-in">
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left py-2 text-gray-900 hover:text-primary-600 font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="block w-full text-left py-2 text-gray-900 hover:text-primary-600 font-medium"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="block w-full text-left py-2 text-gray-900 hover:text-primary-600 font-medium"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left py-2 text-gray-900 hover:text-primary-600 font-medium"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 text-gray-900 hover:text-primary-600 font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-accent w-full text-center mt-4"
            >
              Start Your Project
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
