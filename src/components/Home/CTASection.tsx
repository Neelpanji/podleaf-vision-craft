
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
      const SERVICE_ID = 'service_hllzzpo';
      const TEMPLATE_ID = 'template_rwenu6d';
      const AUTO_REPLY_TEMPLATE_ID = 'template_autoreply';
      const PUBLIC_KEY = 'user_nlsEMvuE69qao2t7h0SCS';

      // Send notification email to you
      const templateParams = {
        from_name: name,
        from_email: email,
        to_email: 'neelpanji@gmail.com',
        message: `New lead from CTA form:\nName: ${name}\nEmail: ${email}`,
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      // Send auto-reply to subscriber
      const autoReplyParams = {
        to_name: name,
        to_email: email,
        from_name: 'PodLeaF Productions',
        from_email: 'neel@podleafproductions.com',
        subject: 'Thank you for your interest - Free Podcast Structure Document',
        message: `Hi ${name},

Thank you for your interest in our podcast services! 

As promised, here are some valuable resources for you:

🎧 Free Podcast Structure Document: [Download Here - You'll need to add your actual link]
📧 Our Portfolio: https://podleafproductions.com/portfolio
💼 Our Services: https://podleafproductions.com/services
📞 Book a Free Consultation: [Add your booking link]

We'll be in touch soon with your free podcast structure document.

Best regards,
Neel
PodLeaF Productions
neel@podleafproductions.com`,
      };

      await emailjs.send(SERVICE_ID, AUTO_REPLY_TEMPLATE_ID, autoReplyParams, PUBLIC_KEY);

      toast({
        title: "Success!",
        description: "Your request has been sent. Check your email for the podcast structure document!",
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
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-teal to-secondary text-black">
      <div className="container container-padding text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
          Not Yet Ready?
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 lg:mb-10 max-w-4xl mx-auto leading-relaxed px-4">
          Get free podcast structure document of real clients to help you think clearly and in the right direction
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 sm:space-y-6 px-4">
          <Input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-white border-gray-300 text-black placeholder:text-gray-500 h-12 sm:h-14 text-base sm:text-lg px-4 sm:px-6"
            required
            disabled={isSubmitting}
          />
          <Input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white border-gray-300 text-black placeholder:text-gray-500 h-12 sm:h-14 text-base sm:text-lg px-4 sm:px-6"
            required
            disabled={isSubmitting}
          />
          <Button 
            type="submit" 
            variant="secondary" 
            size="lg" 
            className="group text-base sm:text-lg lg:text-xl px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-black text-white hover:bg-black/80 w-full sm:w-auto min-h-[48px] sm:min-h-[56px]"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
            <ArrowRightCircle className="ml-2 h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:translate-x-1" />
          </Button>
        </form>
      </div>
    </section>
  );
};

export default CTASection;
