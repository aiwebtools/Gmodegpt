
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Button3D from "./ui/Button3D";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cyberpunk-darker-bg/80 backdrop-blur-md py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <div className="relative overflow-visible">
            <span className="text-2xl font-bold tracking-tighter neon-text-blue">
              GODMODE GPT
            </span>
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-xs text-gray-400 hover:text-white transition-colors mt-0.5"
            >
              Presented by AiWebTools.Ai
            </a>
            <div className="absolute -inset-1 rounded-full bg-cyberpunk-neon-blue/20 blur-md -z-10"></div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-x-6">
          <Button3D 
            href="https://chatgpt.com/g/g-t3ovii6qP-godmode-gpt"
            variant="primary"
            glowColor="blue"
            className="animate-pulse-glow"
          >
            ACCESS GODMODE GPT
          </Button3D>
          <Button3D 
            href="https://www.aiwebtools.ai"
            variant="outline"
            glowColor="purple"
          >
            MORE AI TOOLS
          </Button3D>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 p-8">
          <Button3D 
            href="https://chatgpt.com/g/g-t3ovii6qP-godmode-gpt"
            variant="primary"
            glowColor="blue"
            size="lg"
            fullWidth
          >
            ACCESS GODMODE GPT
          </Button3D>
          <Button3D 
            href="https://www.aiwebtools.ai"
            variant="outline"
            glowColor="purple"
            size="lg"
            fullWidth
          >
            MORE AI TOOLS
          </Button3D>
          <button
            className="mt-8 text-white p-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
