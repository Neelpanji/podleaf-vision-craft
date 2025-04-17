
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/UI/SectionHeading';
import TestimonialCard from '@/components/UI/TestimonialCard';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

const Testimonials = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-teal to-secondary text-white py-12 md:py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Client Testimonials
              </h1>
              <p className="text-xl opacity-90">
                Don't just take our word for it - hear what our clients have to say about working with us.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-background">
          <div className="container px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="What Our Clients Say"
              subtitle="Read about the experiences of businesses and individuals who have worked with PodLeaF Productions."
              centered={true}
            />

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <TestimonialCard
                quote="I love working with Neel on my podcast. When we first met before I had ever published an episode, it was clear to me that he was going to be a strategic partner. He asked me such detailed questions about why was I starting a podcast? And what did I want it to do? He really is a strategic partner who helps me think about analytics and social and marketing and making sure that my podcast does what I want it to do. I couldn't do it without him."
                name="Manya Chylinski"
                company="Host of Notes on Resilience Podcast"
                videoEmbedLink="https://www.youtube-nocookie.com/embed/Rs433fbAvbw"
              />
              
              <TestimonialCard
                quote="I am a huge raving fan of Neel, and this is no exaggeration. I rave about him to anybody who listens to me because he has been an integral part of my podcast team. I would not be anywhere I am without Neel. He helps me produce a top-quality audio recording for my podcast. Neel, thank you so much for all the work that you've done for my podcast and for being an incredible, irreplaceable part of my team we're really proud to know you and proud to work with you."
                name="Kyla Cofer"
                company="Host of Leadership School"
                videoEmbedLink="https://www.youtube-nocookie.com/embed/QDgztwaZyi8"
              />
              
              <TestimonialCard
                quote="Neel Panji has been everything I have needed and wanted in a podcast editor for well over a year. He's intuitive, easy to work with, and affordable, and willing to go above and beyond in his services. He always produces quality content, so much so that I don't even have to check his work anymore. I couldn't ask for anything more in a podcast editor."
                name="Annie Allen"
                company="Host of Starting Over Stronger Podcast"
                videoEmbedLink="https://www.youtube-nocookie.com/embed/yo91m_r6LAM"
              />
              
              <TestimonialCard
                quote="I would highly recommend working with Neel because as a life coach and business consultant, I understand the value of having someone who already has the skills that are needed in your business because you cannot be, everything to everyone. Working with Neel has helped me to grow as a business owner and as a podcast host. So I would highly recommend hiring him to work with you, to build your own following and to have that product that is edited to your highest liking."
                name="Vicki Baird"
                company="Host of Intuition: Your First Sense"
                videoEmbedLink="https://www.youtube-nocookie.com/embed/Ifod2of5bmI"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-teal to-secondary">
          <div className="container px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6 text-black">Ready to Join Our Success Stories?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-black">
              Let's create exceptional podcast and video content that drives results for your business.
            </p>
            <Link to="/contact-us">
              <Button size="lg" className="text-lg px-8 bg-black text-white hover:bg-black/80">
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

export default Testimonials;
