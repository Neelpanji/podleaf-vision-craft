
import React from "react";
import ServiceCard from "@/components/UI/ServiceCard";
import { Video, PlayCircle, Monitor, Film, BookOpen, Camera } from "lucide-react";

const videoServices = [
  {
    title: "Short/Reels",
    description: "Create engaging short-form content optimized for social media platforms.",
    icon: <Video className="h-6 w-6" />,
    link: "/portfolio#video"
  },
  {
    title: "Speaker/Sizzle Reel",
    description: "Highlight your speaking engagements and professional achievements with dynamic sizzle reels.",
    icon: <PlayCircle className="h-6 w-6" />,
    link: "/portfolio#video"
  },
  {
    title: "Website Video",
    description: "Enhance your website with professional video content that captures visitor attention.",
    icon: <Monitor className="h-6 w-6" />,
    link: "/portfolio#video"
  },
  {
    title: "Talking Head Video",
    description: "Professional talking head videos for presentations and corporate communications.",
    icon: <Camera className="h-6 w-6" />,
    link: "/portfolio#video"
  },
  {
    title: "Brand Video",
    description: "Tell your brand story through compelling video narratives.",
    icon: <Film className="h-6 w-6" />,
    link: "/portfolio#video"
  },
  {
    title: "Vlog",
    description: "Create engaging vlog content to connect with your audience and share your story.",
    icon: <Video className="h-6 w-6" />,
    link: "/portfolio#video"
  },
];

const VideoServiceGrid: React.FC = () => (
  <div className="grid md:grid-cols-3 gap-6">
    {videoServices.map((service, idx) => (
      <ServiceCard key={service.title + idx} {...service} />
    ))}
  </div>
);

export default VideoServiceGrid;
