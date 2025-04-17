
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/UI/SectionHeading';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

const CaseStudy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-podleaf-600 to-leaf-600 text-white py-12 md:py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Our Case Studies
              </h1>
              <p className="text-xl opacity-90">
                Discover how we've helped our clients achieve exceptional results with their content.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Case Study Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Tech Talk Weekly Podcast Launch"
              subtitle="How we transformed a tech company's brand through podcasting"
              centered={true}
            />

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 max-w-4xl mx-auto mt-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                    alt="Tech Talk Weekly Podcast"
                    className="rounded-lg mb-4"
                  />
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Client:</span>
                      <span>Innovation Labs</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Services:</span>
                      <span>Production, Launch, Marketing</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Duration:</span>
                      <span>3 months</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">The Challenge</h4>
                  <p className="text-gray-600 mb-4">
                    Innovation Labs wanted to establish authority in the tech industry through a podcast, but faced a crowded market and limited in-house production experience.
                  </p>
                  
                  <h4 className="text-xl font-semibold mb-3">Our Approach</h4>
                  <p className="text-gray-600 mb-4">
                    We developed a comprehensive strategy including professional production, a coordinated launch with 5 initial episodes, and targeted marketing to reach technology professionals.
                  </p>
                  
                  <h4 className="text-xl font-semibold mb-3">Results</h4>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li>10,000+ downloads in the first month</li>
                    <li>Featured in Apple Podcasts' "New & Noteworthy" section</li>
                    <li>75% listener retention rate after 10 episodes</li>
                    <li>Generated 15 qualified leads for the client's services</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Case Studies */}
        <section className="py-16 bg-white">
          <div className="container px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="More Success Stories"
              subtitle="See how we've helped other clients achieve their goals"
              centered={true}
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {/* Case Study 1 */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm border border-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                  alt="Health & Wellness Show" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Health & Wellness Show Launch</h3>
                  <p className="text-gray-600 mb-4">
                    How we helped Vitality Hub reach 50,000+ monthly listeners with their health podcast.
                  </p>
                  <Link to="/case-study">
                    <Button variant="outline" size="sm">
                      Read Case Study
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Case Study 2 */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm border border-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
                  alt="Company Culture Vlog" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Startup Culture Vlog Series</h3>
                  <p className="text-gray-600 mb-4">
                    Creating authentic video content that helped NextGen Startup triple their job applications.
                  </p>
                  <Link to="/case-study">
                    <Button variant="outline" size="sm">
                      Read Case Study
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Case Study 3 */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm border border-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1483058712412-4245e9b90334" 
                  alt="Digital Marketing Tutorials" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Educational Video Series</h3>
                  <p className="text-gray-600 mb-4">
                    How we helped Marketing Wizards Academy create professional tutorial videos that increased course sign-ups by 75%.
                  </p>
                  <Link to="/case-study">
                    <Button variant="outline" size="sm">
                      Read Case Study
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-podleaf-50">
          <div className="container px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Achieve Similar Results?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a strategy to help you reach your goals.
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

export default CaseStudy;
