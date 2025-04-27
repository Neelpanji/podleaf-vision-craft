
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

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <HomeHero />
        <PodcastServicesSection />
        <ProductionProcessSection />
        <VideoServicesSection />
        <ResultsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
