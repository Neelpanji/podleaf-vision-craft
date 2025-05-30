
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRightCircle } from 'lucide-react';

const CTASection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submission:', { name, email });
    // Reset form
    setName('');
    setEmail('');
  };

  return (
    <section className="py-16 bg-gradient-to-r from-teal to-secondary text-black">
      <div className="container container-padding text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Not Yet Ready?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Get free podcast structure document of real clients to help you think clearly and in the right direction
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <Input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-white border-gray-300 text-black placeholder:text-gray-500"
            required
          />
          <Input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white border-gray-300 text-black placeholder:text-gray-500"
            required
          />
          <Button 
            type="submit" 
            variant="secondary" 
            size="lg" 
            className="group text-lg px-8 bg-black text-white hover:bg-black/80"
          >
            Submit
            <ArrowRightCircle className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
          </Button>
        </form>
      </div>
    </section>
  );
};

export default CTASection;
