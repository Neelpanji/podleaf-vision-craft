
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/UI/SectionHeading';
import CaseStudyCard from '@/components/UI/CaseStudyCard';

const ResultsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container container-padding">
        <SectionHeading
          title="We Say That Based On Real Results..."
          subtitle="Our Results"
          centered={true}
        />

        <div className="grid md:grid-cols-3 gap-8">
          <CaseStudyCard
            title="The Weekday Show"
            imageUrl="/lovable-uploads/ff72ddf0-4a22-48d2-a69d-8e5d361750f1.png"
            challenge="Needed to create engaging content for B2B recruiters and build customer relationships"
            approach={[
              "Established comprehensive podcast strategy",
              "Implemented professional production workflow",
              "Created engaging social media content"
            ]}
            results={["46% Guest to Client Conversion!"]}
            link="https://www.youtube.com/@weekdayworks"
            linkText="View Channel"
            videoId="688ugVnl47k"
          />
          
          <CaseStudyCard
            title="Starting Over Stronger Podcast"
            imageUrl="/lovable-uploads/211142d2-28d8-4899-8ff7-2275f362f973.png"
            challenge="Build an engaged audience from scratch in a competitive niche"
            approach={[
              "Developed unique content strategy",
              "Optimized production quality",
              "Implemented marketing tactics"
            ]}
            results={["50,000 Downloads!"]}
            link="https://podcasts.apple.com/us/podcast/intuition-your-success-compass/id1458617878"
            linkText="Listen Now"
          />
          
          <CaseStudyCard
            title="Manya Chylinski"
            imageUrl="/lovable-uploads/11f0658f-7854-4c6c-b4a5-7fb02742ec26.png"
            challenge="Create a sustainable podcast with positive ROI"
            approach={[
              "Strategic guest selection",
              "Professional production",
              "Focused monetization strategy"
            ]}
            results={[
              "2 years of successful operation",
              "104 high-quality episodes",
              "ROI exceeded $3000 annual investment"
            ]}
            link="https://podcasts.apple.com/us/podcast/notes-on-resilience/id1662964244"
            linkText="Listen Now"
            videoId="Rs433fbAvbw"
          />
        </div>

        <div className="text-center mt-8">
          <Link to="/case-study">
            <Button variant="outline" size="lg" className="group font-bold">
              Read more success stories here
              <ArrowRightCircle className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
