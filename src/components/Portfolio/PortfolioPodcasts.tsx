
import React from 'react';
import { podcastItems } from './portfolioData';

const PortfolioPodcasts: React.FC = () => (
  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {podcastItems.map((item) => (
      <a
        key={item.id}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden rounded-lg shadow-sm transition-transform hover:scale-105"
      >
        <img
          src={item.imageUrl}
          alt={item.alt}
          className="w-full h-64 object-cover"
        />
      </a>
    ))}
  </div>
);

export default PortfolioPodcasts;
