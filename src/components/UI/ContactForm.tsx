
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const ContactForm = () => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isEmailDialogOpen, setIsEmailDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In a real app, you would submit the form data to a server.
    // This is just a placeholder for demonstration.
    
    // Show success toast
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Open email dialog
    setIsEmailDialogOpen(true);
    setIsSubmitting(false);
  };
  
  const handleCloseDialog = () => {
    setIsEmailDialogOpen(false);
    // Reset form after submission
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };
  
  const getMailtoLink = () => {
    const emailSubject = encodeURIComponent(`New contact form submission: ${subject}`);
    const emailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`
    );
    return `mailto:neel@podleafproductions.com?subject=${emailSubject}&body=${emailBody}`;
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us about your project..."
            required
            className="h-36"
          />
        </div>
        
        <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>

      <Dialog open={isEmailDialogOpen} onOpenChange={setIsEmailDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Email your submission</DialogTitle>
            <DialogDescription>
              Click the button below to send your message via your email client.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-4">
            <p className="text-sm text-muted-foreground">
              Your message has been submitted. To ensure delivery, you can also send it directly via your email client.
            </p>
            <div className="flex justify-center">
              <a href={getMailtoLink()} onClick={handleCloseDialog}>
                <Button>Open Email Client</Button>
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ContactForm;
