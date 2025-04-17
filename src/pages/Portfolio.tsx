
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
                  <Link to="/case-study" className="block overflow-hidden rounded-lg shadow-sm transition-transform hover:scale-105">
                    <img 
                      src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                      alt="Business Leaders Podcast" 
                      className="w-full h-64 object-cover"
                    />
                  </Link>
                  <Link to="/case-study" className="block overflow-hidden rounded-lg shadow-sm transition-transform hover:scale-105">
                    <img 
                      src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                      alt="Health & Wellness Show" 
                      className="w-full h-64 object-cover"
                    />
                  </Link>
                  <Link to="/case-study" className="block overflow-hidden rounded-lg shadow-sm transition-transform hover:scale-105">
                    <img 
                      src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                      alt="Tech Talk Weekly" 
                      className="w-full h-64 object-cover"
                    />
                  </Link>
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
                  <Link to="/case-study" className="block overflow-hidden rounded-lg shadow-sm transition-transform hover:scale-105">
                    <img 
                      src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                      alt="Business Leaders Podcast" 
                      className="w-full h-64 object-cover"
                    />
                  </Link>
                  <Link to="/case-study" className="block overflow-hidden rounded-lg shadow-sm transition-transform hover:scale-105">
                    <img 
                      src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                      alt="Health & Wellness Show" 
                      className="w-full h-64 object-cover"
                    />
                  </Link>
                  <Link to="/case-study" className="block overflow-hidden rounded-lg shadow-sm transition-transform hover:scale-105">
                    <img 
                      src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                      alt="Tech Talk Weekly" 
                      className="w-full h-64 object-cover"
                    />
                  </Link>
                  <Link to="/case-study" className="block overflow-hidden rounded-lg shadow-sm transition-transform hover:scale-105">
                    <img 
                      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                      alt="Team Podcast" 
                      className="w-full h-64 object-cover"
                    />
                  </Link>
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
