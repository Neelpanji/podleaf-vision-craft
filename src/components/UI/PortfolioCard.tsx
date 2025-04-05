
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface PortfolioCardProps {
  title: string;
  clientName: string;
  description: string;
  imageUrl: string;
  tags?: string[];
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  clientName,
  description,
  imageUrl,
  tags = [],
}) => {
  return (
    <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{title}</CardTitle>
        <p className="text-sm text-muted-foreground">Client: {clientName}</p>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base mb-4">{description}</CardDescription>
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
};

export default PortfolioCard;
