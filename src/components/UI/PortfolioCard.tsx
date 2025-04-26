
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface PortfolioCardProps {
  title: string;
  clientName?: string;
  description?: string;
  imageUrl?: string;
  videoId?: string;
  tags?: string[];
  href?: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  clientName = '',
  description = '',
  imageUrl,
  videoId,
  tags = [],
  href,
}) => {
  const CardComponent = () => (
    <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
      <div className="aspect-video w-full overflow-hidden">
        {videoId ? (
          <AspectRatio ratio={16 / 9}>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            ></iframe>
          </AspectRatio>
        ) : (
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        )}
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{title}</CardTitle>
        {clientName && <p className="text-sm text-muted-foreground">Client: {clientName}</p>}
      </CardHeader>
      <CardContent>
        {description && <CardDescription className="text-base mb-4">{description}</CardDescription>}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );

  if (href && !videoId) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
        <CardComponent />
      </a>
    );
  }

  return <CardComponent />;
};

export default PortfolioCard;
