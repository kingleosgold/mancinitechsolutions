import React from 'react';
import { Mail, Phone, Linkedin, Twitter, Github, Facebook } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">Mancini Tech Solutions</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              AI-powered development for modern businesses. Transform your ideas into live applications 
              in days, not months.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:jon@mancinitechsolutions.com" className="flex items-center space-x-3 text-gray-300 hover:text-accent-400 transition-colors">
                <Mail className="w-5 h-5" />
                <span>jon@mancinitechsolutions.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center space-x-3 text-gray-300 hover:text-accent-400 transition-colors">
                <Phone className="w-5 h-5" />
                <span>(555) 123-4567</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-accent-500 rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-accent-500 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-accent-500 rounded-full flex items-center justify-center transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-accent-500 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-accent-400 transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('how-it-works')} className="text-gray-300 hover:text-accent-400 transition-colors">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('portfolio')} className="text-gray-300 hover:text-accent-400 transition-colors">
                  Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('pricing')} className="text-gray-300 hover:text-accent-400 transition-colors">
                  Pricing
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-accent-400 transition-colors">
                  About
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Web Applications</li>
              <li className="text-gray-300">Websites</li>
              <li className="text-gray-300">Mobile Apps</li>
              <li className="text-gray-300">Managed Hosting</li>
              <li className="text-gray-300">AI Integration</li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-12 border-t border-white/10">
          <div className="max-w-xl mx-auto text-center">
            <h4 className="font-bold text-xl mb-2">Stay Updated</h4>
            <p className="text-gray-300 mb-6">
              Get tips on AI development, project updates, and exclusive offers
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500"
              />
              <button
                type="submit"
                className="btn-accent whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-gray-400 text-sm">
            <div>
              © {new Date().getFullYear()} Mancini Tech Solutions. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-accent-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
