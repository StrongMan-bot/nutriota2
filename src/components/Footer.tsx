import React from 'react';
import { Instagram, Linkedin, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-emerald-800 mb-4">
              Nutriota
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Clean, transparent supplements for modern wellness routines.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#products" className="text-gray-600 hover:text-emerald-700 transition-colors duration-200">
                Products
              </a>
              <a href="#range" className="text-gray-600 hover:text-emerald-700 transition-colors duration-200">
                Range
              </a>
              <a href="#about" className="text-gray-600 hover:text-emerald-700 transition-colors duration-200">
                About Us
              </a>
              <a href="#contact" className="text-gray-600 hover:text-emerald-700 transition-colors duration-200">
                Contact Us
              </a>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Stay Connected</h4>
            <p className="text-gray-600 text-sm mb-4">
              Join our community and receive wellness tips and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
              />
              <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                <Mail size={16} />
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          {/* Social Media */}
          <div className="flex space-x-4 mb-4 sm:mb-0">
            <a href="#" className="text-gray-400 hover:text-emerald-700 transition-colors duration-200" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-700 transition-colors duration-200" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-700 transition-colors duration-200" aria-label="Facebook">
              <Facebook size={20} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            © 2025 Nutriota. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;