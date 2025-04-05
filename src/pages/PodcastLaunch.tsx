
import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Radio, Rocket, ArrowUpRight, BarChart, Calendar, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/UI/SectionHeading';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

const PodcastLaunch = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-podleaf-600 to-leaf-600 text-white py-16 md:py-24">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Podcast Launch Services
              </h1>
              <p className="text-xl opacity-90 mb-8">
                Start your podcast journey with a strategic and impactful launch that builds momentum from day one.
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
                  title="Launch Your Podcast the Right Way"
                  subtitle="Make a splash with a strategic podcast launch that builds momentum and attracts listeners from day one."
                />
                <p className="text-gray-600 mb-6">
                  The way you launch your podcast can determine its long-term success. At PodLeaF Productions, we handle every aspect of your podcast launch to ensure you start strong and build momentum from the beginning.
                </p>
                <div className="flex flex-col space-y-3">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-leaf-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Strategic planning for maximum impact</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-leaf-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Multi-platform distribution with optimized profiles</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-leaf-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Launch promotion to build early momentum</span>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                  alt="Podcast Launch"
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
              title="Our Launch Services"
              subtitle="Comprehensive launch support to set your podcast up for success."
              centered={true}
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="h-12 w-12 rounded-lg bg-podleaf-100 flex items-center justify-center text-podleaf-600 mb-4">
                  <Radio className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Launch Strategy</h3>
                <p className="text-gray-600">
                  Custom launch plan tailored to your podcast goals, audience, and timeline to maximize initial impact.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="h-12 w-12 rounded-lg bg-podleaf-100 flex items-center justify-center text-podleaf-600 mb-4">
                  <ArrowUpRight className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Platform Setup & Optimization</h3>
                <p className="text-gray-600">
                  Professional setup of your podcast on all major platforms with optimized descriptions, categories, and artwork.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="h-12 w-12 rounded-lg bg-podleaf-100 flex items-center justify-center text-podleaf-600 mb-4">
                  <Rocket className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Launch Promotion</h3>
                <p className="text-gray-600">
                  Strategic promotional campaigns to build awareness and drive listeners to your podcast on launch day.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="h-12 w-12 rounded-lg bg-podleaf-100 flex items-center justify-center text-podleaf-600 mb-4">
                  <Calendar className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Launch Schedule Planning</h3>
                <p className="text-gray-600">
                  Strategic planning of your episode release schedule to maximize audience growth and retention.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="h-12 w-12 rounded-lg bg-podleaf-100 flex items-center justify-center text-podleaf-600 mb-4">
                  <ThumbsUp className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Reviews & Ratings Strategy</h3>
                <p className="text-gray-600">
                  Tactics to gather positive reviews and ratings during your crucial launch period to boost visibility.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="h-12 w-12 rounded-lg bg-podleaf-100 flex items-center justify-center text-podleaf-600 mb-4">
                  <BarChart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Launch Analytics</h3>
                <p className="text-gray-600">
                  Track and analyze your launch performance to refine strategies and maintain growth momentum.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Launch Process Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Our Launch Process"
              subtitle="A proven approach to successful podcast launches"
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
                    <h3 className="text-xl font-semibold mb-2">Launch Strategy Development</h3>
                    <p className="text-gray-600">
                      We create a customized launch plan based on your podcast goals, target audience, and available resources.
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
                    <h3 className="text-xl font-semibold mb-2">Pre-Launch Content Creation</h3>
                    <p className="text-gray-600">
                      We prepare your initial episodes, promotional content, and assets needed for a successful launch.
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
                    <h3 className="text-xl font-semibold mb-2">Platform Setup & Distribution</h3>
                    <p className="text-gray-600">
                      We configure your hosting platform and distribute your podcast to all major directories with optimized profiles.
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
                    <h3 className="text-xl font-semibold mb-2">Launch Execution</h3>
                    <p className="text-gray-600">
                      Coordinated release of episodes and promotion across multiple channels to maximize initial impact.
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
                    <h3 className="text-xl font-semibold mb-2">Post-Launch Growth Strategy</h3>
                    <p className="text-gray-600">
                      We analyze launch performance and transition to ongoing growth strategies to maintain momentum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Launch Success Metrics"
              subtitle="How we measure the success of your podcast launch"
              centered={true}
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="text-4xl font-bold text-podleaf-600 mb-2">1000+</div>
                <p className="text-gray-700 font-medium">Initial Downloads</p>
                <p className="text-sm text-gray-500 mt-2">Average downloads achieved within the first week for our clients' launches</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="text-4xl font-bold text-podleaf-600 mb-2">70%</div>
                <p className="text-gray-700 font-medium">Listener Retention</p>
                <p className="text-sm text-gray-500 mt-2">Average retention rate from episode to episode following launch</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="text-4xl font-bold text-podleaf-600 mb-2">85%</div>
                <p className="text-gray-700 font-medium">Chart Appearances</p>
                <p className="text-sm text-gray-500 mt-2">Percentage of our podcast launches that appear in category charts</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="text-4xl font-bold text-podleaf-600 mb-2">4.7★</div>
                <p className="text-gray-700 font-medium">Average Rating</p>
                <p className="text-sm text-gray-500 mt-2">Average rating our podcast launches receive in the first month</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-podleaf-50">
          <div className="container px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Launch Your Podcast the Right Way?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Don't leave your podcast launch to chance. Let's work together to create a strategic launch that sets you up for long-term success.
            </p>
            <Link to="/contact-us">
              <Button size="lg" className="text-lg px-8">
                Schedule a Launch Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PodcastLaunch;
