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
          titlePart1="Podcast & Video Dreams? "
          titlePart1Color="#70dab8"
          titlePart2="We Make 'Em Happen!"
          titlePart2Color="#70dab8"
          subtitle="Launch, grow, and cash in on your podcast with PodLeaF Productions. From killer content to getting heard, we've got you covered (and videos too!)."
          description="In today's digital landscape, podcasts are a powerful way to connect with your audience, build authority, and drive results. At PodLeaF Productions, we specialize in providing end-to-end podcast solutions, from crafting compelling content and professional production to strategic marketing and successful launches."
          buttonText="Get a Free Podcast Strategy Consultation"
          buttonLink="/contact-us"
          imageUrl="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
        />

        {/* Our Results Section */}
        <section className="section-padding bg-background">
          <div className="container container-padding">
            <SectionHeading
              title="Our Results"
              centered={true}
            />

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                <h3 className="text-xl font-semibold mb-3 text-teal">The Weekday Show</h3>
                <p className="text-lg font-semibold text-primary mb-4">46% Guest to Client Conversion!</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                <h3 className="text-xl font-semibold mb-3 text-teal">Starting Over Stronger Podcast By Annie Chavez</h3>
                <p className="text-lg font-semibold text-primary mb-4">50,000 Downloads!</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                <h3 className="text-xl font-semibold mb-3 text-teal">Manya Chylinski</h3>
                <p className="text-lg font-semibold text-primary mb-4">2 years, 104 guests, USD 3000 invested/year - One Deal & Earned more than that</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link to="/case-study">
                <Button variant="outline" className="group">
                  Read more success stories here
                  <ArrowRightCircle className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Podcast Services Section */}
        <section className="section-padding bg-background">
          <div className="container container-padding">
            <SectionHeading
              title="Podcast & Video Powerhouse"
              subtitle="Whether you're just starting out or looking to take your existing podcast to the next level, we have the expertise to help. Our comprehensive podcast services cover every stage of the journey."
              centered={true}
            />

            <div className="grid md:grid-cols-3 gap-6">
              <ServiceCard
                title="Podcast Launch"
                description="Start strong with a strategic and impactful launch plan designed to make a splash in your niche."
                icon={<Radio className="h-6 w-6" />}
                link="/podcast-launch"
              />
              <ServiceCard
                title="Podcast Production & Management"
                description="Create high-quality audio that captivates your listeners with our professional production services."
                icon={<Mic className="h-6 w-6" />}
                link="/podcast-production"
              />
              <ServiceCard
                title="Video Production"
                description="Create engaging video content that complements your podcast and expands your reach."
                icon={<Video className="h-6 w-6" />}
                link="/video-services"
              />
            </div>
          </div>
        </section>

        {/* Production Process Section */}
        <section className="section-padding bg-muted">
          <div className="container container-padding">
            <SectionHeading
              title="Our Production Process"
              subtitle="Transform your ideas into professional, engaging podcasts with our streamlined process"
              centered={true}
            />
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                <h3 className="text-xl font-semibold mb-3 text-teal">Getting you ready</h3>
                <p className="text-sm text-muted-foreground mb-2">(My Job)</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Pre-Show</li>
                  <li>Setting Up The Meet</li>
                  <li>Deciding What To Ask/Talk</li>
                  <li>Mic & Camera Set up</li>
                  <li>Branding</li>
                  <li>Strategy</li>
                  <li>Directory Submissions</li>
                  <li>Narration Development</li>
                </ul>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                <h3 className="text-xl font-semibold mb-3 text-teal">Once You Are Ready</h3>
                <p className="text-sm text-muted-foreground mb-2">(Your Job)</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Hit Record & Have the conversation</li>
                </ul>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                <h3 className="text-xl font-semibold mb-3 text-teal">Making You Ready For The Audience</h3>
                <p className="text-sm text-muted-foreground mb-2">(My Job)</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Audio Production</li>
                  <li>Show Notes</li>
                  <li>Video Editing</li>
                  <li>Shorts / Reels</li>
                  <li>Thumbnails</li>
                  <li>Scheduling</li>
                </ul>
              </div>
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

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              <TestimonialCard
                quote="I love working with Neel on my podcast. When we first met before I had ever published an episode, it was clear to me that he was going to be a strategic partner."
                name="Manya Chylinski"
                company="Host of Notes on Resilience Podcast"
                imageUrl="/lovable-uploads/11f0658f-7854-4c6c-b4a5-7fb02742ec26.png"
                podcastUrl="https://podcasts.apple.com/us/podcast/notes-on-resilience/id1662964244"
                videoEmbedLink="https://www.youtube-nocookie.com/embed/Rs433fbAvbw"
              />
              <TestimonialCard
                quote="I am a huge raving fan of Neel, and this is no exaggeration. I rave about him to anybody who listens to me because he has been an integral part of my podcast team."
                name="Kyla Cofer"
                company="Host of Leadership School"
                imageUrl="/lovable-uploads/d790fe22-3fed-428a-9be1-fafecba1705f.png"
                podcastUrl="https://podcasts.apple.com/us/podcast/leadership-school/id1554510934"
                videoEmbedLink="https://www.youtube-nocookie.com/embed/QDgztwaZyi8"
              />
              <TestimonialCard
                quote="I would highly recommend working with Neel because as a life coach and business consultant, I understand the value of having someone who already has the skills that are needed in your business because you cannot be, everything to everyone. Working with Neel has helped me to grow as a business owner and as a podcast host. So I would highly recommend hiring him to work with you, to build your own following and to have that product that is edited to your highest liking."
                name="Vicki Baird"
                company="Host of Intuition: Your First Sense"
                imageUrl="/lovable-uploads/211142d2-28d8-4899-8ff7-2275f362f973.png"
                podcastUrl="https://podcasts.apple.com/us/podcast/intuition-your-success-compass/id1458617878"
                videoEmbedLink="https://www.youtube-nocookie.com/embed/Ifod2of5bmI"
              />
              <TestimonialCard
                quote="I've been hosting the PR Maven podcast for six years. Just recently, I connected with Neel, who has been a significant help in editing, disseminating, and producing videos for my podcast. I especially appreciate Neel's skill in finding those key soundbites that really capture the essential messages of each episode."
                name="Nancy Marshall"
                company="Host of The PR Maven Podcast"
                imageUrl="/lovable-uploads/09382286-cd84-4142-b000-8cc9e469d35a.png"
                podcastUrl="https://podcasts.apple.com/us/podcast/the-pr-maven-podcast/id1436184833"
                videoEmbedLink="https://www.youtube-nocookie.com/embed/sZcXCezzmRA"
              />
              <TestimonialCard
                quote="As Amit, founder and CEO of Weekday, a recruitment platform, I initially hired Neel Services for a podcast experiment to engage B2B recruiters and build customer relationships. Neel's team was incredibly helpful, handling everything from content ideation and setup to social media promotion and short video creation. Their support was instrumental, even assisting us in establishing an in-person studio after our initial podcast success with them. I highly recommend Neel's services; we're very satisfied."
                name="Amit Singh"
                company="Host of The Weekday Show"
                imageUrl="/lovable-uploads/ff72ddf0-4a22-48d2-a69d-8e5d361750f1.png"
                podcastUrl="https://www.youtube.com/@weekdayworks"
                videoEmbedLink="https://youtube.com/shorts/688ugVnl47k?feature=share"
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
