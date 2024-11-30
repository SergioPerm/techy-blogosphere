import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 glass-card px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="font-display text-xl font-bold">
          TechSpace
        </a>
        
        <div className="hidden md:flex space-x-8">
          <a href="/" className="nav-link">Home</a>
          <a href="#blog" className="nav-link">Blog</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-card py-4 animate-fade-in">
          <div className="flex flex-col space-y-4 px-6">
            <a href="/" className="nav-link">Home</a>
            <a href="#blog" className="nav-link">Blog</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;