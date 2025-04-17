
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
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
                company="Artist, Waite THE Brand"
              />
              
              <TestimonialCard
                quote="Bryan's been a fantastic representative for our product. The connection he has with his audience is undeniable. He knows how to connect brands with the market in a meaningful way."
                name="Kenneth Lee"
                company="Promo Manager, Epidemic Sound"
              />
              
              <TestimonialCard
                quote="I worked with Bryan on an interview for my podcast. The experience was seamless. His expertise was exactly what I needed to take my podcast to the next level."
                name="Benjamin Cohen"
                company="Founder, Nexus"
              />
              
              <TestimonialCard
                quote="It was so nice working with Bryan. He creates magic with sound! He also has a vast knowledge of podcasting and audio engineering. I learned a lot working with him."
                name="Tara Furiani"
                company="CEO, Not the HR Lady"
              />
              
              <TestimonialCard
                quote="Working with Bryan and his team to market my podcast has yielded tangible results. The methods PodLeaF teaches are detailed and specific, and totally work, but they deliver it in a way that's simple and easy to understand."
                name="Brian Ondrako"
                company="Host, Just Get Started Podcast"
              />
              
              <TestimonialCard
                quote="I love collaborating with Bryan and PodLeaF Productions! Coming from the corporate side it's always great to work with creators who are professional, yet personable."
                name="Samantha Avneri"
                company="Marketing Director"
              />
              
              <TestimonialCard
                quote="If you want a no-nonsense, technically capable producer who is deeply invested in the success of your content, then Bryan and the team are your best bet."
                name="Corey Haines"
                company="Founder, SwipeWell"
              />
            </div>
          </div>
        </section>

        {/* Featured Testimonial Section */}
        <section className="py-16 bg-muted">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-card p-8 md:p-12 rounded-lg shadow-md border border-border">
              <div className="mb-8 text-center">
                <svg
                  className="h-12 w-12 text-teal mx-auto mb-4"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <blockquote className="text-xl md:text-2xl font-medium italic text-foreground mb-6">
                  "Bryan is a great podcast producer. He has tremendous attention to detail and a fantastic ear. I worked on a highly successful podcast that had close to 200 million downloads and Bryan's production was a key part of that. He's got a unique combo of creativity and perfectionist technical expertise that makes him a producer that podcasters can rely on."
                </blockquote>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <h4 className="font-bold text-lg">Leital Molad</h4>
                  <p className="text-muted-foreground">Senior Podcast Producer</p>
                </div>
              </div>
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
