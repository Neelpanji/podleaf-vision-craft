
import React from 'react';
import { Radio, Mic, Video } from 'lucide-react';
import SectionHeading from '@/components/UI/SectionHeading';
import ServiceCard from '@/components/UI/ServiceCard';

const PodcastServicesSection = () => {
  return (
    <section className="section-padding bg-black">
      <div className="container container-padding">
        <SectionHeading
          title="Areas Where We Have These Results..."
          subtitle="Our services"
          centered={true}
        />

        <div className="grid md:grid-cols-3 gap-6">
          <ServiceCard
            title="Podcast Launch"
            description="Start strong with a strategic and impactful launch plan designed to make a splash in your niche."
            icon={<Radio className="h-6 w-6" />}
            link="/services#podcast-services"
          />
          <ServiceCard
            title="Podcast Production & Management"
            description="Create high-quality audio that captivates your listeners with our professional production services."
            icon={<Mic className="h-6 w-6" />}
            link="/services#podcast-services"
          />
          <ServiceCard
            title="Video Production"
            description="Create engaging video content that complements your podcast and expands your reach."
            icon={<Video className="h-6 w-6" />}
            link="/services#video-services"
          />
        </div>
      </div>
    </section>
  );
};

export default PodcastServicesSection;
