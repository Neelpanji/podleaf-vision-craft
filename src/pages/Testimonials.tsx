
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
        <section className="bg-gradient-to-r from-podleaf-600 to-leaf-600 text-white py-12 md:py-16">
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
        <section className="py-16 bg-white">
          <div className="container px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="What Our Clients Say"
              subtitle="Read about the experiences of businesses and individuals who have worked with PodLeaF Productions."
              centered={true}
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <TestimonialCard
                quote="Working with PodLeaF Productions transformed our podcast strategy. Their marketing expertise helped us grow our audience by 300% in just three months!"
                name="Sarah Johnson"
                company="Startup Insider Podcast"
              />
              
              <TestimonialCard
                quote="The production quality they delivered exceeded our expectations. Our podcast now sounds as professional as the top shows in our industry."
                name="Michael Chen"
                company="Tech Forward"
              />
              
              <TestimonialCard
                quote="Their launch strategy was brilliant. We hit the New & Noteworthy section and gained thousands of subscribers in our first week."
                name="Priya Patel"
                company="Business Growth Show"
              />
              
              <TestimonialCard
                quote="The educational videos they produced for our company simplified complex topics and generated significant engagement from our target audience."
                name="David Rodriguez"
                company="Finance Education Institute"
              />
              
              <TestimonialCard
                quote="I was impressed by their attention to detail and commitment to understanding our brand. The commercial videos they created perfectly captured our company's value proposition."
                name="Jessica Lee"
                company="InnovateNow"
              />
              
              <TestimonialCard
                quote="PodLeaF helped us develop a content strategy that aligned with our business goals. The results speak for themselves - our podcast has become a key lead generation channel."
                name="Rajiv Mehta"
                company="B2B Solutions Podcast"
              />
              
              <TestimonialCard
                quote="Their team made the production process easy and stress-free. As someone with no prior podcast experience, I appreciated their guidance at every step."
                name="Amanda Torres"
                company="Wellness Journey Podcast"
              />
              
              <TestimonialCard
                quote="The video content PodLeaF created for our website has significantly increased visitor engagement and time on site. Our conversion rate has improved by 25%."
                name="Thomas Wilson"
                company="E-commerce Solutions"
              />
              
              <TestimonialCard
                quote="From concept to execution, the team at PodLeaF exceeded our expectations. They're not just service providers - they're strategic partners in our content marketing efforts."
                name="Linda Kawasaki"
                company="Marketing Innovators"
              />
            </div>
          </div>
        </section>

        {/* Featured Testimonial Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-md border border-gray-100">
              <div className="mb-8 text-center">
                <svg
                  className="h-12 w-12 text-podleaf-400 mx-auto mb-4"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <blockquote className="text-xl md:text-2xl font-medium italic text-gray-800 mb-6">
                  "Working with PodLeaF Productions has been a game-changer for our content strategy. Their expertise in both podcast and video production helped us create a cohesive content ecosystem that has significantly expanded our reach and engagement. Within six months, our podcast became a top 50 show in our category, and our video content has generated over 500,000 views across platforms. I can't recommend them highly enough."
                </blockquote>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <h4 className="font-bold text-lg">Robert Chang</h4>
                  <p className="text-gray-600">Marketing Director, Global Tech Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-podleaf-50">
          <div className="container px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Join Our Success Stories?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's create exceptional podcast and video content that drives results for your business.
            </p>
            <Link to="/contact-us">
              <Button size="lg" className="text-lg px-8">
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
