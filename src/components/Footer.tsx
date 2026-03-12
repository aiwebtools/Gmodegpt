
import React from "react";
import Button3D from "./ui/Button3D";
import { Mail, Phone } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-cyberpunk-darker-bg/90 border-t border-white/10 pt-12 pb-6 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Logo & Description */}
          <div>
            <div className="mb-4">
              <div className="text-2xl font-bold neon-text-blue mb-1">GODMODE GPT</div>
              <div className="text-xs text-gray-400">
                <a 
                  href="https://aiwebtools.lovable.app/?via=aiwebtools" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Presented by AiWebTools.Ai
                </a>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Transform your AI experience with the most versatile assistant that adapts to your specific needs.
            </p>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#features" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#how-it-works" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Legal */}
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/?via=aiwebtools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a 
                  href="#legal" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Legal Disclaimer
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:+14758008096"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Phone size={16} />
                  <span>(475) 800-8096</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Contact@ai-webtools.com"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail size={16} />
                  <span>Contact@ai-webtools.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button3D 
            href="https://chatgpt.com/g/g-t3ovii6qP-godmode-gpt"
            variant="primary"
            glowColor="blue"
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
        </div>
        
        {/* Floating "More AI Tools" button */}
        <div className="fixed bottom-4 right-4 z-20">
          <Button3D 
            href="https://aiwebtools.lovable.app/?via=aiwebtools"
            variant="primary"
            glowColor="purple"
            className="rounded-full px-5"
          >
            More AI Tools
          </Button3D>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm mt-8 pt-6 border-t border-white/5">
          <p>© {new Date().getFullYear()} AiWebTools.Ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
