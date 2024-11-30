import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Article = () => {
  const { slug } = useParams();

  // This would typically fetch the article data based on the slug
  // For now, we'll use static content
  const article = {
    title: "Building Scalable iOS Apps with SwiftUI",
    date: "Mar 15, 2024",
    tag: "iOS Development",
    content: `
      SwiftUI has revolutionized the way we build iOS applications, offering a declarative syntax that makes UI development more intuitive and maintainable. In this article, we'll explore advanced techniques for building scalable applications using SwiftUI's latest features.

      First, let's look at the core principles of SwiftUI's view hierarchy and state management. Understanding these fundamentals is crucial for building applications that can grow without becoming unwieldy.

      Key topics we'll cover:
      • View composition and reusability
      • State management patterns
      • Performance optimization
      • Integration with UIKit
      • Testing strategies
    `
  };

  return (
    <div className="min-h-screen animate-fade-in">
      <Navbar />
      <main className="container mx-auto px-6 py-20">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Articles
        </Link>
        
        <article className="max-w-3xl mx-auto">
          <span className="text-sm font-medium text-primary/80">{article.date}</span>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary ml-4">
            {article.tag}
          </span>
          
          <h1 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-8">
            {article.title}
          </h1>
          
          <div className="prose prose-invert prose-primary max-w-none">
            {article.content.split('\n').map((paragraph, index) => (
              <p key={index} className="text-primary-foreground/80 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
};

export default Article;