
import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DisclaimerPopup from "./components/DisclaimerPopup";
import { useLocalStorage } from "./hooks/useLocalStorage";

const queryClient = new QueryClient();

const App = () => {
  const [hasAcceptedDisclaimer, setHasAcceptedDisclaimer] = useLocalStorage('hasAcceptedDisclaimer', false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  
  useEffect(() => {
    // Show disclaimer popup if user hasn't accepted it yet
    if (!hasAcceptedDisclaimer) {
      setShowDisclaimer(true);
    }
  }, [hasAcceptedDisclaimer]);
  
  const handleAcceptDisclaimer = () => {
    setHasAcceptedDisclaimer(true);
    setShowDisclaimer(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <DisclaimerPopup 
          isOpen={showDisclaimer} 
          onAccept={handleAcceptDisclaimer} 
        />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
