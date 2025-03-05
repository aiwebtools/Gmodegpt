
import { useEffect, useRef } from "react";

interface YoutubeEmbedProps {
  videoId: string;
  autoplay?: boolean;
  muted?: boolean;
}

const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({
  videoId,
  autoplay = true,
  muted = false,
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Set up the Intersection Observer to load YouTube iframe only when in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && iframeRef.current) {
            // Set the src attribute when the component enters the viewport
            const params = new URLSearchParams({
              autoplay: autoplay ? "1" : "0",
              mute: muted ? "1" : "0",
              vq: "hd1080", // Force 1080p
              enablejsapi: "1",
              modestbranding: "1",
              rel: "0",
              showinfo: "0",
            });
            
            iframeRef.current.src = `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
            
            // Disconnect observer after loading
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 } // Trigger when at least 10% of the element is visible
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [videoId, autoplay, muted]);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full aspect-video relative bg-black/20 rounded-lg overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 border-t-2 border-cyberpunk-neon-blue animate-spin rounded-full"></div>
        </div>
        <iframe
          ref={iframeRef}
          className="w-full h-full absolute inset-0 z-10 rounded-lg"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        
        {/* Animated Glow Border */}
        <div className="absolute inset-0 z-20 pointer-events-none rounded-lg border-2 border-cyberpunk-neon-blue shadow-neon opacity-70"></div>
      </div>
      
      {/* Added anthem text */}
      <p className="text-xs text-cyberpunk-neon-blue font-medium tracking-wider mt-2 uppercase">
        THE GODMODE GPT ANTHEM
      </p>
    </div>
  );
};

export default YoutubeEmbed;
