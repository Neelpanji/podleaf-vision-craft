import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-6">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img
                src="/lovable-uploads/3ee36577-a56e-4b44-bfc9-dabaa89dad7c.png"
                alt="PodLeaF Productions Logo"
                className="h-20 w-auto"
              />
              <span className="font-medium text-slate-300">Productions</span>
            </Link>
            <p className="text-slate-300 mb-4">
              Your partner for comprehensive podcast marketing, production, launch, and engaging video content.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/neelpanji/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-podleaf-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-slate-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-slate-300 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/case-study" className="text-slate-300 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-slate-300 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-slate-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/podcast-marketing" className="text-slate-300 hover:text-white transition-colors">
                  Podcast Marketing
                </Link>
              </li>
              <li>
                <Link to="/podcast-production" className="text-slate-300 hover:text-white transition-colors">
                  Podcast Production
                </Link>
              </li>
              <li>
                <Link to="/podcast-launch" className="text-slate-300 hover:text-white transition-colors">
                  Podcast Launch
                </Link>
              </li>
              <li>
                <Link to="/video-services" className="text-slate-300 hover:text-white transition-colors">
                  Video Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-podleaf-400 flex-shrink-0" />
                <a
                  href="mailto:neel@podleafproductions.com"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  neel@podleafproductions.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 text-center">
          <p className="text-slate-400 text-sm">
            &copy; {currentYear} PodLeaF Productions. All rights reserved.
          </p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy-policy" className="text-slate-400 text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-slate-400 text-sm hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
