
import React from 'react';
import { Button } from '@/components/ui/button';
import { Linkedin, ExternalLink } from 'lucide-react';
import SectionHeading from '@/components/UI/SectionHeading';
import LinkedInPostCard from './LinkedInPostCard';
import { getRecentPosts } from './linkedInPostsData';

interface LinkedInPostsSectionProps {
  showAllPosts?: boolean;
  maxPosts?: number;
}

const LinkedInPostsSection: React.FC<LinkedInPostsSectionProps> = ({ 
  showAllPosts = false, 
  maxPosts = 6 
}) => {
  const posts = getRecentPosts(showAllPosts ? undefined : maxPosts);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionHeading 
            title="Latest LinkedIn Insights"
            subtitle="Stay updated with my latest thoughts on podcasting, video production, and business growth"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {posts.map((post) => (
            <LinkedInPostCard key={post.id} post={post} />
          ))}
        </div>

        <div className="text-center space-y-4">
          <a
            href="https://www.linkedin.com/in/neelpanji/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button variant="outline" size="lg" className="group">
              <Linkedin className="w-5 h-5 mr-2" />
              Follow on LinkedIn
              <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
          <p className="text-sm text-muted-foreground">
            Join 1000+ followers for regular insights on content creation and business growth
          </p>
        </div>
      </div>
    </section>
  );
};

export default LinkedInPostsSection;
