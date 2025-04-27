
import React from 'react';
import { ArrowRightCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/UI/SectionHeading';

const ProductionProcessSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container container-padding">
        <SectionHeading
          title="Our Podcast Production Process"
          subtitle="Transform your ideas into professional, engaging podcasts with our streamlined process"
          centered={true}
        />
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Arrow connections */}
          <div className="absolute top-1/2 left-1/3 w-1/3 h-0.5 bg-primary hidden md:block"></div>
          <div className="absolute top-1/2 right-1/3 w-1/3 h-0.5 bg-primary hidden md:block"></div>
          <div className="absolute top-1/2 left-1/3 -ml-2 w-4 h-4 border-t-2 border-r-2 border-primary transform rotate-45 hidden md:block"></div>
          <div className="absolute top-1/2 right-1/3 -mr-2 w-4 h-4 border-t-2 border-r-2 border-primary transform rotate-45 hidden md:block"></div>

          <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
            <h3 className="text-xl font-semibold mb-3 text-teal">Getting You Ready</h3>
            <p className="text-sm text-muted-foreground mb-2">(My Job)</p>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Pre-Show</li>
              <li>Setting Up The Meet</li>
              <li>Deciding What To Ask/Talk</li>
              <li>Mic & Camera Set up</li>
              <li>Branding</li>
              <li>Strategy</li>
              <li>Directory Submissions</li>
              <li>Narration Development</li>
            </ul>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
            <h3 className="text-xl font-semibold mb-3 text-teal">Once You Are Ready</h3>
            <p className="text-sm text-muted-foreground mb-2">(Your Job)</p>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Hit Record & Have the conversation</li>
            </ul>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
            <h3 className="text-xl font-semibold mb-3 text-teal">Making It Audience Ready</h3>
            <p className="text-sm text-muted-foreground mb-2">(My Job)</p>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Audio Production</li>
              <li>Show Notes</li>
              <li>Video Editing</li>
              <li>Shorts / Reels</li>
              <li>Thumbnails</li>
              <li>Scheduling</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-8">
          <a href="https://calendar.app.google/bge2qAqmQfVFzZmg8" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="group">
              Schedule a Free Call
              <ArrowRightCircle className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductionProcessSection;
