
import { useState, useEffect } from "react";
import { X, Shield } from "lucide-react";
import Button3D from "./ui/Button3D";

interface DisclaimerPopupProps {
  onAccept: () => void;
  isOpen: boolean;
}

const DisclaimerPopup = ({ onAccept, isOpen }: DisclaimerPopupProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-md overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-cyberpunk-darker-bg/90 to-cyberpunk-dark-bg/90 shadow-2xl animate-fade-in"
      >
        {/* Header with close button */}
        <div className="flex items-center justify-between border-b border-white/10 p-4">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-cyberpunk-neon-purple" />
            <h2 className="bg-gradient-to-r from-cyberpunk-neon-blue to-cyberpunk-neon-purple bg-clip-text text-xl font-bold text-transparent">
              DISCLAIMER
            </h2>
          </div>
          <button 
            onClick={onAccept}
            className="rounded-full p-1 text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-5 space-y-4">
          <p className="text-sm text-white/80 leading-relaxed">
            By using <span className="neon-text-blue font-bold">GODMODE GPT</span>, you acknowledge that all information and suggestions provided are for general purposes only. This AI assistant is not a substitute for professional advice in legal, medical, or other specialized fields.
          </p>
          
          <p className="text-sm text-white/80 leading-relaxed">
            The tool may occasionally produce inaccurate results. You assume full responsibility for verifying information and for how you use the outputs from this system.
          </p>
          
          <p className="text-sm text-white/80 leading-relaxed">
            <span className="neon-text-purple font-bold">We do not store or retain your conversations</span> beyond what's necessary for the immediate functionality of the service.
          </p>
        </div>
        
        {/* Action button */}
        <div className="flex justify-center p-5 pt-2">
          <Button3D
            onClick={onAccept}
            className="w-full sm:w-auto group relative overflow-hidden"
            variant="primary"
            glowColor="purple"
            size="lg"
          >
            <span className="relative z-10 font-extrabold tracking-wide">I AGREE</span>
            <span className="absolute inset-0 bg-gradient-to-r from-cyberpunk-neon-purple to-cyberpunk-neon-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Button3D>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
