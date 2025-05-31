
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/UI/SectionHeading';

const clientLogos = [
  {
    image: '/lovable-uploads/ff72ddf0-4a22-48d2-a69d-8e5d361750f1.png',
    href: "https://www.youtube.com/@AJuniorVC"
  },
  {
    image: '/lovable-uploads/cb868364-15ba-49b5-9f0d-844c4e25263a.png',
    href: "https://podcasts.apple.com/us/podcast/live-better-sell-better/id1518419694"
  },
  {
    image: '/lovable-uploads/11f0658f-7854-4c6c-b4a5-7fb02742ec26.png',
    href: "https://podcasts.apple.com/us/podcast/notes-on-resilience/id1662964244"
  },
  {
    image: '/lovable-uploads/09382286-cd84-4142-b000-8cc9e469d35a.png',
    href: "https://podcasts.apple.com/us/podcast/the-pr-maven-podcast/id1436184833"
  },
  {
    image: '/lovable-uploads/18da7f8c-696e-47ec-a249-1629f26895e3.png',
    href: "https://www.youtube.com/@msmetalk"
  },
  {
    image: '/lovable-uploads/d790fe22-3fed-428a-9be1-fafecba1705f.png',
    href: "https://podcasts.apple.com/us/podcast/leadership-school/id1554510934"
  },
  {
    image: '/lovable-uploads/211142d2-28d8-4899-8ff7-2275f362f973.png',
    href: "https://podcasts.apple.com/us/podcast/intuition-your-success-compass/id1458617878"
  },
  {
    image: '/lovable-uploads/7bacbc5d-3417-4eed-a929-9d8c432e70c9.png',
    href: "https://podcasts.apple.com/us/podcast/finding-fearless/id1320634079"
  },
  {
    image: '/lovable-uploads/be8d03a2-c88b-4c94-b895-0a66c6c80668.png',
    href: "https://www.youtube.com/@weekdayworks"
  },
  {
    image: '/lovable-uploads/139aa0d1-f77a-44ad-be2f-edffa4913527.png',
    href: "https://podcasts.apple.com/us/podcast/bravo-unscripted/id1693160893"
  },
  {
    image: '/lovable-uploads/0585e87e-7926-4ec5-98b7-793e08c04fee.png',
    href: "https://www.youtube.com/watch?v=j2Yz1SaOFnQ"
  },
  {
    image: '/lovable-uploads/489e243f-ef66-4b74-80c7-a9d7d316a46f.png',
    href: "https://podcasts.apple.com/us/podcast/notes-on-resilience/id1662964244"
  },
  {
    image: '/lovable-uploads/b69a2a66-fd91-46eb-85d6-1a5a6a9ceba2.png',
    href: "https://podcasts.apple.com/us/podcast/the-pr-maven-podcast/id1436184833"
  },
  {
    image: '/lovable-uploads/acfaf98b-d815-4db5-9b3d-15a608de4b97.png',
    href: "https://podcasts.apple.com/us/podcast/strong-leaders-serve-with-teri-schmidt/id1517088288"
  },
  {
    image: '/lovable-uploads/b9312c83-dd29-4c45-b31f-09b9e3f3b694.png',
    href: "https://www.youtube.com/@jasonyitzie"
  }
];

const TrustedBySection = () => {
  return (
    <section className="section-padding bg-black">
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
                  <a href={client.href} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-900 p-4 hover:bg-gray-800 transition-colors border border-gray-700">
                      <img
                        src={client.image}
                        alt={`Client ${index + 1}`}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>

        <p className="text-center text-lg text-gray-300 mt-8">And Maybe You...</p>
      </div>
    </section>
  );
};

export default TrustedBySection;
