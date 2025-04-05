
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MicrophoneStage, Video, Headphones, Target, Rocket, Users } from 'lucide-react';
import SectionHeading from '@/components/UI/SectionHeading';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-podleaf-600 to-leaf-600 text-white py-12 md:py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                About PodLeaF Productions
              </h1>
              <p className="text-xl opacity-90">
                Your trusted partner for podcast and video production excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading
                  title="Our Story"
                  subtitle="How PodLeaF Productions became a leader in podcast and video content production."
                />
                <p className="text-gray-600 mb-6">
                  Founded in 2020, PodLeaF Productions began with a simple mission: to help businesses and individuals harness the power of podcasting and video content to connect with audiences in meaningful ways.
                </p>
                <p className="text-gray-600 mb-6">
                  Our founder, with over 15 years of experience in audio and video production, recognized that many businesses struggled to create professional content that aligned with their brand and business objectives. PodLeaF was established to bridge this gap, providing end-to-end production and marketing services that deliver results.
                </p>
                <p className="text-gray-600">
                  Today, we're proud to have helped numerous clients launch successful podcasts and create impactful video content that drives engagement and growth. Our team has expanded to include specialists in audio engineering, video production, content strategy, and digital marketing, allowing us to offer comprehensive solutions for all your content needs.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
                  alt="PodLeaF Productions Team"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Our Mission & Values"
              subtitle="What drives us and shapes our approach to every project."
              centered={true}
            />

            <div className="mt-12">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-12">
                <h3 className="text-2xl font-bold text-center mb-6">Our Mission</h3>
                <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
                  To empower businesses and individuals to share their stories through exceptional podcast and video content, helping them connect with audiences, build authority, and achieve their goals.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-podleaf-700">Excellence</h3>
                  <p className="text-gray-600">
                    We are committed to delivering the highest quality in every aspect of our work, from production to strategy to client service.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-podleaf-700">Innovation</h3>
                  <p className="text-gray-600">
                    We stay at the forefront of industry trends and technologies to provide cutting-edge solutions for our clients.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-podleaf-700">Integrity</h3>
                  <p className="text-gray-600">
                    We operate with honesty, transparency, and ethical standards in all our relationships and business practices.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-podleaf-700">Collaboration</h3>
                  <p className="text-gray-600">
                    We work closely with our clients, valuing their input and building partnerships based on mutual respect and shared goals.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-podleaf-700">Creativity</h3>
                  <p className="text-gray-600">
                    We bring fresh perspectives and creative thinking to every project, helping our clients stand out in crowded markets.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-podleaf-700">Results-Focused</h3>
                  <p className="text-gray-600">
                    We measure our success by the outcomes we achieve for our clients, focusing on strategies that deliver tangible results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Our Team"
              subtitle="Meet the experts behind PodLeaF Productions."
              centered={true}
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Photo Placeholder</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-1">Raj Patel</h3>
                <p className="text-podleaf-600 mb-3">Founder & CEO</p>
                <p className="text-gray-600 text-sm">
                  15+ years experience in audio and video production. Former podcast producer for major media companies.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Photo Placeholder</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-1">Aisha Khan</h3>
                <p className="text-podleaf-600 mb-3">Audio Director</p>
                <p className="text-gray-600 text-sm">
                  Award-winning sound engineer with expertise in podcast production and audio mixing for various formats.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Photo Placeholder</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-1">Marcus Chen</h3>
                <p className="text-podleaf-600 mb-3">Video Production Lead</p>
                <p className="text-gray-600 text-sm">
                  10+ years in commercial and educational video production with a background in cinematography.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Photo Placeholder</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-1">Sophia Rodriguez</h3>
                <p className="text-podleaf-600 mb-3">Marketing Strategist</p>
                <p className="text-gray-600 text-sm">
                  Digital marketing specialist with focus on content distribution and audience growth strategies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Why Choose PodLeaF Productions"
              subtitle="What sets us apart in podcast and video production"
              centered={true}
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="h-12 w-12 rounded-lg bg-podleaf-100 flex items-center justify-center text-podleaf-600 mb-4">
                  <MicrophoneStage className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Specialized Expertise</h3>
                <p className="text-gray-600">
                  Unlike generalist agencies, we focus exclusively on podcast and video content, giving us deep expertise in these specific mediums.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="h-12 w-12 rounded-lg bg-podleaf-100 flex items-center justify-center text-podleaf-600 mb-4">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Results-Driven Approach</h3>
                <p className="text-gray-600">
                  We focus on creating content that not only looks and sounds great but also delivers measurable results aligned with your business goals.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="h-12 w-12 rounded-lg bg-podleaf-100 flex items-center justify-center text-podleaf-600 mb-4">
                  <Headphones className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">End-to-End Service</h3>
                <p className="text-gray-600">
                  From initial concept to production to distribution and marketing, we handle every aspect of your podcast and video content.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="h-12 w-12 rounded-lg bg-podleaf-100 flex items-center justify-center text-podleaf-600 mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Dedicated Team</h3>
                <p className="text-gray-600">
                  You'll work with a consistent team of specialists who understand your brand, goals, and preferences.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="h-12 w-12 rounded-lg bg-podleaf-100 flex items-center justify-center text-podleaf-600 mb-4">
                  <Rocket className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Proven Track Record</h3>
                <p className="text-gray-600">
                  Our portfolio demonstrates our ability to create successful podcast and video content across various industries and formats.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="h-12 w-12 rounded-lg bg-podleaf-100 flex items-center justify-center text-podleaf-600 mb-4">
                  <Video className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality Equipment</h3>
                <p className="text-gray-600">
                  We use professional-grade equipment and software to ensure the highest production quality for your content.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Our Location"
              subtitle="Based in Motikhavdi, Gujarat, India, serving clients worldwide."
              centered={true}
            />

            <div className="max-w-4xl mx-auto mt-12">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-6">
                <div className="h-full w-full flex items-center justify-center">
                  <p className="text-gray-500">Map placeholder - Client will provide embed code</p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-gray-600 mb-4">
                  While we're headquartered in Motikhavdi, Gujarat, India, our services are available worldwide through our remote production capabilities.
                </p>
                <p className="text-gray-600">
                  We work with clients across India and internationally, using technology to deliver the same high-quality results regardless of location.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-podleaf-50">
          <div className="container px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you create podcast and video content that achieves your goals.
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

export default AboutUs;
