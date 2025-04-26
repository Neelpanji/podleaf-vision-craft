
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import SectionHeading from '@/components/UI/SectionHeading';
import ServiceCard from '@/components/UI/ServiceCard';
import { PlayCircle, Video, Monitor, Film, BookOpen, Camera, Check } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const PricingCard = ({ 
  title, 
  price, 
  description, 
  features,
  buttonText = "Get Started",
  popular = false,
  episodeCount
}: {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText?: string;
  popular?: boolean;
  episodeCount: number;
}) => {
  return (
    <Card className={`relative flex flex-col ${popular ? 'border-primary' : ''}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-lg">{description}</CardDescription>
        <div className="mt-4">
          <span className="text-4xl font-bold">{price}</span>
          {price !== 'Custom' && <span className="text-muted-foreground">/month</span>}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant={popular ? 'default' : 'outline'}>
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
};

const Services = () => {
  const location = useLocation();
  const [episodeToggle, setEpisodeToggle] = useState(false);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const podcastPlans = [
    {
      title: "Audio Editing",
      price: episodeToggle ? "$297" : "$497",
      description: "Perfect for beginners",
      features: [
        "2 Episodes Per Month",
        "Episodes Up to 60 mins",
        "2 Dynamic reels Per episode",
        "Adding Intro's, Outros, and Ads",
        "Noise Reduction and Cleaning",
        "Episode Uploading",
        "72-Hour Turnaround",
        "Unlimited Email"
      ]
    },
    {
      title: "Video Editing",
      price: episodeToggle ? "$697" : "$997",
      description: "Most popular choice",
      features: [
        "2 Episodes Per Month",
        "Episodes Up to 60 mins",
        "Adding Intro's, Outros, and Ads",
        "Noise Reduction and Cleaning",
        "SEO friendly Show Notes",
        "2 Video Reels per Episode",
        "Episode Graphic",
        "Episode Title",
        "Episode Uploading",
        "72-Hour Turnaround",
        "Unlimited Email"
      ],
      popular: true
    },
    {
      title: "Custom",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Start a New Podcast",
        "Video Editing Requirements",
        "More or Less Episodes a Month",
        "15 Min or 60 Min Episodes?",
        "More Reels per Episode",
        "Social Media Post Content",
        "Analytics Support",
        "Multiple Podcasts",
        "Blog Posts",
        "Website Support",
        "Shorter Turnaround Time"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        {/* Podcast Services Section */}
        <section id="podcast-services" className="section-padding bg-background">
          <div className="container container-padding">
            <SectionHeading
              title="Podcast Services"
              subtitle="From concept to distribution, we offer comprehensive podcast solutions to help you create, grow, and monetize your podcast."
              centered={true}
            />

            {/* Episode Count Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Label htmlFor="episode-toggle" className="text-lg">
                2 Episodes
              </Label>
              <Switch
                id="episode-toggle"
                checked={episodeToggle}
                onCheckedChange={setEpisodeToggle}
              />
              <Label htmlFor="episode-toggle" className="text-lg">
                4 Episodes
              </Label>
            </div>

            <div className="mt-8">
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {podcastPlans.map((plan, index) => (
                  <PricingCard 
                    key={index} 
                    {...plan} 
                    episodeCount={episodeToggle ? 2 : 4}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Video Services Section */}
        <section id="video-services" className="section-padding bg-muted">
          <div className="container container-padding">
            <SectionHeading
              title="Video Services"
              subtitle="Professional video production services to enhance your brand's visual presence and engagement."
              centered={true}
            />

            <div className="grid md:grid-cols-3 gap-6">
              <ServiceCard
                title="Short/Reels"
                description="Create engaging short-form content optimized for social media platforms."
                icon={<Video className="h-6 w-6" />}
                link="/portfolio#video-services"
              />
              <ServiceCard
                title="Speaker/Sizzle Reel"
                description="Highlight your speaking engagements and professional achievements with dynamic sizzle reels."
                icon={<PlayCircle className="h-6 w-6" />}
                link="/portfolio#video-services"
              />
              <ServiceCard
                title="Website Video"
                description="Enhance your website with professional video content that captures visitor attention."
                icon={<Monitor className="h-6 w-6" />}
                link="/portfolio#video-services"
              />
              <ServiceCard
                title="Talking Head Video"
                description="Professional talking head videos for presentations and corporate communications."
                icon={<Camera className="h-6 w-6" />}
                link="/portfolio#video-services"
              />
              <ServiceCard
                title="Brand Video"
                description="Tell your brand story through compelling video narratives."
                icon={<Film className="h-6 w-6" />}
                link="/portfolio#video-services"
              />
              <ServiceCard
                title="Vlog"
                description="Create engaging vlog content to connect with your audience and share your story."
                icon={<Video className="h-6 w-6" />}
                link="/portfolio#video-services"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
