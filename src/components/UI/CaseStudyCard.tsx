
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface CaseStudyCardProps {
  title: string;
  videoId?: string;
  imageUrl?: string;
  challenge: string;
  approach: string[];
  results: string[];
  link: string;
  linkText: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  title,
  videoId,
  imageUrl,
  challenge,
  approach,
  results,
  link,
  linkText,
}) => {
  return (
    <Card className="h-full flex flex-col">
      {videoId && (
        <div className="w-full overflow-hidden">
          <AspectRatio ratio={16 / 9}>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            ></iframe>
          </AspectRatio>
        </div>
      )}
      {imageUrl && (
        <div className="w-full overflow-hidden">
          <AspectRatio ratio={16 / 9}>
            <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
          </AspectRatio>
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col gap-6">
        <div>
          <h4 className="font-semibold text-lg mb-2">Challenge</h4>
          <CardDescription>{challenge}</CardDescription>
        </div>
        
        <div>
          <h4 className="font-semibold text-lg mb-2">Our Approach</h4>
          <ul className="list-disc pl-5 space-y-2">
            {approach.map((item, index) => (
              <li key={index} className="text-muted-foreground">{item}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-lg mb-2">Results</h4>
          <ul className="list-disc pl-5 space-y-2">
            {results.map((result, index) => (
              <li key={index} className="text-muted-foreground">{result}</li>
            ))}
          </ul>
        </div>
        
        <div className="mt-auto pt-4">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="w-full">
              {linkText}
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default CaseStudyCard;
