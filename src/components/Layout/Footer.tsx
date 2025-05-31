
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const SERVICE_ID = 'service_hllzzpo';
      const TEMPLATE_ID = 'template_rwenu6d';
      const AUTO_REPLY_TEMPLATE_ID = 'template_newsletter_autoreply'; // You'll need to create this template
      const PUBLIC_KEY = 'user_nlsEMvuE69qao2t7h0SCS';

      // Send notification email to you
      const templateParams = {
        from_name: name,
        from_email: email,
        to_email: 'neelpanji@gmail.com',
        message: `New newsletter subscription:\nName: ${name}\nEmail: ${email}`,
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      // Send auto-reply to subscriber
      const autoReplyParams = {
        to_name: name,
        to_email: email,
        from_name: 'PodLeaF Productions',
        from_email: 'neel@podleafproductions.com',
        subject: 'Welcome to PodLeaF Productions Newsletter + Free Report',
        message: `Hi ${name},

Welcome to the PodLeaF Productions newsletter! 

Here's your free podcast structure report: [Add your download link]

📧 Explore our work: https://podleafproductions.com/portfolio
🎯 Our services: https://podleafproductions.com/services
📚 Case studies: https://podleafproductions.com/case-study
💬 Testimonials: https://podleafproductions.com/testimonials

Stay tuned for valuable podcast insights, tips, and industry updates!

Best regards,
Neel
PodLeaF Productions
neel@podleafproductions.com`,
      };

      await emailjs.send(SERVICE_ID, AUTO_REPLY_TEMPLATE_ID, autoReplyParams, PUBLIC_KEY);

      toast({
        title: "Subscribed!",
        description: "You've been subscribed to our newsletter. Check your email for the free report!",
      });

      // Reset form
      setName('');
      setEmail('');
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-6">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" onClick={handleLinkClick} className="text-slate-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" onClick={handleLinkClick} className="text-slate-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" onClick={handleLinkClick} className="text-slate-300 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/case-study" onClick={handleLinkClick} className="text-slate-300 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/testimonials" onClick={handleLinkClick} className="text-slate-300 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact-us" onClick={handleLinkClick} className="text-slate-300 hover:text-white transition-colors">
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
                <Link to="/services#podcast-services" onClick={handleLinkClick} className="text-slate-300 hover:text-white transition-colors">
                  Podcast Services
                </Link>
              </li>
              <li>
                <Link to="/services#video-services" onClick={handleLinkClick} className="text-slate-300 hover:text-white transition-colors">
                  Video Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information & Newsletter */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Mail className="w-5 h-5 text-podleaf-400 mr-3 flex-shrink-0 mt-0.5" />
                  <a
                    href="mailto:neel@podleafproductions.com"
                    className="text-slate-300 hover:text-white transition-colors break-all leading-5"
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
                    className="text-slate-300 hover:text-white transition-colors leading-5"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h3 className="text-lg font-bold mb-4">Newsletter & Free Report</h3>
              <p className="text-slate-300 mb-4 text-sm">
                Subscribe for newsletter & get your free podcast structure report
              </p>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
                  required
                  disabled={isSubmitting}
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
                  required
                  disabled={isSubmitting}
                />
                <Button
                  type="submit"
                  variant="default"
                  size="sm"
                  className="w-full bg-podleaf-400 hover:bg-podleaf-500 text-black font-medium"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </Button>
              </form>
            </div>
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
