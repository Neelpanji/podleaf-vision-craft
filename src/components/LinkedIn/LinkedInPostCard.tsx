
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { LinkedInPost } from './linkedInPostsData';

interface LinkedInPostCardProps {
  post: LinkedInPost;
}

const LinkedInPostCard: React.FC<LinkedInPostCardProps> = ({ post }) => {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg group">
      {post.imageUrl && (
        <div className="aspect-video w-full overflow-hidden rounded-t-lg">
          <img 
            src={post.imageUrl} 
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      
      <CardHeader className="pb-3">
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          {post.relativeDate}
        </div>
        <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
          {post.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="pt-0">
        <CardDescription className="text-base mb-4 line-clamp-3">
          {post.excerpt}
        </CardDescription>
        
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span 
                key={tag} 
                className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-xs font-medium"
              >
                #{tag.toLowerCase().replace(/\s+/g, '')}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex justify-end">
          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Read More
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default LinkedInPostCard;
