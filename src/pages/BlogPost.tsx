import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { blogPosts } from '@/data/blogPosts';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-grow pt-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Article Not Found</h1>
            <Link to="/blog">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const scrollToSummary = () => {
    const summaryElement = document.getElementById('summary-section');
    summaryElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow pt-20">
        <article className="container mx-auto px-4 max-w-4xl py-8">
          <div className="mb-6">
            <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            <div className="flex justify-between items-start mb-6">
              <span className="text-sm text-muted-foreground">
                Published on {new Date(post.publishedDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <Button 
                onClick={scrollToSummary}
                variant="outline"
                size="sm"
                className="ml-4"
              >
                Jump to Summary ↓
              </Button>
            </div>
          </div>

          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              {post.title}
            </h1>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="text-muted-foreground text-lg leading-relaxed space-y-6">
              {post.content.split('\n\n').map((paragraph, index) => {
                // Handle **text** formatting for larger bold text
                const formattedParagraph = paragraph.split(/(\*\*[^*]+\*\*)/).map((part, partIndex) => {
                  if (part.startsWith('**') && part.endsWith('**')) {
                    const text = part.slice(2, -2);
                    return (
                      <span key={partIndex} className="text-2xl font-bold text-foreground">
                        {text}
                      </span>
                    );
                  }
                  return part;
                });
                
                return (
                  <p key={index} className="mb-6">
                    {formattedParagraph}
                  </p>
                );
              })}
            </div>
          </div>

          <section id="summary-section" className="mt-16 bg-muted/50 rounded-lg p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Summary
            </h2>
            <ul className="space-y-3 mb-8">
              {post.summary.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary font-bold mr-3 mt-1">•</span>
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-border pt-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Conclusion
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {post.conclusion}
              </p>
            </div>
          </section>

          <div className="mt-12 text-center">
            <Link to="/blog">
              <Button variant="outline" size="lg">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to All Articles
              </Button>
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;