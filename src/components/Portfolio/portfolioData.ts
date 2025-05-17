export interface PodcastItem {
  id: number | string;
  type: 'podcast';
  href: string;
  imageUrl: string;
  alt: string;
}

export interface VideoItem {
  id: number | string;
  type: 'video';
  title: string;
  clientName: string;
  description: string;
  videoId: string;
  tags: string[];
}

export type PortfolioItem = PodcastItem | VideoItem;

// Podcast data
export const podcastItems: PodcastItem[] = [
  {
    id: 1,
    type: 'podcast',
    href: "https://www.youtube.com/@AJuniorVC",
    imageUrl: "/lovable-uploads/a68092ee-d8b8-42a9-b956-d7bd5c63dff6.png",
    alt: "Founders Unfiltered Podcast"
  },
  {
    id: 2,
    type: 'podcast',
    href: "https://podcasts.apple.com/us/podcast/live-better-sell-better/id1518419694",
    imageUrl: "/lovable-uploads/cb868364-15ba-49b5-9f0d-844c4e25263a.png",
    alt: "Live Better Sell Better Podcast"
  },
  {
    id: 3,
    type: 'podcast',
    href: "https://podcasts.apple.com/us/podcast/intuition-your-success-compass/id1458617878",
    imageUrl: "/lovable-uploads/9259c5f3-06f8-4f1a-b748-089ea3619258.png",
    alt: "Intuition: Your First Sense Podcast"
  },
  {
    id: 4,
    type: 'podcast',
    href: "https://podcasts.apple.com/us/podcast/finding-fearless/id1320634079",
    imageUrl: "/lovable-uploads/7bacbc5d-3417-4eed-a929-9d8c432e70c9.png",
    alt: "Finding Fearless Podcast"
  },
  {
    id: 5,
    type: 'podcast',
    href: "https://www.youtube.com/@weekdayworks",
    imageUrl: "/lovable-uploads/be8d03a2-c88b-4c94-b895-0a66c6c80668.png",
    alt: "The Weekday Show"
  },
  {
    id: 6,
    type: 'podcast',
    href: "https://podcasts.apple.com/us/podcast/bravo-unscripted/id1693160893",
    imageUrl: "/lovable-uploads/139aa0d1-f77a-44ad-be2f-edffa4913527.png",
    alt: "Bravo Unscripted"
  },
  {
    id: 7,
    type: 'podcast',
    href: "https://www.youtube.com/watch?v=j2Yz1SaOFnQ",
    imageUrl: "/lovable-uploads/0585e87e-7926-4ec5-98b7-793e08c04fee.png",
    alt: "The Abstract Podcast"
  },
  {
    id: 8,
    type: 'podcast',
    href: "https://podcasts.apple.com/us/podcast/notes-on-resilience/id1662964244",
    imageUrl: "/lovable-uploads/489e243f-ef66-4b74-80c7-a9d7d316a46f.png",
    alt: "Notes on Resilience"
  },
  {
    id: 9,
    type: 'podcast',
    href: "https://podcasts.apple.com/us/podcast/the-pr-maven-podcast/id1436184833",
    imageUrl: "/lovable-uploads/b69a2a66-fd91-46eb-85d6-1a5a6a9ceba2.png",
    alt: "The PR Maven Podcast"
  },
  {
    id: 10,
    type: 'podcast',
    href: "https://podcasts.apple.com/us/podcast/strong-leaders-serve-with-teri-schmidt/id1517088288",
    imageUrl: "/lovable-uploads/acfaf98b-d815-4db5-9b3d-15a608de4b97.png",
    alt: "Strong Leaders Serve"
  },
  {
    id: 11,
    type: 'podcast',
    href: "https://www.youtube.com/@jasonyitzie",
    imageUrl: "/lovable-uploads/b9312c83-dd29-4c45-b31f-09b9e3f3b694.png",
    alt: "The Jason Ingber Podcast"
  },
  {
    id: 12,
    type: 'podcast',
    href: "https://podcasts.apple.com/us/podcast/starting-over-stronger-podcast/id1526868526",
    imageUrl: "/lovable-uploads/6cfa92ca-a7b7-4a53-83a4-3cd46bcf243c.png",
    alt: "Starting Over Stronger Podcast"
  },
  {
    id: 13,
    type: 'podcast',
    href: "https://podcasts.apple.com/us/podcast/leadership-school/id1554510934",
    imageUrl: "/lovable-uploads/5ecfcee9-b785-4802-aa91-265e200fc567.png",
    alt: "Leadership School"
  },
  {
    id: 14,
    type: 'podcast',
    href: "https://open.spotify.com/show/1DTL9IJG4rzElBxHfxJZRR",
    imageUrl: "/lovable-uploads/2e5a3073-f328-407b-854e-c9a7acce07c6.png",
    alt: "Your Business Journey with Clarita"
  },
  {
    id: 15,
    type: 'podcast',
    href: "https://www.youtube.com/@msmetalk",
    imageUrl: "/lovable-uploads/4e3bc620-1d92-4847-963e-6b7e354541c1.png",
    alt: "MSME Talk"
  },
  {
    id: 16,
    type: 'podcast',
    href: "https://goodbusinesslab.org/media/podcast/gbl-podcast-what-about-work/",
    imageUrl: "/lovable-uploads/ac8e27a8-0539-4f07-9f8f-77ad893b1448.png",
    alt: "What About Work?"
  },
  {
    id: 17,
    type: 'podcast',
    href: "https://www.follow.us/messages/follow.us-startups-9",
    imageUrl: "/lovable-uploads/88cc8549-a77c-4ee0-8561-2110d7742b3f.png",
    alt: "follow.us/startups"
  },
  {
    id: 18,
    type: 'podcast',
    href: "https://podcasts.apple.com/us/podcast/resilient-kings/id1778587679",
    imageUrl: "/lovable-uploads/2261c32d-4060-4bf4-a497-eef6f5378cf0.png",
    alt: "Resilient Kings Podcast"
  },
  {
    id: 19,
    type: 'podcast',
    href: "https://www.youtube.com/channel/UCanyCac0htEKCpjsZLg80eQ/",
    imageUrl: "/lovable-uploads/bb0e1efa-679e-42bb-9227-71c57c9e3768.png",
    alt: "First 5 Million Podcast"
  }
];

// Video data
export const videoItems: VideoItem[] = [
  {
    id: 'v1',
    type: 'video',
    title: "Speaker Reel/Sizzle Reel",
    clientName: "",
    description: "",
    videoId: "LoulqzM_J_s",
    tags: ["Video", "Production", "Speaker Reel"]
  },
  {
    id: 'v2',
    type: 'video',
    title: "Website Video",
    clientName: "",
    description: "",
    videoId: "W5OMFNIOfJY",
    tags: ["Video", "Production", "Website"]
  },
  {
    id: 'v3',
    type: 'video',
    title: "Brand Video",
    clientName: "",
    description: "",
    videoId: "PEVKTjPvWrU",
    tags: ["Video", "Production", "Brand"]
  },
  {
    id: 'v4',
    type: 'video',
    title: "Podcasts",
    clientName: "",
    description: "",
    videoId: "uC6s6Y8EJNY",
    tags: ["Video", "Production", "Podcast"]
  },
  {
    id: 'v5',
    type: 'video',
    title: "Short Form Content",
    clientName: "",
    description: "",
    videoId: "Rg3hf6m2QGg",
    tags: ["Video", "Production", "Short Form"]
  },
  {
    id: 'v6',
    type: 'video',
    title: "Vlog Video",
    clientName: "",
    description: "",
    videoId: "RyagAgMxvA4",
    tags: ["Video", "Production", "Vlog"]
  }
];
