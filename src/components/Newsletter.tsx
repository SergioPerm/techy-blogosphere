import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thanks for subscribing!",
      description: "You'll receive our latest updates in your inbox.",
    });
    setEmail("");
  };

  return (
    <div className="glass-card p-8 max-w-xl mx-auto">
      <h3 className="font-display text-2xl font-semibold mb-4 text-center">
        Stay Updated
      </h3>
      <p className="text-primary-foreground/80 text-center mb-6">
        Get the latest tech insights delivered to your inbox
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-grow px-4 py-2 rounded-lg bg-background border border-primary/20 focus:outline-none focus:border-secondary transition-colors"
          required
        />
        <button
          type="submit"
          className="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors font-medium"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;