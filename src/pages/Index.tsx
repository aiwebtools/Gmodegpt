
import React, { useEffect } from "react";
import MainLayout from "@/layouts/MainLayout";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import LegalDisclaimer from "@/components/LegalDisclaimer";

const Index: React.FC = () => {
  // Add dynamic grid background with canvas
  useEffect(() => {
    const createGridBackground = () => {
      const canvas = document.createElement('canvas');
      canvas.id = 'grid-canvas';
      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.style.pointerEvents = 'none';
      canvas.style.zIndex = '-1';
      canvas.style.opacity = '0.07';
      document.body.appendChild(canvas);
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawGrid();
      };
      
      const drawGrid = () => {
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const cellSize = 30;
        const rows = Math.ceil(canvas.height / cellSize);
        const cols = Math.ceil(canvas.width / cellSize);
        
        ctx.strokeStyle = 'rgba(157, 0, 255, 0.2)';
        ctx.lineWidth = 0.5;
        
        // Draw horizontal lines
        for (let i = 0; i <= rows; i++) {
          ctx.beginPath();
          ctx.moveTo(0, i * cellSize);
          ctx.lineTo(canvas.width, i * cellSize);
          ctx.stroke();
        }
        
        // Draw vertical lines
        for (let i = 0; i <= cols; i++) {
          ctx.beginPath();
          ctx.moveTo(i * cellSize, 0);
          ctx.lineTo(i * cellSize, canvas.height);
          ctx.stroke();
        }
        
        // Add occasional glow points at intersections
        ctx.fillStyle = 'rgba(0, 255, 255, 0.7)';
        for (let i = 0; i < cols; i += 4) {
          for (let j = 0; j < rows; j += 4) {
            if (Math.random() > 0.7) {
              ctx.beginPath();
              ctx.arc(i * cellSize, j * cellSize, 1.5, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      };
      
      window.addEventListener('resize', resizeCanvas);
      resizeCanvas();
      
      return () => {
        window.removeEventListener('resize', resizeCanvas);
        document.body.removeChild(canvas);
      };
    };
    
    const cleanup = createGridBackground();
    return cleanup;
  }, []);
  
  return (
    <MainLayout>
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <LegalDisclaimer />
    </MainLayout>
  );
};

export default Index;
