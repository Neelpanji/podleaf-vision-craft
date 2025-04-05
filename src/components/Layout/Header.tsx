
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
            <span className="font-bold text-2xl bg-gradient-to-r from-podleaf-600 to-leaf-600 bg-clip-text text-transparent">
              PodLeaF
            </span>
            <span className="font-medium text-foreground">Productions</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <div className="relative group">
            <Link to="#" className="text-foreground hover:text-primary transition-colors flex items-center">
              Services
            </Link>
            <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="py-2 divide-y divide-gray-100">
                <div className="px-4 py-3 text-sm font-medium text-gray-700">Podcast Services</div>
                <Link to="/podcast-marketing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Podcast Marketing
                </Link>
                <Link to="/podcast-production" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Podcast Production
                </Link>
                <Link to="/podcast-launch" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Podcast Launch
                </Link>
                <div className="px-4 py-3 text-sm font-medium text-gray-700">Video Services</div>
                <Link to="/video-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  All Video Services
                </Link>
              </div>
            </div>
          </div>
          <Link to="/portfolio" className="text-foreground hover:text-primary transition-colors">
            Portfolio
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center p-2 rounded-md text-foreground"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
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
              <div className="font-medium text-foreground mb-2">Podcast Services</div>
              <div className="pl-4 space-y-2">
                <Link
                  to="/podcast-marketing"
                  className="text-foreground hover:text-primary transition-colors block py-1"
                  onClick={toggleMenu}
                >
                  Podcast Marketing
                </Link>
                <Link
                  to="/podcast-production"
                  className="text-foreground hover:text-primary transition-colors block py-1"
                  onClick={toggleMenu}
                >
                  Podcast Production
                </Link>
                <Link
                  to="/podcast-launch"
                  className="text-foreground hover:text-primary transition-colors block py-1"
                  onClick={toggleMenu}
                >
                  Podcast Launch
                </Link>
              </div>
            </div>
            <div className="py-2">
              <Link
                to="/video-services"
                className="text-foreground hover:text-primary transition-colors block"
                onClick={toggleMenu}
              >
                Video Services
              </Link>
            </div>
            <Link
              to="/portfolio"
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Portfolio
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
