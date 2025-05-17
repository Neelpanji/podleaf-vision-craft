
import React from "react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#1A1F2C] via-[#221F26] to-[#333] text-white">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-start pt-12 px-4 md:px-0 relative">
        <div className="w-full max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-xl flex flex-col md:flex-row items-center gap-0 md:gap-8 p-0 md:p-0 overflow-hidden border border-white/10">
          {/* Image Section */}
          <div className="w-full md:w-1/2 h-72 md:h-auto flex-shrink-0 relative">
            <img 
              src="/lovable-uploads/0585e87e-7926-4ec5-98b7-793e08c04fee.png"
              alt="Neel Panji in the snow"
              className="w-full h-full object-cover object-top md:rounded-l-2xl rounded-t-2xl md:rounded-tr-none shadow-lg"
              style={{ background: "#eadff4" }}
            />
          </div>
          {/* Content Section */}
          <div className="flex-1 flex flex-col justify-center p-7 md:p-10 text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#9b87f5] mb-3">
              Hi, I am Neel Panji
            </h1>
            <h2 className="text-lg sm:text-xl text-[#F2FCE2] font-semibold mb-6">
              Founder of PodLeaF Productions
            </h2>
            <p className="text-gray-100 text-base md:text-lg leading-relaxed mb-0">
              Being a podcaster can be tough in many ways. From scheduling guests for an interview, finding new guests, promoting the value you provide to the audience in various forms, getting creative to keep your audience engaged, and finally spending hours to ensure the quality of the audio is top-notch. Hence culminating over 5 years of my experience working with different podcasters in this production company.
              <br /><br />
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

