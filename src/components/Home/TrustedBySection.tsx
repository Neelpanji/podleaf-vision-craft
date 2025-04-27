
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/UI/SectionHeading';

const clientLogos = [
  {
    image: '/lovable-uploads/ff72ddf0-4a22-48d2-a69d-8e5d361750f1.png',
    link: '/portfolio'
  },
  {
    image: '/lovable-uploads/211142d2-28d8-4899-8ff7-2275f362f973.png',
    link: '/portfolio'
  },
  {
    image: '/lovable-uploads/11f0658f-7854-4c6c-b4a5-7fb02742ec26.png',
    link: '/portfolio'
  },
  {
    image: '/lovable-uploads/09382286-cd84-4142-b000-8cc9e469d35a.png',
    link: '/portfolio'
  },
  {
    image: '/lovable-uploads/18da7f8c-696e-47ec-a249-1629f26895e3.png',
    link: '/portfolio'
  },
  {
    image: '/lovable-uploads/d790fe22-3fed-428a-9be1-fafecba1705f.png',
    link: '/portfolio'
  }
];

const TrustedBySection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container container-padding">
        <SectionHeading
          title="Who Trust Us?"
          centered={true}
        />
        
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {clientLogos.map((client, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <Link to={client.link} className="block">
                    <div className="relative aspect-square overflow-hidden rounded-lg bg-background p-4 hover:bg-accent/5 transition-colors">
                      <img
                        src={client.image}
                        alt={`Client ${index + 1}`}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>

        <p className="text-center text-lg text-muted-foreground mt-8">And Maybe You...</p>
      </div>
    </section>
  );
};

export default TrustedBySection;
