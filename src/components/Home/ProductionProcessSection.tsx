
import React from 'react';
import { ArrowRightCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/UI/SectionHeading';

const ProductionProcessSection = () => {
  return (
    <section className="section-padding bg-gray-900">
      <div className="container container-padding">
        <SectionHeading
          title="How We Do It"
          subtitle="Our Podcast Production Process"
          centered={true}
        />
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-700">
            <h3 className="text-xl font-semibold mb-3 text-teal">Getting You Ready</h3>
            <p className="text-sm text-gray-400 mb-2">(My Job)</p>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
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
          
          <div className="bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-700">
            <h3 className="text-xl font-semibold mb-3 text-teal">Once You Are Ready</h3>
            <p className="text-sm text-gray-400 mb-2">(Your Job)</p>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
              <li>Hit Record & Have the conversation</li>
            </ul>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-700">
            <h3 className="text-xl font-semibold mb-3 text-teal">Making It Audience Ready</h3>
            <p className="text-sm text-gray-400 mb-2">(My Job)</p>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
              <li>Audio Production</li>
              <li>Video Editing</li>
              <li>Show Notes</li>
              <li>Shorts / Reels</li>
              <li>Thumbnails</li>
              <li>Scheduling</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-8">
          <a href="https://calendar.app.google/bge2qAqmQfVFzZmg8" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="group font-bold">
              Schedule a Free Call
              <ArrowRightCircle className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductionProcessSection;
