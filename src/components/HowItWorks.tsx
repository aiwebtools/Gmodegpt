
import React from "react";
import { MessageSquare, MessagesSquare, BrainCircuit, PanelRight } from "lucide-react";

const steps = [
  {
    icon: <MessageSquare size={28} />,
    title: "Request Your Custom GPT",
    description: "Start by telling GODMODE GPT what type of specialized AI you need - from creative writer to technical analyst."
  },
  {
    icon: <BrainCircuit size={28} />,
    title: "AI Crafts Instructions",
    description: "GODMODE GPT automatically creates comprehensive operating instructions tailored to your specific requirements."
  },
  {
    icon: <MessagesSquare size={28} />,
    title: "Confirm & Activate",
    description: "Review the proposed GPT capabilities, then type 'YES' to activate your custom AI assistant."
  },
  {
    icon: <PanelRight size={28} />,
    title: "Experience Seamless Adaptation",
    description: "Your new specialized GPT is now active, ready to assist with your specific needs and tasks."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 px-4 relative overflow-hidden">
      <div 
        className="absolute inset-0 -z-10 bg-gradient-to-b from-cyberpunk-darker-bg/0 via-cyberpunk-neon-purple/5 to-cyberpunk-darker-bg/0"
        style={{
          maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black, transparent 70%)'
        }}
      ></div>
      
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-block mb-2 px-4 py-1 bg-cyberpunk-neon-purple/10 backdrop-blur-sm rounded-full border border-cyberpunk-neon-purple/30">
            <span className="text-sm font-medium text-cyberpunk-neon-purple">
              Simple Process
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-4">How GODMODE GPT Works</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your AI experience in just a few simple steps. Here's how to unleash the full potential of GODMODE GPT.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step number indicator with glow effect */}
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-br from-cyberpunk-neon-purple to-cyberpunk-neon-blue flex items-center justify-center text-white font-bold shadow-neon-purple z-10">
                {index + 1}
              </div>
              
              {/* Step content */}
              <div className="bg-cyberpunk-darker-bg/80 backdrop-blur-md border border-white/10 rounded-lg p-6 h-full transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-neon-purple">
                <div className="mb-4 p-3 inline-block rounded-lg bg-cyberpunk-neon-purple/10">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
              
              {/* Connector line between steps (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-cyberpunk-neon-purple to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
