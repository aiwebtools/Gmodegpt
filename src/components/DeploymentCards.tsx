import React from "react";
import GlowCard from "./ui/GlowCard";
import { FileCode, Rocket, Terminal, Server, Settings, Cloud, ClipboardCopy } from "lucide-react";
const deploymentSteps = [{
  icon: <FileCode size={32} className="text-cyberpunk-neon-blue" />,
  title: "Custom Instructions Generator",
  description: "GODMODE GPT writes complete operational instructions tailored to your exact needs and vision.",
  glowColor: "blue"
}, {
  icon: <Terminal size={32} className="text-cyberpunk-neon-purple" />,
  title: "Step-by-Step Implementation",
  description: "Follow clear, actionable steps to bring your custom GPT to life with precision and ease.",
  glowColor: "purple"
}, {
  icon: <Settings size={32} className="text-cyberpunk-neon-pink" />,
  title: "Godly Configuration",
  description: "Configure advanced parameters that transform an ordinary AI into your perfect specialized assistant.",
  glowColor: "pink"
}, {
  icon: <Rocket size={32} className="text-cyberpunk-neon-blue" />,
  title: "Instant Deployment",
  description: "Simply type 'YES' to activate your custom GPT and unleash its full capabilities immediately.",
  glowColor: "blue"
}, {
  icon: <Server size={32} className="text-cyberpunk-neon-purple" />,
  title: "Versatile Integration",
  description: "Deploy GPTs specialized in creative writing, data analysis, technical support, or any niche you need.",
  glowColor: "purple"
}, {
  icon: <Cloud size={32} className="text-cyberpunk-neon-pink" />,
  title: "Limitless Possibilities",
  description: "Become godly with the power to create infinite specialized AI assistants on demand.",
  glowColor: "pink"
}];
const DeploymentCards: React.FC = () => {
  return <section id="deployment" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cyberpunk-darker-bg/0 via-cyberpunk-neon-blue/5 to-cyberpunk-darker-bg/0" style={{
      maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 70%)',
      WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black, transparent 70%)'
    }}></div>
      
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-block mb-2 px-4 py-1 bg-cyberpunk-neon-blue/10 backdrop-blur-sm rounded-full border border-cyberpunk-neon-blue/30">
            <span className="text-sm font-medium text-cyberpunk-neon-blue">
              Custom GPT Deployment
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Become Godly with Custom GPTs</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            GODMODE GPT provides comprehensive operational instructions from the start, enabling you to deploy and control your own specialized AI assistants with godlike power.
          </p>
          
          {/* Added prominent copy and paste instruction */}
          <div className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-cyberpunk-neon-purple/20 border border-cyberpunk-neon-purple/40 rounded-lg animate-pulse">
            <ClipboardCopy className="text-cyberpunk-neon-purple" />
            <p className="text-lg font-bold text-white">Simply Copy and Paste them into then CHATGPT Custom GPT builder to deploy</p>
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {deploymentSteps.map((step, index) => <GlowCard key={index} glowColor={step.glowColor as "blue" | "purple" | "pink"} className="h-full flex flex-col items-center text-center p-6 transition-transform duration-300 hover:-translate-y-1" reducedMotion={false}>
              <div className="mb-4 rounded-full p-3 bg-gradient-to-br from-cyberpunk-darker-bg to-cyberpunk-dark-bg border border-white/5">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
              
              {/* Added copy and paste hint at the bottom of each card */}
              {index === 3 && <div className="mt-4 pt-4 border-t border-white/10 w-full">
                  <p className="text-sm font-medium text-cyberpunk-neon-blue flex items-center justify-center gap-1">
                    <ClipboardCopy size={14} />
                    Copy & Paste into OpenAI GPT Builder
                  </p>
                </div>}
            </GlowCard>)}
        </div>
      </div>
    </section>;
};
export default DeploymentCards;