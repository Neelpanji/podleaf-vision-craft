
import React from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="max-w-3xl mx-auto w-full bg-gray-900 rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-8 p-6 md:p-10">
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
            <img
              src="/lovable-uploads/8473a8a9-6088-4a1f-ba90-0d30cbe0db33.png"
              alt="Neel Panji in the snow"
              className="rounded-lg shadow-md w-full max-w-xs object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-2xl md:text-3xl font-bold text-podleaf-300 mb-4">
              Hi, I am Neel Panji
              <span className="block text-lg text-white font-normal">Founder of PodLeaF Productions</span>
            </h1>
            <p className="text-gray-200 text-base md:text-lg mb-2">
              Being a podcaster can be tough in many ways. From scheduling guests for an interview, finding new guests, promoting the value you provide to the audience in various forms, getting creative to keep your audience engaged, and finally spending hours to ensure the quality of the audio is top-notch. Hence culminating over 5 years of my experience working with different podcasters in this production company.
            </p>
            <p className="text-gray-200 text-base md:text-lg mb-2">
              I started out as a mechanical engineer but soon my passion for podcasts pulled me out of my job to start PodLeaF Productions. We are a team of enthusiasts who with our diverse experience bring the best for your podcast.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;

