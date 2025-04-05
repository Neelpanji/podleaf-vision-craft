
import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Video, PlayCircle, BookOpen, Film, Camera, Users, Tv } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/UI/SectionHeading';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

const VideoServices = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-podleaf-600 to-leaf-600 text-white py-16 md:py-24">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Professional Video Production Services
              </h1>
              <p className="text-xl opacity-90 mb-8">
                Compelling video content that engages your audience and elevates your brand.
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
              <div className="order-2 md:order-1">
                <SectionHeading
                  title="Powerful Video Content for Your Brand"
                  subtitle="From vlogs and educational videos to commercial content, we create videos that drive engagement and results."
                />
                <p className="text-gray-600 mb-6">
                  In today's digital landscape, video content is essential for connecting with your audience. At PodLeaF Productions, we combine creativity with strategic thinking to produce videos that not only look great but also achieve your business objectives.
                </p>
                <div className="flex flex-col space-y-3">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-leaf-600 mt-1 mr-2 flex-shrink-0" />
                    <span>High-quality production that reflects your brand</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-leaf-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Strategic content planning aligned with your goals</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-leaf-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Engaging storytelling that resonates with your audience</span>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
                  alt="Video Production"
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
              title="Our Video Services"
              subtitle="Professional video production to elevate your brand and engage your audience."
              centered={true}
            />

            <div className="mt-12">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-12">
                <div className="grid md:grid-cols-3 gap-8 items-start">
                  <div>
                    <div className="h-16 w-16 rounded-lg bg-podleaf-100 flex items-center justify-center text-podleaf-600 mb-4">
                      <PlayCircle className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">Vlog Videos</h3>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-gray-600 mb-6">
                      Connect authentically with your audience through professionally produced vlog content. Our vlog production services help you create consistent, engaging content that builds a loyal following while maintaining your authentic voice.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-leaf-600 mt-1 mr-2 flex-shrink-0" />
                        <span>Personal brand development</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-leaf-600 mt-1 mr-2 flex-shrink-0" />
                        <span>Content planning and scripting</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-leaf-600 mt-1 mr-2 flex-shrink-0" />
                        <span>Professional filming and lighting</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-leaf-600 mt-1 mr-2 flex-shrink-0" />
                        <span>Engaging editing and graphics</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-12">
                <div className="grid md:grid-cols-3 gap-8 items-start">
                  <div>
                    <div className="h-16 w-16 rounded-lg bg-podleaf-100 flex items-center justify-center text-podleaf-600 mb-4">
                      <BookOpen className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">Educational Videos</h3>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-gray-600 mb-6">
                      Share your expertise and establish authority in your field with professional educational videos. We create clear, engaging, and informative content that simplifies complex topics and positions you as a thought leader.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-leaf-600 mt-1 mr-2 flex-shrink-0" />
                        <span>Instructional content development</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-leaf-600 mt-1 mr-2 flex-shrink-0" />
                        <span>Visual aids and animations</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-leaf-600 mt-1 mr-2 flex-shrink-0" />
                        <span>Clear narration and presentation</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-leaf-600 mt-1 mr-2 flex-shrink-0" />
                        <span>Audience-focused explanations</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <div className="grid md:grid-cols-3 gap-8 items-start">
                  <div>
                    <div className="h-16 w-16 rounded-lg bg-podleaf-100 flex items-center justify-center text-podleaf-600 mb-4">
                      <Film className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">Commercial Website Videos</h3>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-gray-600 mb-6">
                      Boost conversions and showcase your products or services with professional commercial videos. Our commercial production creates compelling content that highlights your unique value proposition and drives audience action.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-leaf-600 mt-1 mr-2 flex-shrink-0" />
                        <span>Brand-aligned storytelling</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-leaf-600 mt-1 mr-2 flex-shrink-0" />
                        <span>Product demonstrations</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-leaf-600 mt-1 mr-2 flex-shrink-0" />
                        <span>Persuasive messaging</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-leaf-600 mt-1 mr-2 flex-shrink-0" />
                        <span>Call-to-action optimization</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Production Process Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Our Video Production Process"
              subtitle="A streamlined approach to creating high-quality video content"
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
                    <h3 className="text-xl font-semibold mb-2">Discovery & Strategy</h3>
                    <p className="text-gray-600">
                      We learn about your goals, audience, and brand to develop a strategic approach for your video content.
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
                    <h3 className="text-xl font-semibold mb-2">Pre-Production Planning</h3>
                    <p className="text-gray-600">
                      Detailed planning including scripting, storyboarding, location scouting, and scheduling to ensure smooth production.
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
                    <h3 className="text-xl font-semibold mb-2">Production & Filming</h3>
                    <p className="text-gray-600">
                      Professional filming with high-quality equipment and experienced crew to capture stunning footage.
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
                    <h3 className="text-xl font-semibold mb-2">Post-Production</h3>
                    <p className="text-gray-600">
                      Expert editing, color grading, sound design, and motion graphics to create a polished final product.
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
                    <h3 className="text-xl font-semibold mb-2">Delivery & Distribution</h3>
                    <p className="text-gray-600">
                      Finalization of your video in optimal formats for different platforms and guidance on effective distribution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Showcase Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Our Video Portfolio"
              subtitle="Examples of our video production work"
              centered={true}
            />

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Tech Company Product Demo</h3>
                <p className="text-gray-600 mb-4">
                  Commercial website video showcasing product features and benefits.
                </p>
                <div className="aspect-video bg-gray-100 rounded flex items-center justify-center mb-4">
                  <p className="text-sm text-gray-500 italic">Video player placeholder - Client will provide embed code</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-podleaf-100 text-podleaf-800 px-2 py-1 rounded-md text-xs font-medium">Commercial</span>
                  <span className="bg-podleaf-100 text-podleaf-800 px-2 py-1 rounded-md text-xs font-medium">Product Demo</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Educational Series on Digital Marketing</h3>
                <p className="text-gray-600 mb-4">
                  Series of instructional videos explaining digital marketing concepts.
                </p>
                <div className="aspect-video bg-gray-100 rounded flex items-center justify-center mb-4">
                  <p className="text-sm text-gray-500 italic">Video player placeholder - Client will provide embed code</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-podleaf-100 text-podleaf-800 px-2 py-1 rounded-md text-xs font-medium">Educational</span>
                  <span className="bg-podleaf-100 text-podleaf-800 px-2 py-1 rounded-md text-xs font-medium">Series</span>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link to="/portfolio">
                <Button variant="outline">
                  View Full Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-podleaf-50">
          <div className="container px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Tell Us About Your Video Project</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Ready to create engaging video content for your business? Contact us to discuss your project and get a free quote.
            </p>
            <Link to="/contact-us">
              <Button size="lg" className="text-lg px-8">
                Get a Free Quote
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default VideoServices;
