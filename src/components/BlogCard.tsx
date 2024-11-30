import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  className?: string;
  animationDelay?: string;
}

const BlogCard = ({ title, excerpt, date, tag, className, animationDelay }: BlogCardProps) => {
  // Convert title to URL-friendly slug
  const slug = title.toLowerCase().replace(/\s+/g, '-');

  return (
    <Link 
      to={`/article/${slug}`}
      className={cn(
        "glass-card p-3 md:p-6 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg block group",
        className
      )}
      style={animationDelay ? { animationDelay } : undefined}
    >
      <div className="flex flex-col h-full">
        <span className="text-[10px] md:text-xs font-medium text-primary/80 mb-1 md:mb-2">{date}</span>
        <span className="inline-block px-2 md:px-3 py-0.5 md:py-1 rounded-full text-[10px] md:text-xs font-medium bg-secondary/10 text-secondary mb-2 md:mb-4 w-fit">
          {tag}
        </span>
        <h3 className="font-display text-sm md:text-xl font-semibold mb-2 md:mb-3 group-hover:text-secondary transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-primary-foreground/80 text-xs md:text-sm flex-grow line-clamp-2 md:line-clamp-none">
          {excerpt}
        </p>
        <div className="mt-2 md:mt-4 flex items-center text-xs md:text-sm text-primary group-hover:text-secondary transition-colors">
          Read More →
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;