
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you would submit the form data to a server.
    // This is just a placeholder for demonstration.
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <Input
          id="name"
          placeholder="Your name"
          required
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <Input
          id="email"
          type="email"
          placeholder="Your email address"
          required
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium">
          Subject
        </label>
        <Input
          id="subject"
          placeholder="What's this about?"
          required
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <Textarea
          id="message"
          placeholder="Tell us about your project..."
          required
          className="h-36"
        />
      </div>
      
      <Button type="submit" className="w-full md:w-auto">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
