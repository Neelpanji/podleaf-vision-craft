
import React from 'react';
import { videoItems } from './portfolioData';
import PortfolioCard from '@/components/UI/PortfolioCard';

const PortfolioVideos: React.FC = () => (
  <>
    {/* Anchor for 'portfolio#video' */}
    <div id="video"></div>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {videoItems.map((video) => (
        <div key={video.id} className="sm:col-span-2 md:col-span-2 lg:col-span-2">
          <PortfolioCard
            title={video.title}
            clientName={video.clientName}
            description={video.description}
            videoId={video.videoId}
            tags={video.tags}
          />
        </div>
      ))}
    </div>
  </>
);

export default PortfolioVideos;
