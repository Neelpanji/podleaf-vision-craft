
import React from 'react';
import { Link } from 'react-router-dom';

interface FooterServicesProps {
  onLinkClick: () => void;
}

const FooterServices = ({ onLinkClick }: FooterServicesProps) => {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Our Services</h3>
      <ul className="space-y-2">
        <li>
          <Link to="/services#podcast-services" onClick={onLinkClick} className="text-slate-300 hover:text-white transition-colors">
            Podcast Services
          </Link>
        </li>
        <li>
          <Link to="/services#video-services" onClick={onLinkClick} className="text-slate-300 hover:text-white transition-colors">
            Video Services
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterServices;
