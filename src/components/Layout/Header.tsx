
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/lovable-uploads/8a0a8616-2541-4142-9eca-f39f84773c5d.png"
              alt="PodLeaF Productions Logo"
              className="h-10 w-auto"
            />
            <span className="font-medium text-foreground hidden sm:block">
              Productions
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <div className="relative group">
            <Link to="/services" className="text-foreground hover:text-primary transition-colors flex items-center">
              Services
            </Link>
            <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="py-2 divide-y divide-gray-100">
                <Link to="/services#podcast-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Podcast Services
                </Link>
                <Link to="/services#video-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Video Services
                </Link>
              </div>
            </div>
          </div>
          <Link to="/portfolio" className="text-foreground hover:text-primary transition-colors">
            Portfolio
          </Link>
          <Link to="/case-study" className="text-foreground hover:text-primary transition-colors">
            Case Studies
          </Link>
          <Link to="/testimonials" className="text-foreground hover:text-primary transition-colors">
            Testimonials
          </Link>
          <Link to="/about-us" className="text-foreground hover:text-primary transition-colors">
            About Us
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/contact-us">
            <Button variant="default" size="sm">
              Contact Us
            </Button>
          </Link>
        </div>

        <button
          className="md:hidden flex items-center p-2 rounded-md text-foreground"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="flex flex-col space-y-2 px-4 py-6">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <div className="py-2">
              <div className="font-medium text-foreground mb-2">Services</div>
              <div className="pl-4 space-y-2">
                <Link
                  to="/services#podcast-services"
                  className="text-foreground hover:text-primary transition-colors block py-1"
                  onClick={toggleMenu}
                >
                  Podcast Services
                </Link>
                <Link
                  to="/services#video-services"
                  className="text-foreground hover:text-primary transition-colors block py-1"
                  onClick={toggleMenu}
                >
                  Video Services
                </Link>
              </div>
            </div>
            <Link
              to="/portfolio"
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Portfolio
            </Link>
            <Link
              to="/case-study"
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Case Studies
            </Link>
            <Link
              to="/testimonials"
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Testimonials
            </Link>
            <Link
              to="/about-us"
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              to="/contact-us"
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
