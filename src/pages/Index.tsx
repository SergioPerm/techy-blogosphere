import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import BlogCard from "@/components/BlogCard";
import Newsletter from "@/components/Newsletter";
import { Computer } from "lucide-react";

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const blogPosts = [
    {
      title: "Building Scalable iOS Apps with SwiftUI",
      excerpt: "Learn how to create maintainable and scalable iOS applications using SwiftUI's latest features.",
      date: "Mar 15, 2024",
      tag: "iOS Development"
    },
    {
      title: "Advanced Core Data Techniques",
      excerpt: "Deep dive into Core Data's advanced features and optimization strategies.",
      date: "Mar 10, 2024",
      tag: "Database"
    },
    {
      title: "iOS Performance Optimization",
      excerpt: "Tips and tricks for optimizing your iOS app's performance and user experience.",
      date: "Mar 5, 2024",
      tag: "Performance"
    }
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary mb-8">
            <Computer size={18} />
            <span>iOS Developer & Tech Writer</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
            Exploring the Future of
            <span className="text-secondary"> iOS Development</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Deep insights into iOS development, Swift programming, and mobile technology trends
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section id="blog" className="py-20 px-6 bg-background/50">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl font-bold mb-12 text-center">
            Latest Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard
                key={index}
                {...post}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <Newsletter />
        </div>
      </section>
    </div>
  );
};

export default Index;