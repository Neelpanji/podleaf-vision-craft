
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const FooterNewsletter = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Track newsletter subscription attempt
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'form_submit', {
        event_category: 'Newsletter',
        event_label: 'Footer Newsletter Signup',
        value: 1
      });
    }

    try {
      const SERVICE_ID = 'service_hllzzpo';
      const TEMPLATE_ID = 'template_rwenu6d';
      const AUTO_REPLY_TEMPLATE_ID = 'template_newsletter_autoreply';
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

      // Track successful newsletter subscription
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'conversion', {
          event_category: 'Newsletter',
          event_label: 'Newsletter Signup Success',
          value: 1
        });
      }

      toast({
        title: "Subscribed!",
        description: "You've been subscribed to our newsletter. Check your email for the free report!",
      });

      // Reset form
      setName('');
      setEmail('');
    } catch (error) {
      console.error('EmailJS error:', error);
      
      // Track newsletter subscription error
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'exception', {
          description: 'Newsletter subscription failed',
          fatal: false
        });
      }
      
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
  );
};

export default FooterNewsletter;
