
import React from 'react';
import HeroSection from '@/components/UI/HeroSection';
import { Button } from '@/components/ui/button';
import { ArrowRightCircle } from 'lucide-react';

const HomeHero = () => {
  return (
    <HeroSection
      title="It's Simple - We Make Podcasts & Video Content That Generate Leads & Sometimes Go Viral!"
      centered={true}
      // Add the below as custom CTA content if relevant
      cta={
        <a
          href="https://calendar.app.google/nnbyeyt87GkLirm18"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="secondary"
            size="lg"
            className="group text-lg px-8 bg-black text-white hover:bg-black/80"
          >
            Get Started
            <ArrowRightCircle className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
          </Button>
        </a>
      }
    />
  );
};

export default HomeHero;

