
import React from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import SectionHeading from '@/components/UI/SectionHeading';
import CaseStudyCard from '@/components/UI/CaseStudyCard';

const CaseStudy = () => {
  const caseStudies = [
    {
      title: "The Weekday Show - 46% Guest to Client Conversion!",
      videoId: "fzclw3gcIFs",
      challenge: "Weekday, an HR tech startup, aimed to generate B2B leads through a podcast.",
      approach: [
        "Developed a podcast strategy focused on balancing guest career narratives with business insights to attract potential partners.",
        "Targeted a broader audience (students, employees) with valuable job-hunt related content.",
        "Implemented a comprehensive production plan, covering branding, format, guest selection, and marketing."
      ],
      results: [
        "Achieved a 46% conversion rate: 7 out of 15 podcast guests progressed to a demo call.",
        "Enhanced brand awareness within the target market.",
        "Expanded viewership and social media following across YouTube, Instagram, and LinkedIn."
      ],
      link: "https://www.youtube.com/@weekdayworks",
      linkText: "View Podcast Channel"
    },
    {
      title: "The Weekday Show - 4 Reels = 1.5M Views + 25k Likes! (Instagram Only)",
      imageUrl: "/lovable-uploads/be8d03a2-c88b-4c94-b895-0a66c6c80668.png",
      challenge: "The Weekday Show sought to leverage short-form video to increase visibility.",
      approach: [
        "Strategically produced viral-worthy reels from the interview-format podcast content.",
        "Focused on content relevancy and skillful questioning to create engaging clips."
      ],
      results: [
        "Four reels went viral on Instagram.",
        "Achieved a combined total of over 1.5 million views.",
        "Garnered more than 25,000 likes, demonstrating high audience engagement."
      ],
      link: "https://www.instagram.com/weekday.works",
      linkText: "View on Instagram"
    },
    {
      title: "Starting Over Stronger Podcast By Annie Chavez - 50,000 Downloads!",
      imageUrl: "/lovable-uploads/6cfa92ca-a7b7-4a53-83a4-3cd46bcf243c.png",
      challenge: "Annie Allen, a Divorce Coach, aimed to reach a broad audience with her podcast.",
      approach: [
        "Consistently produced 133 podcast episodes (\"Starting Over Stronger\") from June 2020 to January 2023."
      ],
      results: [
        "The podcast garnered over 50,000 downloads between June 2020 and February 2025.",
        "Over 27% of downloads (14,000+) occurred between January 2023 and February 2025, despite no social media marketing.",
        "Demonstrated the enduring nature of podcast content through organic discovery (SEO, website visits)."
      ],
      link: "https://podcasts.apple.com/us/podcast/starting-over-stronger-podcast/id1526868526",
      linkText: "Listen on Apple Podcasts"
    },
    {
      title: "Manya Chylinski - 2 years, 104 guests, USD 3000 invested/year - One Deal & Earned more than that",
      imageUrl: "/lovable-uploads/489e243f-ef66-4b74-80c7-a9d7d316a46f.png",
      challenge: "Manya Chylinski needed to generate a return on her podcast investment.",
      approach: [
        "Produced \"Notes on Resilience\" podcast for two years (104 episodes), investing $3000/year.",
        "Pivoted content strategy from life events to leadership/organizational resilience and trauma.",
        "Focused on networking with professionals in Employee Assistance Programs (EAPs)."
      ],
      results: [
        "Secured a deal that will cover nearly a year's investment, with potential for more.",
        "Established credibility with organizations through consistent content.",
        "Built valuable connections through strategic networking.",
        "Refined business direction and podcast content through ongoing conversations."
      ],
      link: "https://podcasts.apple.com/us/podcast/notes-on-resilience/id1662964244",
      linkText: "Listen on Apple Podcasts"
    },
    {
      title: "Gunai Tarde Vlog - 33K+ Views & Counting & 1000 Subscribers added!",
      videoId: "RyagAgMxvA4",
      challenge: "Gunai Tarde aimed to grow their audience through vlogging.",
      approach: [
        "Focused on strategic content creation and presentation.",
        "Emphasized smart editing, attractive thumbnails, and effective video timing."
      ],
      results: [
        "Vlog achieved 33,000+ views.",
        "Channel gained over 1,000 subscribers."
      ],
      link: "https://youtu.be/RyagAgMxvA4?feature=shared",
      linkText: "Watch on YouTube"
    },
    {
      title: "Clarita Monrose - Uplifting & Giving a Platform for people to share their stories and inspire others!",
      imageUrl: "/lovable-uploads/2e5a3073-f328-407b-854e-c9a7acce07c6.png",
      challenge: "Clarita Monrose sought to create a podcast with a unique mission.",
      approach: [
        "Centered \"Begin Build Blossom\" podcast on uplifting individuals.",
        "Provided a platform for people to share previously unheard stories."
      ],
      results: [
        "Established a podcast with a core value of uplifting marginalized voices.",
        "Created a space for impactful storytelling.",
        "Prioritized social impact and mission fulfillment over traditional metrics."
      ],
      link: "https://www.youtube.com/@BeginBuildBlossom",
      linkText: "Visit YouTube Channel"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-podleaf-600 to-leaf-600 text-white py-12 md:py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Our Case Studies
              </h1>
              <p className="text-xl opacity-90">
                Real results from real clients - discover how we've helped businesses achieve their goals
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <CaseStudyCard key={index} {...study} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudy;
