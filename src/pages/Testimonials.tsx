
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
                quote="As the Director of Marketing at a fast-growing tech startup, I needed a way to establish thought leadership in our space. PodLeaF Productions helped us create a professional podcast that's now become a key part of our brand identity."
                name="Alex Morgan"
                company="VisionTech Solutions"
              />
              
              <TestimonialCard
                quote="I've always wanted to start a podcast but had no idea where to begin. The team at PodLeaF made the entire process simple and stress-free. Now my podcast is reaching thousands of listeners each month!"
                name="Sarah Johnson"
                company="Mindful Entrepreneur Podcast"
              />
              
              <TestimonialCard
                quote="The production quality of our podcast is absolutely top-notch! PodLeaF's sound engineering team took our amateur recording and transformed it into something that sounds like it belongs on NPR."
                name="Marcus Chen"
                company="Future Finance Podcast"
              />
              
              <TestimonialCard
                quote="Our corporate training videos needed a major upgrade. PodLeaF Productions delivered professional, engaging content that has significantly improved our onboarding process and employee feedback scores."
                name="Priya Patel"
                company="Global HR Solutions"
              />
              
              <TestimonialCard
                quote="I was nervous about being on camera, but the PodLeaF team made me feel completely comfortable. Their coaching helped me deliver my message confidently, and the final videos exceeded my expectations."
                name="David Rodriguez"
                company="Leadership Academy"
              />
              
              <TestimonialCard
                quote="As a small business owner, I was skeptical about the ROI of starting a podcast. Six months later, I can say it's been one of our best marketing investments. PodLeaF's strategy helped us connect with our ideal customers."
                name="Jennifer Wu"
                company="Artisan Collective"
              />
              
              <TestimonialCard
                quote="The podcast marketing campaign PodLeaF designed for us resulted in a 200% increase in downloads within just two months. Their understanding of the podcast landscape is unmatched."
                name="Thomas Edwards"
                company="Health Innovations Podcast"
              />
              
              <TestimonialCard
                quote="Our educational video series needed to simplify complex topics without talking down to our audience. PodLeaF Productions struck the perfect balance, and engagement with our content has never been higher."
                name="Maya Sanchez"
                company="Financial Education Institute"
              />
              
              <TestimonialCard
                quote="PodLeaF helped us launch our podcast with a bang! Their comprehensive launch strategy got us featured in Apple's New & Noteworthy section, which gave us incredible exposure right from the start."
                name="Chris Taylor"
                company="Industry Insiders"
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
                  "When we decided to add video podcasting to our content strategy, we knew we needed professional help. PodLeaF Productions guided us through every step of the process, from concept development to distribution. Their team's expertise in both audio and video production created a seamless, high-quality experience for our audience. The results have been remarkable - our viewership has grown consistently month over month, and we've secured partnerships with major brands in our industry. I cannot recommend PodLeaF Productions highly enough for anyone looking to elevate their content strategy."
                </blockquote>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <h4 className="font-bold text-lg">Emily Richardson</h4>
                  <p className="text-muted-foreground">Chief Content Officer, Innovate Media</p>
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
