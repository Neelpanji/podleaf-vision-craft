
import React from "react";
import { Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText?: string;
  buttonLink?: string;
  popular?: boolean;
  episodeCount: number;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  buttonText = "Get Started",
  buttonLink,
  popular = false,
  episodeCount,
}) => {
  return (
    <Card className={`relative flex flex-col ${popular ? "border-primary" : ""}`}>
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
          {price !== "Custom" && <span className="text-muted-foreground">/month</span>}
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
        {buttonLink ? (
          <a
            href={buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button className="w-full" variant={popular ? "default" : "outline"}>
              {buttonText}
            </Button>
          </a>
        ) : (
          <Button className="w-full" variant={popular ? "default" : "outline"}>
            {buttonText}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
