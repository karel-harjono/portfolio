"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, PanInfo } from "framer-motion";

interface MediaItem {
  url: string;
  type: "image" | "video";
  aspectRatio?: string;
}

interface ImageCarouselProps {
  images?: string[];
  items?: MediaItem[];
  aspectRatio?: "square" | "video" | "auto";
  aspectRatioOverride?: string;
  isVideo?: boolean;
}

function YouTubeEmbed({ url }: { url: string }) {
  // Extract video ID from YouTube URL
  const getYouTubeID = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getYouTubeID(url);
  if (!videoId) return null;

  return (
    <div className="relative w-full h-full">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full rounded-xl"
      />
    </div>
  );
}

function MediaSlide({ item }: { item: MediaItem }) {
  if (item.type === "video") {
    return <YouTubeEmbed url={item.url} />;
  }
  return (
    <Image
      src={item.url}
      alt="Carousel slide"
      className="rounded-xl object-cover shadow-md"
      fill
      priority
      unoptimized
    />
  );
}

export default function ImageCarousel({
  images,
  items,
  aspectRatio = "square",
  aspectRatioOverride,
  isVideo = false,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const [controlsTimeout, setControlsTimeout] = useState<NodeJS.Timeout | null>(null);

  // Convert old format to new format if needed
  const mediaItems: MediaItem[] =
    items ||
    images?.map(
      (url): MediaItem => ({
        url,
        type:
          isVideo || url.includes("youtube.com") || url.includes("youtu.be") ? "video" : "image",
      })
    ) ||
    [];

  const resetControlsTimer = useCallback(() => {
    if (controlsTimeout) {
      clearTimeout(controlsTimeout);
    }
    setShowControls(true);
    const timeout = setTimeout(() => {
      setShowControls(false);
    }, 1000); // Hide controls after 3 seconds
    setControlsTimeout(timeout);
  }, [controlsTimeout]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (controlsTimeout) {
        clearTimeout(controlsTimeout);
      }
    };
  }, [controlsTimeout]);

  const handleInteraction = () => {
    resetControlsTimer();
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) return mediaItems.length - 1;
      if (nextIndex >= mediaItems.length) return 0;
      return nextIndex;
    });
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseMove={handleInteraction}
      onTouchStart={handleInteraction}
      onClick={handleInteraction}
    >
      <div
        className={`relative w-full ${
          mediaItems[currentIndex]?.aspectRatio ||
          aspectRatioOverride ||
          {
            square: "aspect-square",
            video: "aspect-video",
            auto: "aspect-auto",
          }[aspectRatio]
        }`}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragStart={handleInteraction}
            onDragEnd={(e, { offset, velocity }: PanInfo) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute w-full h-full"
          >
            <MediaSlide item={mediaItems[currentIndex]} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {mediaItems.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-rose-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Arrow buttons */}
      {mediaItems.length > 1 && (
        <AnimatePresence>
          {showControls && (
            <>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/35 hover:bg-black/70 transition-colors flex items-center justify-center z-10"
                onClick={() => {
                  paginate(-1);
                  handleInteraction();
                }}
              >
                <span className="sr-only">Previous</span>←
              </motion.button>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/35 hover:bg-black/70 transition-colors flex items-center justify-center z-10"
                onClick={() => {
                  paginate(1);
                  handleInteraction();
                }}
              >
                <span className="sr-only">Next</span>→
              </motion.button>
            </>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}
