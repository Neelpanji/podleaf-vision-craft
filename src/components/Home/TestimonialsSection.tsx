
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/UI/SectionHeading';
import TestimonialCard from '@/components/UI/TestimonialCard';

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-black">
      <div className="container container-padding">
        <SectionHeading
          title="What Our Clients Say"
          centered={true}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          <TestimonialCard
            quote="I love working with Neel on my podcast. When we first met before I had ever published an episode, it was clear to me that he was going to be a strategic partner."
            name="Manya Chylinski"
            company="Host of Notes on Resilience Podcast"
            imageUrl="/lovable-uploads/11f0658f-7854-4c6c-b4a5-7fb02742ec26.png"
            podcastUrl="https://podcasts.apple.com/us/podcast/notes-on-resilience/id1662964244"
            videoEmbedLink="https://www.youtube-nocookie.com/embed/Rs433fbAvbw"
          />
          <TestimonialCard
            quote="I am a huge raving fan of Neel, and this is no exaggeration. I rave about him to anybody who listens to me because he has been an integral part of my podcast team."
            name="Kyla Cofer"
            company="Host of Leadership School"
            imageUrl="/lovable-uploads/d790fe22-3fed-428a-9be1-fafecba1705f.png"
            podcastUrl="https://podcasts.apple.com/us/podcast/leadership-school/id1554510934"
            videoEmbedLink="https://www.youtube-nocookie.com/embed/QDgztwaZyi8"
          />
          <TestimonialCard
            quote="I would highly recommend working with Neel because as a life coach and business consultant, I understand the value of having someone who already has the skills that are needed in your business because you cannot be, everything to everyone. Working with Neel has helped me to grow as a business owner and as a podcast host. So I would highly recommend hiring him to work with you, to build your own following and to have that product that is edited to your highest liking."
            name="Vicki Baird"
            company="Host of Intuition: Your First Sense"
            imageUrl="/lovable-uploads/211142d2-28d8-4899-8ff7-2275f362f973.png"
            podcastUrl="https://podcasts.apple.com/us/podcast/intuition-your-success-compass/id1458617878"
            videoEmbedLink="https://www.youtube-nocookie.com/embed/Ifod2of5bmI"
          />
          <TestimonialCard
            quote="I've been hosting the PR Maven podcast for six years. Just recently, I connected with Neel, who has been a significant help in editing, disseminating, and producing videos for my podcast. I especially appreciate Neel's skill in finding those key soundbites that really capture the essential messages of each episode."
            name="Nancy Marshall"
            company="Host of The PR Maven Podcast"
            imageUrl="/lovable-uploads/09382286-cd84-4142-b000-8cc9e469d35a.png"
            podcastUrl="https://podcasts.apple.com/us/podcast/the-pr-maven-podcast/id1436184833"
            videoEmbedLink="https://www.youtube-nocookie.com/embed/sZcXCezzmRA"
          />
          <TestimonialCard
            quote="As Amit, founder and CEO of Weekday, a recruitment platform, I initially hired Neel Services for a podcast experiment to engage B2B recruiters and build customer relationships. Neel's team was incredibly helpful, handling everything from content ideation and setup to social media promotion and short video creation. Their support was instrumental, even assisting us in establishing an in-person studio after our initial podcast success with them. I highly recommend Neel's services; we're very satisfied."
            name="Amit Singh"
            company="Host of The Weekday Show"
            imageUrl="/lovable-uploads/ff72ddf0-4a22-48d2-a69d-8e5d361750f1.png"
            podcastUrl="https://www.youtube.com/@weekdayworks"
            videoEmbedLink="https://www.youtube-nocookie.com/embed/688ugVnl47k"
          />
        </div>

        <div className="text-center mt-10">
          <Link to="/testimonials">
            <Button variant="outline" size="lg" className="group font-bold">
              View All Testimonials
              <ArrowRightCircle className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
