
import React from 'react';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  centered?: boolean;
  cta?: React.ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  centered = false,
  cta,
}) => {
  return (
    <div className="hero-pattern">
      <div className="container px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32 lg:py-40">
        <div className={`${centered ? 'text-center mx-auto' : 'text-left'} max-w-6xl`}>
          {title && (
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight md:leading-tight lg:leading-tight gradient-heading mb-6 sm:mb-8 lg:mb-12 px-2 sm:px-0">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
              {subtitle}
            </p>
          )}
          {cta && (
            <div className="mt-8 sm:mt-10 lg:mt-12 flex justify-center">
              {cta}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
