
import React from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  className?: string;
  glowColor?: "blue" | "purple" | "pink";
  animate?: boolean;
  children: React.ReactNode;
}

const GlowCard: React.FC<GlowCardProps> = ({
  className,
  glowColor = "blue",
  animate = false,
  children,
}) => {
  const glowStyles = {
    blue: "shadow-neon border-cyberpunk-neon-blue/50",
    purple: "shadow-neon-purple border-cyberpunk-neon-purple/50",
    pink: "shadow-neon-pink border-cyberpunk-neon-pink/50",
  };
  
  return (
    <div
      className={cn(
        "relative bg-cyberpunk-darker-bg/80 backdrop-blur-sm rounded-lg border p-5 transition-all duration-300 hover:scale-[1.02]",
        glowStyles[glowColor],
        animate && "animate-pulse-glow",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlowCard;
