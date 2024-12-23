"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface Slide {
  type: "image" | "video";
  src: string;
  title?: string;
  subtitle?: string;
}

export function FullBleedHero({ src, type }: Slide) {
  const [isClient, setIsClient] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsClient(true);

    // Ensure video plays for longer than 8 seconds
    if (videoRef.current) {
      videoRef.current
        .play()
        .catch((error) => console.error("Video playback failed:", error));
    }
  }, []);

  if (!isClient) {
    // Server-side rendering or initial client render
    return null;
  }

  return (
    <div className="absolute inset-0 h-screen w-full overflow-hidden">
      {type === "image" ? (
        <Image src={src} alt="reel" fill className="object-cover" priority />
      ) : (
        <video
          ref={videoRef}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
}
