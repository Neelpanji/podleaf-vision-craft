import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { blogPosts } from '@/data/blogPosts';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow pt-20">
        <div className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                PodLeaF Blog
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Expert insights, tips, and guides to help you create amazing podcasts and videos
              </p>
            </div>
          </div>
        </div>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-sm text-muted-foreground">
                        {new Date(post.publishedDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="group"
                    >
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                    </Link>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 line-clamp-3">
                      {post.content.substring(0, 200)}...
                    </p>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      Read Full Article →
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;