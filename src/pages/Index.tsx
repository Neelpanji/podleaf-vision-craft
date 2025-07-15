
import React from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import HomeHero from '@/components/Home/HomeHero';
import PodcastServicesSection from '@/components/Home/PodcastServicesSection';
import ProductionProcessSection from '@/components/Home/ProductionProcessSection';
import VideoServicesSection from '@/components/Home/VideoServicesSection';
import ResultsSection from '@/components/Home/ResultsSection';
import TestimonialsSection from '@/components/Home/TestimonialsSection';
import CTASection from '@/components/Home/CTASection';
import TrustedBySection from '@/components/Home/TrustedBySection';
import LinkedInPostsSection from '@/components/LinkedIn/LinkedInPostsSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <HomeHero />
        <ResultsSection />
        <PodcastServicesSection />
        <ProductionProcessSection />
        <VideoServicesSection />
        <TrustedBySection />
        <LinkedInPostsSection maxPosts={3} />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
