import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/UI/SectionHeading';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-podleaf-600 to-leaf-600 text-white py-12 md:py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Contact Us
              </h1>
              <p className="text-xl opacity-90">
                Let's discuss how we can help you with your podcast and video content needs.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-black">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-5 gap-12">
              <div className="md:col-span-2">
                <SectionHeading
                  title="Get in Touch"
                  subtitle="We're here to answer your questions and discuss your project needs."
                />

                <div className="space-y-6 mt-8">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-podleaf-600 mr-4 flex-shrink-0 mt-0.5" />
                    <div className="-mt-2.5">
                      <h3 className="font-medium mb-1 text-white">Email</h3>
                      <a href="mailto:neel@podleafproductions.com" className="text-podleaf-600 hover:text-podleaf-700 transition-colors">
                        neel@podleafproductions.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-3">
                <div className="bg-gray-900 p-8 rounded-lg shadow-sm border border-gray-800">
                  <h2 className="text-2xl font-bold mb-6 text-white">Schedule a Meeting</h2>
                  <div className="w-full h-96">
                    <iframe
                      src="https://calendar.google.com/calendar/embed?src=neel%40podleafproductions.com&ctz=Asia%2FKolkata"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      className="rounded-lg"
                      title="Schedule a meeting with PodLeaF Productions"
                    ></iframe>
                  </div>
                  <div className="mt-4 text-center">
                    <a 
                      href="https://calendar.app.google/sPiJV7Sa8tBDrSLA8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-podleaf-600 hover:text-podleaf-700 transition-colors underline"
                    >
                      Click here to schedule a meeting directly
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-900">
          <div className="container px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Frequently Asked Questions"
              subtitle="Quick answers to common questions about our services."
              centered={true}
            />

            <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
              <div className="bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-700">
                <h3 className="text-lg font-semibold mb-2 text-white">How soon can you start on my project?</h3>
                <p className="text-gray-300">
                  We typically begin new projects within 1-2 weeks of finalizing project details and receiving the initial payment. For urgent projects, we may be able to accommodate faster timelines.
                </p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-700">
                <h3 className="text-lg font-semibold mb-2 text-white">Do you work with clients outside of India?</h3>
                <p className="text-gray-300">
                  Yes! We work with clients worldwide. Our remote production capabilities allow us to deliver high-quality services regardless of your location.
                </p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-700">
                <h3 className="text-lg font-semibold mb-2 text-white">How much does a podcast or video project cost?</h3>
                <p className="text-gray-300">
                  Pricing varies based on project requirements, complexity, and scope. We provide customized quotes after understanding your specific needs. Contact us for a free consultation and estimate.
                </p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-700">
                <h3 className="text-lg font-semibold mb-2 text-white">Do I need to have any equipment to get started?</h3>
                <p className="text-gray-300">
                  No, we provide all necessary equipment for podcast and video production. For remote recordings, we can guide you on simple setup options or send portable recording kits if needed.
                </p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-700">
                <h3 className="text-lg font-semibold mb-2 text-white">How long does it take to produce a podcast or video?</h3>
                <p className="text-gray-300">
                  Production timelines vary by project complexity. Typically, podcast episodes take 1-2 weeks from recording to publication, while video projects may take 2-4 weeks depending on length and complexity.
                </p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-700">
                <h3 className="text-lg font-semibold mb-2 text-white">Can you help with ongoing production or just one-time projects?</h3>
                <p className="text-gray-300">
                  We offer both one-time project services and ongoing production support. Many clients choose our ongoing packages for regular podcast episodes or video content series.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-black">
          <div className="container px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
              Schedule a meeting above or reach out directly. We're excited to learn about your project!
            </p>
            <div className="flex justify-center">
              <a href="mailto:neel@podleafproductions.com">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Email Us Directly
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
