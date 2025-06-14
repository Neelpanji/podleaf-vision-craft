
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface TestimonialCardProps {
  quote: string;
  name: string;
  company?: string;
  imageUrl?: string;
  podcastUrl?: string;
  videoEmbedLink?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  name, 
  company, 
  imageUrl, 
  podcastUrl,
  videoEmbedLink 
}) => {
  return (
    <Card className="h-full flex flex-col">
      {videoEmbedLink && (
        <div className="p-6 pb-3 w-full">
          <div className="relative pb-[56.25%] h-0 rounded-md overflow-hidden">
            <iframe 
              src={videoEmbedLink} 
              className="absolute top-0 left-0 w-full h-full border-0"
              title={`${name}'s testimonial video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
      
      {imageUrl && (
        <div className="p-6 pb-0 flex justify-center">
          {podcastUrl ? (
            <a href={podcastUrl} target="_blank" rel="noopener noreferrer" className="block text-center">
              <img
                src={imageUrl}
                alt={`${name}'s podcast`}
                className="max-h-48 object-contain rounded hover:opacity-90 transition-opacity"
              />
            </a>
          ) : (
            <img
              src={imageUrl}
              alt={`${name}'s podcast`}
              className="max-h-48 object-contain rounded"
            />
          )}
        </div>
      )}
      
      <CardContent className={`pt-6 pb-2 ${imageUrl || videoEmbedLink ? 'mt-2' : ''} flex-grow`}>
        <div className="mb-4">
          <svg
            className="h-8 w-8 text-podleaf-400 mb-2"
            fill="currentColor"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <p className="text-lg">{quote}</p>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0 pb-6 flex items-center space-x-3 mt-auto">
        <div>
          <h4 className="font-medium text-lg">{name}</h4>
          {company && <p className="text-sm text-gray-500">{company}</p>}
        </div>
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
