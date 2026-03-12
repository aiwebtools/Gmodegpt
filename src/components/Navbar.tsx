
import React, { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import Button3D from "./ui/Button3D";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cyberpunk-darker-bg/90 backdrop-blur-md py-2 shadow-lg"
          : "bg-transparent py-3 sm:py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center z-50">
          <div className="relative overflow-visible">
            <span className="text-lg sm:text-xl md:text-2xl font-bold tracking-tighter neon-text-blue">
              GODMODE GPT
            </span>
            <a 
              href="https://aiwebtools.lovable.app/?via=aiwebtools" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-[10px] sm:text-xs text-gray-400 hover:text-white transition-colors mt-0.5"
            >
              Presented by AiWebTools.Ai
            </a>
            <div className="absolute -inset-1 rounded-full bg-cyberpunk-neon-blue/20 blur-md -z-10"></div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-x-4 lg:gap-x-6">
          <Button3D 
            href="https://chatgpt.com/g/g-t3ovii6qP-godmode-gpt"
            variant="primary"
            glowColor="blue"
            className="animate-pulse-glow"
          >
            ACCESS GODMODE GPT
          </Button3D>
          <Button3D 
            href="https://aiwebtools.lovable.app/?via=aiwebtools"
            variant="outline"
            glowColor="purple"
          >
            MORE AI TOOLS
          </Button3D>
        </nav>

        {/* Mobile Menu Button - touch-optimized */}
        <button
          className="md:hidden text-white p-3 -mr-2 z-50 touch-manipulation"
          onClick={toggleMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu - optimized for instant response */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden flex flex-col justify-center animate-fade-in"
          style={{ animationDuration: '150ms' }}
        >
          <div className="flex flex-col items-center justify-center h-full gap-5 p-6 safe-area-inset">
            <Button3D 
              href="https://chatgpt.com/g/g-t3ovii6qP-godmode-gpt"
              variant="primary"
              glowColor="blue"
              size="lg"
              fullWidth
              className="w-full max-w-[300px] text-center"
            >
              ACCESS GODMODE GPT
            </Button3D>
            <Button3D 
              href="https://aiwebtools.lovable.app/?via=aiwebtools"
              variant="outline"
              glowColor="purple"
              size="lg"
              fullWidth
              className="w-full max-w-[300px] text-center"
            >
              MORE AI TOOLS
            </Button3D>
            <button
              className="mt-4 text-white p-3 rounded-full bg-cyberpunk-darker-bg/80 border border-white/10 touch-manipulation active:scale-95 transition-transform"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
