
import React from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle, BookOpen, Film, ArrowRightCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/UI/SectionHeading';
import ServiceCard from '@/components/UI/ServiceCard';

const VideoServicesSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container container-padding">
        <SectionHeading
          title="Videos? We Do That As Well!"
          subtitle="In addition to our podcast expertise, we offer professional video production services to enhance your brand's reach and engagement."
          centered={true}
        />

        <div className="grid md:grid-cols-3 gap-6">
          <ServiceCard
            title="Vlog Videos"
            description="Connect authentically with your audience through engaging vlogs that showcase your personality and expertise."
            icon={<PlayCircle className="h-6 w-6" />}
            link="/video-services"
          />
          <ServiceCard
            title="Educational Videos"
            description="Share your knowledge and establish yourself as an industry leader with professionally produced educational content."
            icon={<BookOpen className="h-6 w-6" />}
            link="/video-services"
          />
          <ServiceCard
            title="Commercial Website Videos"
            description="Drive conversions and showcase your products/services effectively with compelling commercial videos."
            icon={<Film className="h-6 w-6" />}
            link="/video-services"
          />
        </div>

        <div className="text-center mt-8">
          <Link to="/portfolio#video-projects">
            <Button variant="outline" size="lg" className="group font-bold text-lg px-12 py-6">
              Explore All Video Styles
              <ArrowRightCircle className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VideoServicesSection;
