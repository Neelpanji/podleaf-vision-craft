
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-16 bg-primary/10">
      <div className="container container-padding text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Ready to Elevate Your Content?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-600">Take the first step towards creating professional podcasts and videos that engage your audience and drive results.</p>
        <Link to="/contact-us">
          <Button variant="default" size="lg" className="text-lg px-8">
            Contact Us Today
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
