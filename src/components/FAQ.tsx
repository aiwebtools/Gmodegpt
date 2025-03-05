
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqItems = [
  {
    question: "What exactly is GODMODE GPT?",
    answer: "GODMODE GPT is a highly adaptive AI designed to transform into any specialized GPT based on your specific requirements. It automatically creates comprehensive operating instructions tailored to your needs and becomes the exact AI assistant you envision."
  },
  {
    question: "How does GODMODE GPT differ from standard GPT?",
    answer: "Unlike standard GPT models that have fixed capabilities, GODMODE GPT can dynamically adapt its behavior, focus, and expertise to match exactly what you need. It creates specialized operating instructions for itself based on your requirements and follows them precisely."
  },
  {
    question: "Can GODMODE GPT perform tasks that other GPTs cannot?",
    answer: "GODMODE GPT works within the capabilities of advanced language models but excels at adapting to specific roles and maintaining that role throughout your interaction. Its key advantage is versatility and the ability to craft specialized instructions for any task you need assistance with."
  },
  {
    question: "How do I activate a specific GPT mode?",
    answer: "Simply tell GODMODE GPT what type of specialized AI you need. It will create comprehensive operating instructions based on your requirements, then ask for your confirmation. Type 'YES' when prompted, and your custom GPT will be activated."
  },
  {
    question: "Can I switch between different GPT modes in a single session?",
    answer: "Yes, you can request GODMODE GPT to transform into a different specialized assistant at any point in your conversation. Simply describe the new role you need it to fulfill, and it will adapt accordingly."
  },
  {
    question: "Is GODMODE GPT suitable for business use?",
    answer: "Absolutely. GODMODE GPT is designed to assist with a wide range of business tasks from content creation and data analysis to customer service scripting and process optimization. Its adaptability makes it valuable across different departments and use cases."
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-block mb-2 px-4 py-1 bg-cyberpunk-neon-blue/10 backdrop-blur-sm rounded-full border border-cyberpunk-neon-blue/30">
            <span className="text-sm font-medium text-cyberpunk-neon-blue">
              Got Questions?
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about GODMODE GPT and how it can transform your AI experience.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="mb-4 border border-white/10 rounded-lg overflow-hidden transition-all duration-300 hover:border-cyberpunk-neon-blue/30"
            >
              <button
                className="w-full flex justify-between items-center p-4 text-left bg-cyberpunk-darker-bg/60 hover:bg-cyberpunk-darker-bg/80 transition-colors"
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-lg">{item.question}</span>
                <span className="flex-shrink-0 ml-4">
                  {openIndex === index ? (
                    <Minus size={20} className="text-cyberpunk-neon-blue" />
                  ) : (
                    <Plus size={20} className="text-cyberpunk-neon-blue" />
                  )}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-4 bg-black/20 text-gray-300">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
