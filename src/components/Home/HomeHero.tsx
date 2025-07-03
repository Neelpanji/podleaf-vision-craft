
import React from 'react';
import HeroSection from '@/components/UI/HeroSection';
import { Button } from '@/components/ui/button';
import { ArrowRightCircle, ArrowDown } from 'lucide-react';

const HomeHero = () => {
  const scrollToBottom = () => {
    // Track scroll to bottom click
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'Navigation',
        event_label: 'Scroll to Bottom CTA',
        value: 1
      });
    }
    
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  const handleGetStartedClick = () => {
    // Track get started button click
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'CTA',
        event_label: 'Hero Get Started',
        value: 1
      });
    }
  };

  return (
    <HeroSection
      title="It's Simple - We Make Podcasts & Video Content That Generate Leads & Sometimes Go Viral!"
      centered={true}
      cta={
        <div className="flex flex-col items-center gap-4 sm:gap-6 px-4">
          <a
            href="https://calendar.app.google/nnbyeyt87GkLirm18"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
            onClick={handleGetStartedClick}
          >
            <Button
              variant="secondary"
              size="lg"
              className="group text-base sm:text-lg lg:text-xl px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-black text-white hover:bg-black/80 w-full sm:w-auto min-h-[48px] sm:min-h-[56px]"
            >
              Get Started
              <ArrowRightCircle className="ml-2 h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
          <Button
            variant="outline"
            size="lg"
            onClick={scrollToBottom}
            className="group text-base sm:text-lg lg:text-xl px-6 sm:px-8 lg:px-10 py-3 sm:py-4 border-white text-white hover:bg-white hover:text-black w-full sm:w-auto min-h-[48px] sm:min-h-[56px]"
          >
            Free Surprise At The End
            <ArrowDown className="ml-2 h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:translate-y-1" />
          </Button>
        </div>
      }
    />
  );
};

export default HomeHero;
