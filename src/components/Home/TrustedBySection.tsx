
import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import SectionHeading from '@/components/UI/SectionHeading';

const clientLogos = [
  '/lovable-uploads/ff72ddf0-4a22-48d2-a69d-8e5d361750f1.png',
  '/lovable-uploads/211142d2-28d8-4899-8ff7-2275f362f973.png',
  '/lovable-uploads/11f0658f-7854-4c6c-b4a5-7fb02742ec26.png',
  '/lovable-uploads/09382286-cd84-4142-b000-8cc9e469d35a.png',
  '/lovable-uploads/18da7f8c-696e-47ec-a249-1629f26895e3.png',
  '/lovable-uploads/d790fe22-3fed-428a-9be1-fafecba1705f.png'
];

const TrustedBySection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container container-padding">
        <SectionHeading
          title="Who Trust Us?"
          centered={true}
        />
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {clientLogos.map((logo, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="relative aspect-square overflow-hidden rounded-lg bg-background p-4">
                  <img
                    src={logo}
                    alt={`Client ${index + 1}`}
                    className="object-contain w-full h-full"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default TrustedBySection;
