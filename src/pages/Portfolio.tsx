
import React, { useEffect, useState } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PortfolioPodcasts from '@/components/Portfolio/PortfolioPodcasts';
import PortfolioVideos from '@/components/Portfolio/PortfolioVideos';

const PORTFOLIO_HASH_TO_TAB: Record<string, string> = {
  '#video': 'video',
  '#podcast': 'podcast',
};

const Portfolio = () => {
  const [tab, setTab] = useState('podcast');

  // Check hash on mount and when it changes
  useEffect(() => {
    const selectTabFromHash = () => {
      const hash = window.location.hash;
      if (PORTFOLIO_HASH_TO_TAB[hash]) {
        setTab(PORTFOLIO_HASH_TO_TAB[hash]);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      } else {
        setTab('podcast');
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
    };

    selectTabFromHash();
    window.addEventListener('hashchange', selectTabFromHash);

    return () => {
      window.removeEventListener('hashchange', selectTabFromHash);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-podleaf-600 to-leaf-600 text-white py-12 md:py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Our Portfolio
              </h1>
            </div>
          </div>
        </section>

        <section className="py-16 bg-black">
          <div className="container px-4 sm:px-6 lg:px-8">
            <Tabs value={tab} onValueChange={setTab} className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="bg-gray-900">
                  <TabsTrigger value="podcast" className="text-lg font-medium px-6 py-3 data-[state=active]:bg-podleaf-600 data-[state=active]:text-black">
                    Podcast Projects
                  </TabsTrigger>
                  <TabsTrigger value="video" className="text-lg font-medium px-6 py-3 data-[state=active]:bg-podleaf-600 data-[state=active]:text-black">
                    Video Projects
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="podcast" className="p-6 bg-black">
                <PortfolioPodcasts />
              </TabsContent>

              <TabsContent value="video" className="p-6 bg-black">
                <PortfolioVideos />
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
