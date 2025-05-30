
import React from 'react';
import HeroSection from '@/components/UI/HeroSection';
import { Button } from '@/components/ui/button';
import { ArrowRightCircle, ArrowDown } from 'lucide-react';

const HomeHero = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <HeroSection
      title="It's Simple - We Make Podcasts & Video Content That Generate Leads & Sometimes Go Viral!"
      centered={true}
      cta={
        <div className="flex flex-col items-center gap-4">
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
          <Button
            variant="outline"
            size="lg"
            onClick={scrollToBottom}
            className="group text-lg px-8 border-white text-white hover:bg-white hover:text-black"
          >
            Free Surprise At The End
            <ArrowDown className="ml-2 h-6 w-6 transition-transform group-hover:translate-y-1" />
          </Button>
        </div>
      }
    />
  );
};

export default HomeHero;
