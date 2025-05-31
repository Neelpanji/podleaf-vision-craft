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
    <header className="fixed top-0 z-[9999] w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container px-4 sm:px-6 lg:px-8 flex h-16 sm:h-20 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/lovable-uploads/3ee36577-a56e-4b44-bfc9-dabaa89dad7c.png"
              alt="PodLeaF Productions Logo"
              className="h-16 sm:h-20 w-auto"
            />
            <span className="font-medium text-foreground hidden sm:block text-sm lg:text-base">
              Productions
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <Link to="/" className="text-foreground hover:text-primary transition-colors text-sm lg:text-base py-2 px-1">
            Home
          </Link>
          <div className="relative group">
            <Link to="/services" className="text-foreground hover:text-primary transition-colors flex items-center text-sm lg:text-base py-2 px-1">
              Services
            </Link>
            <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="py-2 divide-y divide-gray-100">
                <Link to="/services#podcast-services" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100">
                  Podcast Services
                </Link>
                <Link to="/services#video-services" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100">
                  Video Services
                </Link>
              </div>
            </div>
          </div>
          <Link to="/portfolio" className="text-foreground hover:text-primary transition-colors text-sm lg:text-base py-2 px-1">
            Portfolio
          </Link>
          <Link to="/case-study" className="text-foreground hover:text-primary transition-colors text-sm lg:text-base py-2 px-1">
            Case Studies
          </Link>
          <Link to="/testimonials" className="text-foreground hover:text-primary transition-colors text-sm lg:text-base py-2 px-1">
            Testimonials
          </Link>
          <Link to="/about-us" className="text-foreground hover:text-primary transition-colors text-sm lg:text-base py-2 px-1">
            About Us
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/contact-us">
            <Button variant="default" size="sm" className="text-sm lg:text-base px-4 lg:px-6">
              Contact Us
            </Button>
          </Link>
        </div>

        <button
          className="md:hidden flex items-center p-3 rounded-md text-foreground hover:bg-muted transition-colors"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border animate-fade-in">
          <div className="flex flex-col px-4 py-6">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors py-4 px-2 text-base font-medium border-b border-border/50"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <div className="py-4 px-2 border-b border-border/50">
              <div className="font-medium text-foreground mb-3 text-base">Services</div>
              <div className="pl-4 space-y-3">
                <Link
                  to="/services#podcast-services"
                  className="text-foreground hover:text-primary transition-colors block py-2 text-sm"
                  onClick={toggleMenu}
                >
                  Podcast Services
                </Link>
                <Link
                  to="/services#video-services"
                  className="text-foreground hover:text-primary transition-colors block py-2 text-sm"
                  onClick={toggleMenu}
                >
                  Video Services
                </Link>
              </div>
            </div>
            <Link
              to="/portfolio"
              className="text-foreground hover:text-primary transition-colors py-4 px-2 text-base font-medium border-b border-border/50"
              onClick={toggleMenu}
            >
              Portfolio
            </Link>
            <Link
              to="/case-study"
              className="text-foreground hover:text-primary transition-colors py-4 px-2 text-base font-medium border-b border-border/50"
              onClick={toggleMenu}
            >
              Case Studies
            </Link>
            <Link
              to="/testimonials"
              className="text-foreground hover:text-primary transition-colors py-4 px-2 text-base font-medium border-b border-border/50"
              onClick={toggleMenu}
            >
              Testimonials
            </Link>
            <Link
              to="/about-us"
              className="text-foreground hover:text-primary transition-colors py-4 px-2 text-base font-medium border-b border-border/50"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              to="/contact-us"
              className="text-foreground hover:text-primary transition-colors py-4 px-2 text-base font-medium"
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
