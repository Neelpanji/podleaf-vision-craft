
import React from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import HeroSection from '@/components/UI/HeroSection';
import LinkedInPostsSection from '@/components/LinkedIn/LinkedInPostsSection';

const LinkedInPosts = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection
          title="LinkedIn Insights & Updates"
          subtitle="Explore my latest thoughts on podcasting, video production, content creation, and business growth strategies"
          centered={true}
        />
        <LinkedInPostsSection showAllPosts={true} />
      </main>
      <Footer />
    </div>
  );
};

export default LinkedInPosts;
