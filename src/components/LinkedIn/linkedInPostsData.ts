
export interface LinkedInPost {
  id: string;
  title: string;
  excerpt: string;
  url: string;
  publishedDate: string;
  tags: string[];
  imageUrl?: string;
  likes?: number;
  comments?: number;
}

export const linkedInPosts: LinkedInPost[] = [
  {
    id: "4",
    title: "Ever Wonder What All Silently Supports My Podcast Production?",
    excerpt: "Behind every successful podcast episode, there's an entire ecosystem of tools, processes, and people working together. Here's a peek behind the curtain...",
    url: "https://www.linkedin.com/posts/neelpanji_ever-wonder-what-all-silently-supports-my-activity-7350872654490329089-_-8z?",
    publishedDate: "2024-01-20",
    tags: ["Podcast Production", "Behind the Scenes", "Tools"],
    likes: 95,
    comments: 18
  },
  {
    id: "5",
    title: "What Differentiates Good vs Great Work",
    excerpt: "The difference between good and great work isn't always obvious, but it's always impactful. Here's what I've learned about elevating quality in creative projects...",
    url: "https://www.linkedin.com/posts/neelpanji_what-differentiates-good-vs-great-work-activity-7350508120055382016-1qkc?",
    publishedDate: "2024-01-18",
    tags: ["Quality", "Excellence", "Professional Growth"],
    likes: 142,
    comments: 27
  },
  {
    id: "6",
    title: "POV: When Clients Are More Than Just Clients",
    excerpt: "Some client relationships transcend the typical professional boundary and become genuine partnerships. Here's why that matters and how it transforms the work we do together...",
    url: "https://www.linkedin.com/posts/neelpanji_pov-when-clients-are-more-than-just-clients-activity-7349418460508057601-NDGC?",
    publishedDate: "2024-01-15",
    tags: ["Client Relationships", "Partnership", "Business"],
    likes: 78,
    comments: 12
  },
  {
    id: "1",
    title: "The Power of Authentic Storytelling in Podcasting",
    excerpt: "Just wrapped up an amazing podcast production where the host shared their most vulnerable story yet. Here's why authenticity always wins...",
    url: "https://www.linkedin.com/posts/neelpanji_podcasting-storytelling-authenticity-activity-7150123456789012345-AbCd",
    publishedDate: "2024-01-15",
    tags: ["Podcasting", "Storytelling", "Authenticity"],
    likes: 127,
    comments: 23
  },
  {
    id: "2",
    title: "5 Video Production Tips That Will Transform Your Content",
    excerpt: "After producing hundreds of videos, these 5 simple techniques consistently deliver the biggest impact on engagement and viewer retention...",
    url: "https://www.linkedin.com/posts/neelpanji_videoproduction-contentcreation-marketing-activity-7149987654321098765-EfGh",
    publishedDate: "2024-01-10",
    tags: ["Video Production", "Content Creation", "Marketing"],
    likes: 89,
    comments: 15
  },
  {
    id: "3",
    title: "Why Every Business Needs a Podcast Strategy in 2024",
    excerpt: "The podcast industry is exploding, but most businesses are missing the boat. Here's how to get started with a strategy that actually works...",
    url: "https://www.linkedin.com/posts/neelpanji_business-podcast-strategy-activity-7148765432109876543-IjKl",
    publishedDate: "2024-01-05",
    tags: ["Business", "Podcast", "Strategy"],
    likes: 156,
    comments: 31
  }
];

// Helper function to get recent posts
export const getRecentPosts = (limit: number = 6): LinkedInPost[] => {
  return linkedInPosts
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    .slice(0, limit);
};

// Helper function to format date
export const formatPostDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
