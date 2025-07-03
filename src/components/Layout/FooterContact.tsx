
import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import { trackButtonClick } from '@/utils/analytics';

const FooterContact = () => {
  const handleEmailClick = () => {
    trackButtonClick('Footer Email Click', {
      event_category: 'Contact'
    });
  };

  const handleLinkedInClick = () => {
    trackButtonClick('LinkedIn Click', {
      event_category: 'Social'
    });
  };

  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Contact Us</h3>
      <ul className="space-y-3">
        <li className="flex items-start">
          <Mail className="w-5 h-5 text-podleaf-400 mr-3 flex-shrink-0 mt-0.5" />
          <a
            href="mailto:neel@podleafproductions.com"
            className="text-slate-300 hover:text-white transition-colors break-all leading-5"
            onClick={handleEmailClick}
          >
            neel@podleafproductions.com
          </a>
        </li>
        <li className="flex items-start">
          <Linkedin className="w-5 h-5 text-podleaf-400 mr-3 flex-shrink-0 mt-0.5" />
          <a
            href="https://www.linkedin.com/in/neelpanji/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-white transition-colors leading-5 mt-1"
            onClick={handleLinkedInClick}
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterContact;
