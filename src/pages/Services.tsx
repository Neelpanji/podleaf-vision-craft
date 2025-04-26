
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import SectionHeading from '@/components/UI/SectionHeading';
import ServiceCard from '@/components/UI/ServiceCard';
import { Megaphone, Mic, Radio, PlayCircle, BookOpen, Film, Check } from 'lucide-react';
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
      title: "Basic",
      price: episodeToggle ? "$297" : "$497",
      description: "Perfect for beginners",
      features: episodeToggle 
        ? [
            "2 episodes per month",
            "Basic audio editing",
            "Cover art design",
            "RSS feed setup",
            "Distribution to platforms"
          ]
        : [
            "4 episodes per month",
            "Basic audio editing",
            "Cover art design",
            "RSS feed setup",
            "Distribution to platforms",
            "Additional monthly strategy session"
          ]
    },
    {
      title: "Professional",
      price: episodeToggle ? "$697" : "$997",
      description: "Most popular choice",
      features: episodeToggle
        ? [
            "4 episodes per month",
            "Advanced audio editing",
            "Custom intro/outro",
            "Show notes creation",
            "Social media clips"
          ]
        : [
            "8 episodes per month",
            "Advanced audio editing",
            "Custom intro/outro",
            "Show notes creation",
            "Social media clips",
            "Audiogram creation",
            "Monthly performance review"
          ],
      popular: true
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Unlimited episodes",
        "Premium audio quality",
        "Full production team",
        "Content strategy",
        "Analytics reporting",
        "Custom solutions"
      ]
    }
  ];

  const videoPlans = [
    {
      title: "Starter",
      price: "$997",
      description: "Essential video package",
      features: [
        "2 videos per month",
        "Basic video editing",
        "Thumbnail creation",
        "YouTube optimization",
        "Basic effects"
      ]
    },
    {
      title: "Growth",
      price: "$1,997",
      description: "Comprehensive coverage",
      features: [
        "4 videos per month",
        "Advanced editing",
        "Custom transitions",
        "Content strategy",
        "Social media clips",
        "Analytics reporting"
      ],
      popular: true
    },
    {
      title: "Premium",
      price: "Custom",
      description: "Full-service solution",
      features: [
        "Unlimited videos",
        "Premium production",
        "Multiple formats",
        "Strategy consulting",
        "Full marketing support",
        "Dedicated team"
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

            <div className="grid md:grid-cols-3 gap-6">
              <ServiceCard
                title="Podcast Marketing"
                description="Reach a wider audience and grow your listener base with our proven marketing strategies tailored for podcasters."
                icon={<Megaphone className="h-6 w-6" />}
                link="#podcast-services"
              />
              <ServiceCard
                title="Podcast Production"
                description="Create high-quality audio that captivates your listeners with our professional production services."
                icon={<Mic className="h-6 w-6" />}
                link="#podcast-services"
              />
              <ServiceCard
                title="Podcast Launch"
                description="Start strong with a strategic and impactful launch plan designed to make a splash in your niche."
                icon={<Radio className="h-6 w-6" />}
                link="#podcast-services"
              />
            </div>

            <div className="mt-16">
              <SectionHeading
                title="Podcast Production Pricing"
                subtitle="Choose the perfect plan for your podcast needs"
                centered={true}
              />
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
                title="Vlog Videos"
                description="Connect authentically with your audience through engaging vlogs that showcase your personality and expertise."
                icon={<PlayCircle className="h-6 w-6" />}
                link="#video-services"
              />
              <ServiceCard
                title="Educational Videos"
                description="Share your knowledge and establish yourself as an industry leader with professionally produced educational content."
                icon={<BookOpen className="h-6 w-6" />}
                link="#video-services"
              />
              <ServiceCard
                title="Commercial Website Videos"
                description="Drive conversions and showcase your products/services effectively with compelling commercial videos."
                icon={<Film className="h-6 w-6" />}
                link="#video-services"
              />
            </div>

            <div className="mt-16">
              <SectionHeading
                title="Video Production Pricing"
                subtitle="Select the right video package for your business"
                centered={true}
              />
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {videoPlans.map((plan, index) => (
                  <PricingCard 
                    key={index} 
                    {...plan} 
                    episodeCount={2} // Adding the missing episodeCount prop for video plans
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
