
import React from 'react';

interface HeroSectionProps {
  title?: string;
  centered?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  centered = false,
}) => {
  return (
    <div className="hero-pattern">
      <div className="container px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className={`${centered ? 'text-center mx-auto' : 'text-left'} max-w-5xl`}>
          {title && (
            <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl leading-tight gradient-heading">
              {title}
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
