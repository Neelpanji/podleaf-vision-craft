
import React from 'react';
import { Link } from 'react-router-dom';
import FooterQuickLinks from './FooterQuickLinks';
import FooterServices from './FooterServices';
import FooterContact from './FooterContact';
import FooterNewsletter from './FooterNewsletter';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-6">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FooterQuickLinks onLinkClick={handleLinkClick} />
          <FooterServices onLinkClick={handleLinkClick} />
          
          <div className="space-y-8">
            <FooterContact />
            <FooterNewsletter />
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 text-center">
          <p className="text-slate-400 text-sm">
            &copy; {currentYear} PodLeaF Productions. All rights reserved.
          </p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy-policy" onClick={handleLinkClick} className="text-slate-400 text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" onClick={handleLinkClick} className="text-slate-400 text-sm hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
