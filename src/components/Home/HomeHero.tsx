
import React from 'react';
import HeroSection from '@/components/UI/HeroSection';

const HomeHero = () => {
  return (
    <HeroSection
      titlePart1="Podcast & Video Dreams? "
      titlePart1Color="#70dab8"
      titlePart2="We Make 'Em Happen!"
      titlePart2Color="#70dab8"
      subtitle="Launch, grow, and cash in on your podcast with PodLeaF Productions. From killer content to getting heard, we've got you covered (and videos too!)."
      description="In today's digital landscape, podcasts are a powerful way to connect with your audience, build authority, and drive results. At PodLeaF Productions, we specialize in providing end-to-end podcast solutions, from crafting compelling content and professional production to strategic marketing and successful launches."
      buttonText="Get a Free Podcast Strategy Consultation"
      buttonLink="/contact-us"
      imageUrl="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    />
  );
};

export default HomeHero;
