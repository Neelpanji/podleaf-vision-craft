
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  title?: string;
  titlePart1?: string;
  titlePart1Color?: string;
  titlePart2?: string;
  titlePart2Color?: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  titlePart1,
  titlePart1Color,
  titlePart2,
  titlePart2Color,
  subtitle,
  description,
  buttonText,
  buttonLink,
  imageUrl,
}) => {
  return (
    <div className="bg-white">
      <div className="container px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="text-left animate-fade-in">
            {title ? (
              <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl leading-tight text-gray-900 mb-4">
                {title}
              </h1>
            ) : (
              <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-4">
                {titlePart1 && (
                  <span style={{ color: titlePart1Color || '#70dab8' }}>
                    {titlePart1}
                  </span>
                )}
                {titlePart2 && (
                  <span style={{ color: titlePart2Color || '#ae88d0' }}>
                    {titlePart2}
                  </span>
                )}
              </h1>
            )}
            <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-600 font-medium mb-6">
              {subtitle}
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-xl">
              {description}
            </p>
            <Link to={buttonLink}>
              <Button className="text-base px-8 py-6 bg-primary hover:bg-primary/90" size="lg">
                {buttonText}
              </Button>
            </Link>
          </div>
          <div className="hidden md:block">
            <img
              src={imageUrl}
              alt="PodLeaF Productions"
              className="rounded-lg shadow-lg animate-fade-in w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
