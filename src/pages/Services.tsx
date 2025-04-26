
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import SectionHeading from '@/components/UI/SectionHeading';
import ServiceCard from '@/components/UI/ServiceCard';
import { Megaphone, Mic, Radio, PlayCircle, BookOpen, Film } from 'lucide-react';

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash-based navigation
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        {/* Podcast Services Section */}
        <section id="podcast-services" className="section-padding bg-background">
          <div className="container container-padding">
            <SectionHeading
              title="Podcast Services"
              subtitle="From concept to distribution, we offer comprehensive podcast solutions to help you create, grow, and monetize your podcast."
              centered={true}
            />

            <div className="grid md:grid-cols-3 gap-6">
              <ServiceCard
                title="Podcast Marketing"
                description="Reach a wider audience and grow your listener base with our proven marketing strategies tailored for podcasters."
                icon={<Megaphone className="h-6 w-6" />}
                link="#podcast-services"
              />
              <ServiceCard
                title="Podcast Production"
                description="Create high-quality audio that captivates your listeners with our professional production services."
                icon={<Mic className="h-6 w-6" />}
                link="#podcast-services"
              />
              <ServiceCard
                title="Podcast Launch"
                description="Start strong with a strategic and impactful launch plan designed to make a splash in your niche."
                icon={<Radio className="h-6 w-6" />}
                link="#podcast-services"
              />
            </div>
          </div>
        </section>

        {/* Video Services Section */}
        <section id="video-services" className="section-padding bg-muted">
          <div className="container container-padding">
            <SectionHeading
              title="Video Services"
              subtitle="Professional video production services to enhance your brand's visual presence and engagement."
              centered={true}
            />

            <div className="grid md:grid-cols-3 gap-6">
              <ServiceCard
                title="Vlog Videos"
                description="Connect authentically with your audience through engaging vlogs that showcase your personality and expertise."
                icon={<PlayCircle className="h-6 w-6" />}
                link="#video-services"
              />
              <ServiceCard
                title="Educational Videos"
                description="Share your knowledge and establish yourself as an industry leader with professionally produced educational content."
                icon={<BookOpen className="h-6 w-6" />}
                link="#video-services"
              />
              <ServiceCard
                title="Commercial Website Videos"
                description="Drive conversions and showcase your products/services effectively with compelling commercial videos."
                icon={<Film className="h-6 w-6" />}
                link="#video-services"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
