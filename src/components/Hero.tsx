
import React, { useRef, useEffect } from "react";
import Button3D from "./ui/Button3D";
import YoutubeEmbed from "./YoutubeEmbed";
import { ChevronDown } from "lucide-react";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;
      
      const moveX = (x - 0.5) * 15; // -7.5px to 7.5px movement
      const moveY = (y - 0.5) * 15; // -7.5px to 7.5px movement
      
      heroRef.current.style.backgroundPosition = `${50 + moveX * 0.5}% ${50 + moveY * 0.5}%`;
      
      // Apply subtle movement to hero content for parallax effect
      const heroContent = heroRef.current.querySelector('.hero-content') as HTMLElement;
      if (heroContent) {
        heroContent.style.transform = `translate(${moveX * -0.15}px, ${moveY * -0.15}px)`;
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 pb-12 px-4 md:px-0"
      style={{
        backgroundImage: `
          radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.05) 0%, transparent 70%),
          radial-gradient(circle at 30% 70%, rgba(157, 0, 255, 0.05) 0%, transparent 70%)
        `,
        backgroundSize: '120% 120%',
        backgroundPosition: 'center center',
        transition: 'background-position 0.2s ease-out'
      }}
    >
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid bg-repeat opacity-5"></div>
      
      {/* Moving particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-cyberpunk-neon-blue rounded-full opacity-25"
            style={{
              width: `${Math.random() * 5 + 2}px`,
              height: `${Math.random() * 5 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(1px)',
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `-${Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto max-w-7xl">
        <div className="hero-content transition-transform md:flex gap-8 items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            <div className="inline-block mb-2 px-4 py-1 bg-cyberpunk-neon-blue/10 backdrop-blur-sm rounded-full border border-cyberpunk-neon-blue/30">
              <span className="text-sm font-medium text-cyberpunk-neon-blue animate-pulse">
                Unleash Limitless AI Power
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
              <span className="block">Welcome to</span>
              <span className="neon-text-blue animate-text-glow">GODMODE GPT</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl md:max-w-none">
              The highly adaptive AI designed to transform into exactly what you need. 
              Seamlessly become any specialized GPT you can imagine, with no limits.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button3D 
                href="https://chatgpt.com/g/g-t3ovii6qP-godmode-gpt"
                variant="primary"
                size="lg"
                glowColor="blue"
                className="animate-pulse-glow"
              >
                ACCESS GODMODE GPT
              </Button3D>
              <Button3D 
                href="https://www.aiwebtools.ai"
                variant="outline"
                size="lg"
                glowColor="purple"
              >
                EXPLORE MORE AI TOOLS
              </Button3D>
            </div>
          </div>
          
          <div className="md:w-1/2 perspective">
            <div className="transform preserve-3d transition-all duration-700 relative">
              <YoutubeEmbed 
                videoId="or3JtZsq6Bc"
                autoplay={true}
                muted={false}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button
        onClick={scrollToFeatures}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70 hover:text-white transition-colors"
      >
        <span className="text-sm mb-2">Learn More</span>
        <ChevronDown className="animate-bounce" size={24} />
      </button>
    </div>
  );
};

export default Hero;
