import React from 'react';
import { Linkedin, Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto text-center space-y-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Career Navigator. All Rights Reserved.
        </p>
        <div className="flex justify-center space-x-6">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
          </a>
        </div>
        <nav className="flex justify-center space-x-4 text-sm">
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:underline">
            Terms of Service
          </a>
          <a href="/contact" className="hover:underline">
            Contact Us
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;