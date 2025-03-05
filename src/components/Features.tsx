
import React from "react";
import { Brain, Code, Search, Users, PenTool, Star, Bot, Database, Command, Lightbulb } from "lucide-react";
import GlowCard from "./ui/GlowCard";

const FEATURES = [
  {
    icon: <Brain size={32} className="text-cyberpunk-neon-blue" />,
    title: "Highly Adaptive AI",
    description: "Transforms into any specialized GPT based on your specific needs and requirements.",
    glowColor: "blue",
  },
  {
    icon: <Code size={32} className="text-cyberpunk-neon-purple" />,
    title: "Custom Instructions",
    description: "Automatically crafts comprehensive operating instructions based on your specifications.",
    glowColor: "purple",
  },
  {
    icon: <Search size={32} className="text-cyberpunk-neon-pink" />,
    title: "Web Search Integration",
    description: "Performs thorough web searches to provide up-to-date information for all tasks.",
    glowColor: "pink",
  },
  {
    icon: <PenTool size={32} className="text-cyberpunk-neon-blue" />,
    title: "Creative & Technical",
    description: "Excels at both creative tasks and technical analysis within user-defined parameters.",
    glowColor: "blue",
  },
  {
    icon: <Users size={32} className="text-cyberpunk-neon-purple" />,
    title: "Conversational Interface",
    description: "Engages in natural dialogue to clarify requirements and deliver optimal results.",
    glowColor: "purple",
  },
  {
    icon: <Database size={32} className="text-cyberpunk-neon-pink" />,
    title: "Data Analysis",
    description: "Analyzes complex data sets, statistics, and generates detailed visualizations.",
    glowColor: "pink",
  },
  {
    icon: <Bot size={32} className="text-cyberpunk-neon-blue" />,
    title: "Task Automation",
    description: "Breaks down complex projects into actionable steps for efficient completion.",
    glowColor: "blue",
  },
  {
    icon: <Command size={32} className="text-cyberpunk-neon-purple" />,
    title: "Precise Control",
    description: "Follows instructions exactly while maintaining the flexibility to adapt as needed.",
    glowColor: "purple",
  },
  {
    icon: <Lightbulb size={32} className="text-cyberpunk-neon-pink" />,
    title: "Continuous Learning",
    description: "Evolves based on feedback to better meet your changing requirements over time.",
    glowColor: "pink",
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 px-4 bg-cyberpunk-darker-bg/70">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-block mb-2 px-4 py-1 bg-cyberpunk-neon-blue/10 backdrop-blur-sm rounded-full border border-cyberpunk-neon-blue/30">
            <span className="text-sm font-medium text-cyberpunk-neon-blue">
              Adaptive Capabilities
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Unleash the Power</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            GODMODE GPT combines versatility with precision to become whatever specialized assistant you need, when you need it.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <GlowCard
              key={index}
              glowColor={feature.glowColor as "blue" | "purple" | "pink"}
              className="h-full flex flex-col items-center text-center p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 rounded-full p-3 bg-gradient-to-br from-cyberpunk-darker-bg to-cyberpunk-dark-bg border border-white/5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
