
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-podleaf-600 to-leaf-600 text-white py-12 md:py-16">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Our Portfolio
              </h1>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList>
                  <TabsTrigger value="all">All Projects</TabsTrigger>
                  <TabsTrigger value="podcast">Podcast Projects</TabsTrigger>
                  <TabsTrigger value="video">Video Projects</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  <a href="https://www.youtube.com/@AJuniorVC" target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-lg shadow-sm transition-transform hover:scale-105">
                    <img 
                      src="/lovable-uploads/a68092ee-d8b8-42a9-b956-d7bd5c63dff6.png" 
                      alt="Founders Unfiltered Podcast" 
                      className="w-full h-64 object-cover"
                    />
                  </a>
                  <a href="https://podcasts.apple.com/us/podcast/live-better-sell-better/id1518419694" target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-lg shadow-sm transition-transform hover:scale-105">
                    <img 
                      src="/lovable-uploads/cb868364-15ba-49b5-9f0d-844c4e25263a.png" 
                      alt="Live Better Sell Better Podcast" 
                      className="w-full h-64 object-cover"
                    />
                  </a>
                  <a href="https://podcasts.apple.com/us/podcast/intuition-your-success-compass/id1458617878" target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-lg shadow-sm transition-transform hover:scale-105">
                    <img 
                      src="/lovable-uploads/9259c5f3-06f8-4f1a-b748-089ea3619258.png" 
                      alt="Intuition: Your First Sense Podcast" 
                      className="w-full h-64 object-cover"
                    />
                  </a>
                  <a href="https://podcasts.apple.com/us/podcast/finding-fearless/id1320634079" target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-lg shadow-sm transition-transform hover:scale-105">
                    <img 
                      src="/lovable-uploads/7bacbc5d-3417-4eed-a929-9d8c432e70c9.png" 
                      alt="Finding Fearless Podcast" 
                      className="w-full h-64 object-cover"
                    />
                  </a>
                  <a href="https://www.youtube.com/@weekdayworks" target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-lg shadow-sm transition-transform hover:scale-105">
                    <img 
                      src="/lovable-uploads/be8d03a2-c88b-4c94-b895-0a66c6c80668.png" 
                      alt="The Weekday Show" 
                      className="w-full h-64 object-cover"
                    />
                  </a>
                  <a href="https://podcasts.apple.com/us/podcast/bravo-unscripted/id1693160893" target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-lg shadow-sm transition-transform hover:scale-105">
                    <img 
                      src="/lovable-uploads/139aa0d1-f77a-44ad-be2f-edffa4913527.png" 
                      alt="Bravo Unscripted" 
                      className="w-full h-64 object-cover"
                    />
                  </a>
                  <Link to="/case-study" className="block overflow-hidden rounded-lg shadow-sm transition-transform hover:scale-105">
                    <img 
                      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                      alt="Coding Tutorials" 
                      className="w-full h-64 object-cover"
                    />
                  </Link>
                  <Link to="/case-study" className="block overflow-hidden rounded-lg shadow-sm transition-transform hover:scale-105">
                    <img 
                      src="https://images.unsplash.com/photo-1498936178812-4b2e558d2937" 
                      alt="Nature Documentary" 
                      className="w-full h-64 object-cover"
                    />
                  </Link>
                </div>
              </TabsContent>

              <TabsContent value="podcast">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  <a href="https://www.youtube.com/@AJuniorVC" target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-lg shadow-sm transition-transform hover:scale-105">
                    <img 
                      src="/lovable-uploads/a68092ee-d8b8-42a9-b956-d7bd5c63dff6.png" 
                      alt="Founders Unfiltered Podcast" 
                      className="w-full h-64 object-cover"
                    />
                  </a>
                  <a href="https://podcasts.apple.com/us/podcast/live-better-sell-better/id1518419694" target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-lg shadow-sm transition-transform hover:scale-105">
                    <img 
                      src="/lovable-uploads/cb868364-15ba-49b5-9f0d-844c4e25263a.png" 
                      alt="Live Better Sell Better Podcast" 
                      className="w-full h-64 object-cover"
                    />
                  </a>
                  <a href="https://podcasts.apple.com/us/podcast/intuition-your-success-compass/id1458617878" target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-lg shadow-sm transition-transform hover:scale-105">
                    <img 
                      src="/lovable-uploads/9259c5f3-06f8-4f1a-b748-089ea3619258.png" 
                      alt="Intuition: Your First Sense Podcast" 
                      className="w-full h-64 object-cover"
                    />
                  </a>
                  <a href="https://podcasts.apple.com/us/podcast/finding-fearless/id1320634079" target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-lg shadow-sm transition-transform hover:scale-105">
                    <img 
                      src="/lovable-uploads/7bacbc5d-3417-4eed-a929-9d8c432e70c9.png" 
                      alt="Finding Fearless Podcast" 
                      className="w-full h-64 object-cover"
                    />
                  </a>
                  <a href="https://www.youtube.com/@weekdayworks" target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-lg shadow-sm transition-transform hover:scale-105">
                    <img 
                      src="/lovable-uploads/be8d03a2-c88b-4c94-b895-0a66c6c80668.png" 
                      alt="The Weekday Show" 
                      className="w-full h-64 object-cover"
                    />
                  </a>
                  <a href="https://podcasts.apple.com/us/podcast/bravo-unscripted/id1693160893" target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-lg shadow-sm transition-transform hover:scale-105">
                    <img 
                      src="/lovable-uploads/139aa0d1-f77a-44ad-be2f-edffa4913527.png" 
                      alt="Bravo Unscripted" 
                      className="w-full h-64 object-cover"
                    />
                  </a>
                </div>
              </TabsContent>

              <TabsContent value="video">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  <Link to="/case-study" className="block overflow-hidden rounded-lg shadow-sm transition-transform hover:scale-105">
                    <img 
                      src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                      alt="Product Demo Series" 
                      className="w-full h-64 object-cover"
                    />
                  </Link>
                  <Link to="/case-study" className="block overflow-hidden rounded-lg shadow-sm transition-transform hover:scale-105">
                    <img 
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
                      alt="Company Culture Vlog" 
                      className="w-full h-64 object-cover"
                    />
                  </Link>
                  <Link to="/case-study" className="block overflow-hidden rounded-lg shadow-sm transition-transform hover:scale-105">
                    <img 
                      src="https://images.unsplash.com/photo-1483058712412-4245e9b90334" 
                      alt="Digital Marketing Tutorials" 
                      className="w-full h-64 object-cover"
                    />
                  </Link>
                  <Link to="/case-study" className="block overflow-hidden rounded-lg shadow-sm transition-transform hover:scale-105">
                    <img 
                      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                      alt="Coding Tutorials" 
                      className="w-full h-64 object-cover"
                    />
                  </Link>
                </div>
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
