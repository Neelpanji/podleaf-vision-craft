
import React from 'react';
import { Link } from 'react-router-dom';
import { Headphones, Video, Mic, ArrowRightCircle, Radio, Megaphone, PlayCircle, FileVideo, Film, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/UI/HeroSection';
import SectionHeading from '@/components/UI/SectionHeading';
import ServiceCard from '@/components/UI/ServiceCard';
import TestimonialCard from '@/components/UI/TestimonialCard';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection
          titlePart1="Podcast Dreams? "
          titlePart1Color="#70dab8"
          titlePart2="We Make 'Em Happen!"
          titlePart2Color="#70dab8"
          subtitle="Launch, grow, and cash in on your podcast with PodLeaF Productions. From killer content to getting heard, we've got you covered (and videos too!)."
          description="In today's digital landscape, podcasts are a powerful way to connect with your audience, build authority, and drive results. At PodLeaF Productions, we specialize in providing end-to-end podcast solutions, from crafting compelling content and professional production to strategic marketing and successful launches."
          buttonText="Get a Free Podcast Strategy Consultation"
          buttonLink="/contact-us"
          imageUrl="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
        />

        {/* Podcast Services Section */}
        <section className="section-padding bg-background">
          <div className="container container-padding">
            <SectionHeading
              title="Podcast Powerhouse"
              subtitle="Whether you're just starting out or looking to take your existing podcast to the next level, we have the expertise to help. Our comprehensive podcast services cover every stage of the journey."
              centered={true}
            />

            <div className="grid md:grid-cols-3 gap-6">
              <ServiceCard
                title="Podcast Marketing"
                description="Reach a wider audience and grow your listener base with our proven marketing strategies tailored for podcasters."
                icon={<Megaphone className="h-6 w-6" />}
                link="/podcast-marketing"
              />
              <ServiceCard
                title="Podcast Production"
                description="Create high-quality audio that captivates your listeners with our professional production services."
                icon={<Mic className="h-6 w-6" />}
                link="/podcast-production"
              />
              <ServiceCard
                title="Podcast Launch"
                description="Start strong with a strategic and impactful launch plan designed to make a splash in your niche."
                icon={<Radio className="h-6 w-6" />}
                link="/podcast-launch"
              />
            </div>
          </div>
        </section>

        {/* Video Services Section */}
        <section className="section-padding bg-muted">
          <div className="container container-padding">
            <SectionHeading
              title="Beyond Audio: Engaging Video Content"
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
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-padding bg-background">
          <div className="container container-padding">
            <SectionHeading
              title="What Our Clients Say"
              centered={true}
            />

            <div className="grid md:grid-cols-3 gap-6">
              <TestimonialCard
                quote="Working with Bryan was a great experience. He clearly communicated his professional expertise in a way that made me feel comfortable and confident. The interview was a lot better than I had initially anticipated!"
                name="Ashlie Swanson"
                company="Former Global Marketing Officer, Shiseido"
              />
              <TestimonialCard
                quote="I was ready to produce my own podcast by myself, but I needed a serious team of professionals who could make my message sound as good as it deserved to be heard. The team at PodLeaF Productions helped."
                name="Ian Chaffee"
                company="Founder, Communications Strategist, Impact-First.org"
              />
              <TestimonialCard
                quote="PodLeaF understands the importance of branding and content. They have the ability to adapt to your needs and provide industry standard solutions."
                name="Darien Waite"
                company="Artist, Waite "THE" Brand"
              />
            </div>

            <div className="text-center mt-10">
              <Link to="/testimonials">
                <Button variant="outline" className="group">
                  View All Testimonials
                  <ArrowRightCircle className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section-padding bg-muted">
          <div className="container container-padding">
            <SectionHeading
              title="Your Trusted Partner for Podcast and Video Success"
              centered={true}
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                <h3 className="text-xl font-semibold mb-3 text-teal">Expertise</h3>
                <p>Benefit from our deep understanding of the podcasting and video landscape gained through years of experience.</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                <h3 className="text-xl font-semibold mb-3 text-teal">Comprehensive Services</h3>
                <p>From concept to distribution, we handle every aspect of your podcast and video production needs.</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                <h3 className="text-xl font-semibold mb-3 text-teal">Results-Driven Approach</h3>
                <p>We focus on strategies that deliver measurable growth and engagement for your content.</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                <h3 className="text-xl font-semibold mb-3 text-teal">Personalized Solutions</h3>
                <p>Tailored plans to meet your unique business goals and audience needs.</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                <h3 className="text-xl font-semibold mb-3 text-teal">High-Quality Production</h3>
                <p>Professional audio and video that leaves a lasting impression on your audience.</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                <h3 className="text-xl font-semibold mb-3 text-teal">Ongoing Support</h3>
                <p>We're with you every step of the way, providing guidance and assistance as you grow.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-teal to-secondary text-black">
          <div className="container container-padding text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Content?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Take the first step towards creating professional podcasts and videos that engage your audience and drive results.</p>
            <Link to="/contact-us">
              <Button variant="secondary" size="lg" className="text-lg px-8 bg-black text-white hover:bg-black/80">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
