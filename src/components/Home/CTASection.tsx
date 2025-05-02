
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRightCircle } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-teal to-secondary text-black">
      <div className="container container-padding text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Content?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">Take the first step towards creating professional podcasts and videos that engage your audience and drive results.</p>
        <Link to="/contact-us">
          <Button variant="secondary" size="lg" className="group text-lg px-8 bg-black text-white hover:bg-black/80">
            Contact Us Today
            <ArrowRightCircle className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
