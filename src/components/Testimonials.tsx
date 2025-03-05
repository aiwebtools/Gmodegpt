
import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Thompson",
    role: "Content Creator",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "GODMODE GPT has been a game-changer for my content creation process. I can have it transform into a specialized writing assistant for different topics, and it adapts perfectly every time.",
    stars: 5
  },
  {
    name: "Sarah Chen",
    role: "Data Scientist",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "I've tried many AI tools, but none compare to the versatility of GODMODE GPT. I use it for data analysis, visualization planning, and even explaining complex concepts to clients.",
    stars: 5
  },
  {
    name: "Michael Rodriguez",
    role: "Software Developer",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    content: "The ability to have GODMODE GPT transform into a coding assistant that knows exactly what I need has saved me countless hours of debugging and research. Absolutely essential tool.",
    stars: 5
  },
  {
    name: "Emma Wilson",
    role: "Digital Marketer",
    image: "https://randomuser.me/api/portraits/women/23.jpg",
    content: "What impresses me most is how GODMODE GPT can switch between creative and analytical thinking so seamlessly. One minute it's helping me craft engaging copy, the next it's analyzing campaign data.",
    stars: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 px-4 bg-cyberpunk-darker-bg/40">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-block mb-2 px-4 py-1 bg-cyberpunk-neon-pink/10 backdrop-blur-sm rounded-full border border-cyberpunk-neon-pink/30">
            <span className="text-sm font-medium text-cyberpunk-neon-pink">
              User Experiences
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-4">What People Are Saying</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how GODMODE GPT is transforming workflows and delivering exceptional results across different fields.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-black/20 backdrop-blur-md border border-white/10 rounded-lg p-6 relative overflow-hidden transition-all duration-300 hover:shadow-neon-pink"
            >
              {/* Decorative element */}
              <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-cyberpunk-neon-pink/20 blur-xl"></div>
              
              <div className="flex items-start gap-4 relative z-10">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-cyberpunk-neon-pink">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {Array.from({ length: testimonial.stars }).map((_, i) => (
                      <Star key={i} size={14} className="fill-cyberpunk-neon-pink text-cyberpunk-neon-pink" />
                    ))}
                  </div>
                  
                  <p className="mb-4 text-gray-300 italic">"{testimonial.content}"</p>
                  
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
