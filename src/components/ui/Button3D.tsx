
import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface Button3DProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  glowColor?: "blue" | "purple" | "pink";
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button3D = ({
  href,
  variant = "primary",
  size = "md",
  glowColor = "blue",
  fullWidth = false,
  className,
  children,
  ...props
}: Button3DProps) => {
  const [isPressed, setIsPressed] = useState(false);
  
  const variantStyles = {
    primary: "bg-gradient-to-r from-cyberpunk-neon-blue to-cyberpunk-neon-purple text-white",
    secondary: "bg-gradient-to-r from-cyberpunk-neon-purple to-cyberpunk-neon-pink text-white",
    outline: "bg-transparent border-2 border-cyberpunk-neon-blue text-white",
  };
  
  const sizeStyles = {
    sm: "text-xs py-1 px-3",
    md: "text-sm py-2 px-5",
    lg: "text-base py-3 px-7",
  };
  
  const glowStyles = {
    blue: "shadow-neon hover:shadow-neon",
    purple: "shadow-neon-purple hover:shadow-neon-purple",
    pink: "shadow-neon-pink hover:shadow-neon-pink",
  };
  
  const baseStyles = cn(
    "relative font-bold rounded-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 overflow-hidden",
    variantStyles[variant],
    sizeStyles[size],
    glowStyles[glowColor],
    fullWidth ? "w-full" : "",
    isPressed ? "translate-y-0" : "",
    className
  );
  
  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);
  const handleMouseLeave = () => setIsPressed(false);
  
  // Add a subtle glow/sparkle effect on hover
  const buttonContent = (
    <>
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-20 transition-opacity z-0"></span>
    </>
  );
  
  if (href) {
    return (
      <a
        href={href}
        className={baseStyles}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        target="_blank"
        rel="noopener noreferrer"
      >
        {buttonContent}
      </a>
    );
  }
  
  return (
    <button
      className={baseStyles}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {buttonContent}
    </button>
  );
};

export default Button3D;
