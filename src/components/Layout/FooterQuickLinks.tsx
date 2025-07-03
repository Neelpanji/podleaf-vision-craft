
import React from 'react';
import { Link } from 'react-router-dom';

interface FooterQuickLinksProps {
  onLinkClick: () => void;
}

const FooterQuickLinks = ({ onLinkClick }: FooterQuickLinksProps) => {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Quick Links</h3>
      <ul className="space-y-2">
        <li>
          <Link to="/" onClick={onLinkClick} className="text-slate-300 hover:text-white transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about-us" onClick={onLinkClick} className="text-slate-300 hover:text-white transition-colors">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/portfolio" onClick={onLinkClick} className="text-slate-300 hover:text-white transition-colors">
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/case-study" onClick={onLinkClick} className="text-slate-300 hover:text-white transition-colors">
            Case Studies
          </Link>
        </li>
        <li>
          <Link to="/testimonials" onClick={onLinkClick} className="text-slate-300 hover:text-white transition-colors">
            Testimonials
          </Link>
        </li>
        <li>
          <Link to="/contact-us" onClick={onLinkClick} className="text-slate-300 hover:text-white transition-colors">
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterQuickLinks;
