
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/UI/SectionHeading';
import ContactForm from '@/components/UI/ContactForm';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
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

        {/* Contact Form Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-5 gap-12">
              <div className="md:col-span-2">
                <SectionHeading
                  title="Get in Touch"
                  subtitle="We're here to answer your questions and discuss your project needs."
                />

                <div className="space-y-6 mt-8">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-podleaf-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Our Location</h3>
                      <p className="text-gray-600">Motikhavdi, Gujarat, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-podleaf-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <a href="mailto:contact@podleafproductions.com" className="text-podleaf-600 hover:text-podleaf-700 transition-colors">
                        contact@podleafproductions.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-podleaf-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <a href="tel:+911234567890" className="text-podleaf-600 hover:text-podleaf-700 transition-colors">
                        +91 12345 67890
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-lg font-semibold mb-3">Our Business Hours</h3>
                  <table className="w-full text-left">
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 font-medium">Monday - Friday</td>
                        <td className="py-2">9:00 AM - 6:00 PM IST</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 font-medium">Saturday</td>
                        <td className="py-2">10:00 AM - 2:00 PM IST</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium">Sunday</td>
                        <td className="py-2">Closed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="md:col-span-3">
                <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Frequently Asked Questions"
              subtitle="Quick answers to common questions about our services."
              centered={true}
            />

            <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-2">How soon can you start on my project?</h3>
                <p className="text-gray-600">
                  We typically begin new projects within 1-2 weeks of finalizing project details and receiving the initial payment. For urgent projects, we may be able to accommodate faster timelines.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-2">Do you work with clients outside of India?</h3>
                <p className="text-gray-600">
                  Yes! We work with clients worldwide. Our remote production capabilities allow us to deliver high-quality services regardless of your location.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-2">How much does a podcast or video project cost?</h3>
                <p className="text-gray-600">
                  Pricing varies based on project requirements, complexity, and scope. We provide customized quotes after understanding your specific needs. Contact us for a free consultation and estimate.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-2">Do I need to have any equipment to get started?</h3>
                <p className="text-gray-600">
                  No, we provide all necessary equipment for podcast and video production. For remote recordings, we can guide you on simple setup options or send portable recording kits if needed.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-2">How long does it take to produce a podcast or video?</h3>
                <p className="text-gray-600">
                  Production timelines vary by project complexity. Typically, podcast episodes take 1-2 weeks from recording to publication, while video projects may take 2-4 weeks depending on length and complexity.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-2">Can you help with ongoing production or just one-time projects?</h3>
                <p className="text-gray-600">
                  We offer both one-time project services and ongoing production support. Many clients choose our ongoing packages for regular podcast episodes or video content series.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Fill out the contact form above or reach out directly. We're excited to learn about your project!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="mailto:contact@podleafproductions.com">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Email Us Directly
                </Button>
              </a>
              <a href="tel:+911234567890">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Call Us Now
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
