
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/UI/SectionHeading';
import PortfolioCard from '@/components/UI/PortfolioCard';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-podleaf-600 to-leaf-600 text-white py-12 md:py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Our Portfolio
              </h1>
              <p className="text-xl opacity-90">
                Explore our work and see how we've helped clients achieve their content goals.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList>
                  <TabsTrigger value="all">All Projects</TabsTrigger>
                  <TabsTrigger value="podcast">Podcast Projects</TabsTrigger>
                  <TabsTrigger value="video">Video Projects</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Podcast Projects */}
                  <PortfolioCard
                    title="Business Leaders Podcast"
                    clientName="Global Finance Corp"
                    description="A weekly interview podcast featuring conversations with leading CEOs and entrepreneurs."
                    imageUrl="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                    tags={["Podcast Production", "Podcast Marketing"]}
                  />
                  <PortfolioCard
                    title="Health & Wellness Show"
                    clientName="Vitality Hub"
                    description="A daily podcast offering health tips, expert interviews, and wellness advice."
                    imageUrl="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
                    tags={["Podcast Launch", "Podcast Production"]}
                  />
                  <PortfolioCard
                    title="Tech Talk Weekly"
                    clientName="Innovation Labs"
                    description="A technology news and analysis podcast covering the latest industry developments."
                    imageUrl="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                    tags={["Podcast Marketing", "Podcast Production"]}
                  />

                  {/* Video Projects */}
                  <PortfolioCard
                    title="Product Demo Series"
                    clientName="TechSolutions Inc."
                    description="A series of product demonstration videos showcasing software features and benefits."
                    imageUrl="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                    tags={["Commercial Video", "Educational Video"]}
                  />
                  <PortfolioCard
                    title="Company Culture Vlog"
                    clientName="NextGen Startup"
                    description="A monthly vlog series highlighting company culture, team activities, and behind-the-scenes insights."
                    imageUrl="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                    tags={["Vlog Video"]}
                  />
                  <PortfolioCard
                    title="Digital Marketing Tutorials"
                    clientName="Marketing Wizards Academy"
                    description="A comprehensive series of educational videos explaining digital marketing strategies and techniques."
                    imageUrl="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                    tags={["Educational Video"]}
                  />
                </div>
              </TabsContent>

              <TabsContent value="podcast">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <PortfolioCard
                    title="Business Leaders Podcast"
                    clientName="Global Finance Corp"
                    description="A weekly interview podcast featuring conversations with leading CEOs and entrepreneurs."
                    imageUrl="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                    tags={["Podcast Production", "Podcast Marketing"]}
                  />
                  <PortfolioCard
                    title="Health & Wellness Show"
                    clientName="Vitality Hub"
                    description="A daily podcast offering health tips, expert interviews, and wellness advice."
                    imageUrl="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
                    tags={["Podcast Launch", "Podcast Production"]}
                  />
                  <PortfolioCard
                    title="Tech Talk Weekly"
                    clientName="Innovation Labs"
                    description="A technology news and analysis podcast covering the latest industry developments."
                    imageUrl="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                    tags={["Podcast Marketing", "Podcast Production"]}
                  />
                </div>
              </TabsContent>

              <TabsContent value="video">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <PortfolioCard
                    title="Product Demo Series"
                    clientName="TechSolutions Inc."
                    description="A series of product demonstration videos showcasing software features and benefits."
                    imageUrl="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                    tags={["Commercial Video", "Educational Video"]}
                  />
                  <PortfolioCard
                    title="Company Culture Vlog"
                    clientName="NextGen Startup"
                    description="A monthly vlog series highlighting company culture, team activities, and behind-the-scenes insights."
                    imageUrl="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                    tags={["Vlog Video"]}
                  />
                  <PortfolioCard
                    title="Digital Marketing Tutorials"
                    clientName="Marketing Wizards Academy"
                    description="A comprehensive series of educational videos explaining digital marketing strategies and techniques."
                    imageUrl="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                    tags={["Educational Video"]}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Featured Case Study"
              subtitle="How we helped a client achieve exceptional results"
              centered={true}
            />

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 max-w-4xl mx-auto mt-12">
              <h3 className="text-2xl font-bold mb-4">Tech Talk Weekly Podcast Launch</h3>
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

export default Portfolio;
