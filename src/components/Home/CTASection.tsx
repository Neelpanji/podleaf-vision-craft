
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRightCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const CTASection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace these with your actual EmailJS credentials
      const SERVICE_ID = 'your_service_id';
      const TEMPLATE_ID = 'your_template_id';
      const PUBLIC_KEY = 'your_public_key';

      const templateParams = {
        from_name: name,
        from_email: email,
        to_email: 'your-email@gmail.com', // Replace with your Gmail
        message: `New lead from CTA form:\nName: ${name}\nEmail: ${email}`,
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      toast({
        title: "Success!",
        description: "Your request has been sent. We'll send you the podcast structure document soon!",
      });

      // Reset form
      setName('');
      setEmail('');
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Error",
        description: "Failed to send your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
            disabled={isSubmitting}
          />
          <Input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white border-gray-300 text-black placeholder:text-gray-500"
            required
            disabled={isSubmitting}
          />
          <Button 
            type="submit" 
            variant="secondary" 
            size="lg" 
            className="group text-lg px-8 bg-black text-white hover:bg-black/80"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
            <ArrowRightCircle className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
          </Button>
        </form>
      </div>
    </section>
  );
};

export default CTASection;
