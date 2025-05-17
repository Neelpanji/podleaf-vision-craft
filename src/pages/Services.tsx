
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import SectionHeading from "@/components/UI/SectionHeading";
import PricingCard from "@/components/Services/PricingCard";
import podcastPlans from "@/components/Services/podcastPlans";
import VideoServiceGrid from "@/components/Services/VideoServiceGrid";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const Services = () => {
  const location = useLocation();
  const [episodeToggle, setEpisodeToggle] = useState(false);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  // Update prices based on episodeToggle
  const getPlansWithToggledPrice = () =>
    podcastPlans.map((plan) => {
      if (plan.price === "$499" || plan.price === "$899") {
        return {
          ...plan,
          price: episodeToggle ? "$899" : "$499",
        };
      }
      if (plan.price === "$799" || plan.price === "$1499") {
        return {
          ...plan,
          price: episodeToggle ? "$1499" : "$799",
        };
      }
      return plan;
    });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <section id="podcast-services" className="section-padding bg-background">
          <div className="container container-padding">
            <SectionHeading
              title="Podcast Services"
              subtitle="From concept to distribution, we offer comprehensive podcast solutions to help you create, grow, and monetize your podcast."
              centered={true}
            />

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
                {getPlansWithToggledPrice().map((plan, index) => (
                  <PricingCard key={index} {...plan} episodeCount={episodeToggle ? 2 : 4} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="video-services" className="section-padding bg-muted">
          <div className="container container-padding">
            <SectionHeading
              title="Video Services"
              subtitle="Professional video production services to enhance your brand's visual presence and engagement."
              centered={true}
            />
            <VideoServiceGrid />
            <div className="text-center mt-8">
              <a
                href="https://calendar.app.google/nnbyeyt87GkLirm18"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="text-lg px-8 font-bold">
                  Contact for quote
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
