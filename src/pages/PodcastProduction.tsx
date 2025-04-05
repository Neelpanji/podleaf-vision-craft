
import React from 'react';
import { Link } from 'react-router-dom';
import { Check, MicrophoneStage, Music, Ear, Radio, Settings, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/UI/SectionHeading';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

const PodcastProduction = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-podleaf-600 to-leaf-600 text-white py-16 md:py-24">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Podcast Production Services
              </h1>
              <p className="text-xl opacity-90 mb-8">
                Professional audio production to make your podcast sound amazing and keep listeners engaged.
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
              <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
                  alt="Podcast Production"
                  className="w-full h-auto"
                />
              </div>
              <div className="order-1 md:order-2">
                <SectionHeading
                  title="Professional Podcast Production"
                  subtitle="High-quality audio that elevates your content and keeps listeners coming back."
                />
                <p className="text-gray-600 mb-6">
                  In the competitive world of podcasting, production quality matters. At PodLeaF Productions, we combine technical expertise with creative skill to produce podcasts that sound professional, engaging, and distinctive.
                </p>
                <div className="flex flex-col space-y-3">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-leaf-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Crystal clear audio quality that engages listeners</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-leaf-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Professional editing that respects your authentic voice</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-leaf-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Custom music and sound design to enhance your brand</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Our Production Services"
              subtitle="End-to-end audio solutions to make your podcast sound its best."
              centered={true}
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="h-12 w-12 rounded-lg bg-podleaf-100 flex items-center justify-center text-podleaf-600 mb-4">
                  <Radio className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Recording Services</h3>
                <p className="text-gray-600">
                  Professional recording in our studio or remote recording guidance to capture high-quality audio from anywhere.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="h-12 w-12 rounded-lg bg-podleaf-100 flex items-center justify-center text-podleaf-600 mb-4">
                  <Settings className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Audio Editing</h3>
                <p className="text-gray-600">
                  Precise editing to remove mistakes, umms, and awkward pauses while preserving the natural flow of conversation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="h-12 w-12 rounded-lg bg-podleaf-100 flex items-center justify-center text-podleaf-600 mb-4">
                  <MicrophoneStage className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Sound Mixing</h3>
                <p className="text-gray-600">
                  Professional mixing to balance levels, enhance vocal clarity, and create a consistent sound across episodes.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="h-12 w-12 rounded-lg bg-podleaf-100 flex items-center justify-center text-podleaf-600 mb-4">
                  <Music className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Music & Sound Design</h3>
                <p className="text-gray-600">
                  Custom intros, outros, and sound elements that enhance your content and strengthen your brand identity.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="h-12 w-12 rounded-lg bg-podleaf-100 flex items-center justify-center text-podleaf-600 mb-4">
                  <Ear className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Audio Mastering</h3>
                <p className="text-gray-600">
                  Final polishing to ensure your podcast sounds professional and meets industry standards across all platforms.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="h-12 w-12 rounded-lg bg-podleaf-100 flex items-center justify-center text-podleaf-600 mb-4">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Show Notes & Transcription</h3>
                <p className="text-gray-600">
                  Detailed show notes and accurate transcriptions to enhance SEO and accessibility for your podcast.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Audio Samples Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Hear the Difference"
              subtitle="Listen to samples of our podcast production work"
              centered={true}
            />

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Business Leadership Podcast</h3>
                <p className="text-gray-600 mb-4">
                  Interview-style podcast with professional sound design and balanced audio levels.
                </p>
                <div className="bg-white p-4 rounded border border-gray-200">
                  <p className="text-sm text-gray-500 italic mb-2">Audio player placeholder - Client will provide embed code</p>
                  <div className="h-12 bg-gray-100 rounded flex items-center justify-center">
                    <span className="text-gray-400">Audio Sample Player</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">True Crime Storytelling</h3>
                <p className="text-gray-600 mb-4">
                  Narrative podcast with atmospheric sound design and clear voiceover.
                </p>
                <div className="bg-white p-4 rounded border border-gray-200">
                  <p className="text-sm text-gray-500 italic mb-2">Audio player placeholder - Client will provide embed code</p>
                  <div className="h-12 bg-gray-100 rounded flex items-center justify-center">
                    <span className="text-gray-400">Audio Sample Player</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Production Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Our Production Process"
              subtitle="A systematic approach to creating high-quality podcast episodes"
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
                    <h3 className="text-xl font-semibold mb-2">Pre-Production Planning</h3>
                    <p className="text-gray-600">
                      We work with you to define your podcast's sound, establish technical requirements, and plan the recording process.
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
                    <h3 className="text-xl font-semibold mb-2">Recording</h3>
                    <p className="text-gray-600">
                      High-quality audio capture in our studio or via remote recording with professional guidance.
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
                    <h3 className="text-xl font-semibold mb-2">Editing & Mixing</h3>
                    <p className="text-gray-600">
                      Professional editing to remove mistakes and distractions, followed by mixing to balance levels and enhance sound quality.
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
                    <h3 className="text-xl font-semibold mb-2">Sound Design</h3>
                    <p className="text-gray-600">
                      Addition of music, transitions, and sound effects to enhance the listening experience.
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
                    <h3 className="text-xl font-semibold mb-2">Mastering & Delivery</h3>
                    <p className="text-gray-600">
                      Final polishing and optimization for distribution across podcast platforms.
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
            <h2 className="text-3xl font-bold mb-6">Let's Create a Podcast That Sounds Amazing</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Ready to elevate your podcast's audio quality? Get in touch for a production quote today.
            </p>
            <Link to="/contact-us">
              <Button size="lg" className="text-lg px-8">
                Get a Production Quote
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PodcastProduction;
