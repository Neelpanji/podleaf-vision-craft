
import React from 'react';
import { Link } from 'react-router-dom';
import { Check, TrendingUp, BarChart, UsersRound, Share2, Target, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/UI/SectionHeading';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

const PodcastMarketing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-podleaf-600 to-leaf-600 text-white py-16 md:py-24">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Podcast Marketing Services
              </h1>
              <p className="text-xl opacity-90 mb-8">
                Strategic promotion to grow your audience, increase engagement, and maximize the impact of your podcast.
              </p>
              <Link to="/contact-us">
                <Button variant="secondary" size="lg">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading
                  title="Amplify Your Podcast's Reach"
                  subtitle="Creating great content is just the beginning. Our podcast marketing services help you get your show in front of the right audience and build a loyal listenership that grows over time."
                />
                <p className="text-gray-600 mb-6">
                  At PodLeaF Productions, we understand the unique challenges of podcast marketing in today's crowded audio landscape. Our data-driven strategies and industry expertise will help your show stand out and connect with listeners who will love your content.
                </p>
                <div className="flex flex-col space-y-3">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-leaf-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Customized marketing strategies tailored to your podcast niche</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-leaf-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Multi-channel promotion to reach listeners where they are</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-leaf-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Analytics and reporting to track growth and optimize strategy</span>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="Podcast Marketing"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Our Podcast Marketing Services"
              subtitle="Comprehensive marketing solutions to grow your podcast's audience and impact."
              centered={true}
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="h-12 w-12 rounded-lg bg-podleaf-100 flex items-center justify-center text-podleaf-600 mb-4">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Audience Growth Strategy</h3>
                <p className="text-gray-600">
                  Customized strategies to target and attract your ideal listeners, including platform optimization, content calendars, and growth roadmaps.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="h-12 w-12 rounded-lg bg-podleaf-100 flex items-center justify-center text-podleaf-600 mb-4">
                  <Share2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Social Media Promotion</h3>
                <p className="text-gray-600">
                  Strategic content creation and management across social platforms to build community and drive listeners to your podcast.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="h-12 w-12 rounded-lg bg-podleaf-100 flex items-center justify-center text-podleaf-600 mb-4">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Targeted Advertising</h3>
                <p className="text-gray-600">
                  Paid promotion campaigns on podcast platforms, social media, and search engines to reach new listeners in your target audience.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="h-12 w-12 rounded-lg bg-podleaf-100 flex items-center justify-center text-podleaf-600 mb-4">
                  <UsersRound className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Cross-Promotion & Networking</h3>
                <p className="text-gray-600">
                  Strategic partnerships with complementary podcasts and brands to tap into established audiences and build credibility.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="h-12 w-12 rounded-lg bg-podleaf-100 flex items-center justify-center text-podleaf-600 mb-4">
                  <BarChart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Performance Analytics</h3>
                <p className="text-gray-600">
                  Comprehensive tracking and analysis of listener metrics, engagement, and growth to continuously refine your marketing strategy.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="h-12 w-12 rounded-lg bg-podleaf-100 flex items-center justify-center text-podleaf-600 mb-4">
                  <Layers className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Content Repurposing</h3>
                <p className="text-gray-600">
                  Transform your podcast episodes into blogs, videos, social posts, and more to extend reach and drive new listeners to your show.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Our Marketing Process"
              subtitle="A systematic approach to growing your podcast audience"
              centered={true}
            />

            <div className="max-w-3xl mx-auto mt-12">
              <div className="space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="h-10 w-10 rounded-full bg-podleaf-600 text-white flex items-center justify-center font-bold text-lg">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Strategy Development</h3>
                    <p className="text-gray-600">
                      We begin with a deep dive into your podcast, target audience, and goals to create a customized marketing strategy aligned with your vision.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="h-10 w-10 rounded-full bg-podleaf-600 text-white flex items-center justify-center font-bold text-lg">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Platform Optimization</h3>
                    <p className="text-gray-600">
                      We optimize your presence across all podcast directories and platforms to maximize discoverability and audience reach.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="h-10 w-10 rounded-full bg-podleaf-600 text-white flex items-center justify-center font-bold text-lg">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Content Promotion</h3>
                    <p className="text-gray-600">
                      Strategic promotion of your episodes across multiple channels to drive listenership and engagement.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="h-10 w-10 rounded-full bg-podleaf-600 text-white flex items-center justify-center font-bold text-lg">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Audience Growth</h3>
                    <p className="text-gray-600">
                      Implementation of targeted campaigns to attract new listeners and convert them into loyal subscribers.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="h-10 w-10 rounded-full bg-podleaf-600 text-white flex items-center justify-center font-bold text-lg">
                      5
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Analysis & Optimization</h3>
                    <p className="text-gray-600">
                      Continuous tracking and refinement of our approach based on performance data and listener feedback.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-podleaf-50">
          <div className="container px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Expand Your Podcast Audience?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss your marketing needs and create a strategy to grow your podcast's reach and impact.
            </p>
            <Link to="/contact-us">
              <Button size="lg" className="text-lg px-8">
                Contact Us Now
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PodcastMarketing;
