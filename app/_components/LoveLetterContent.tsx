"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { getDriveImageUrl } from "@/lib/DriveUtils";
import { FloatingHearts, FloatingHeart } from "./Hearts";
import ImageCarousel from "./ImageCarousel";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

type MediaItem = {
  url: string;
  aspectRatio?: string;
};

type LoveLetterContentProps = {
  text: string | JSX.Element;
  media?: string | MediaItem | (string | MediaItem)[];
  isVideo?: boolean;
  audioSrc?: string;
};

export default function LoveLetterContent({ text, media, isVideo }: LoveLetterContentProps) {
  return (
    <AnimatePresence>
      <motion.div
        className="w-full max-w-md mx-auto"
        initial={{ opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-md overflow-hidden"
          initial={{ height: "0%" }}
          animate={{ height: "auto" }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          <motion.div
            className="px-6 py-8 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.8,
            }}
          >
            {React.isValidElement(text) ? (
              text
            ) : (
              <div className="text-left mb-6 whitespace-pre-wrap">
                <motion.p
                  className={`text-lg font-medium text-gray-800 leading-relaxed ${playfair.className}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1.4 }}
                >
                  {text}
                </motion.p>
              </div>
            )}

            {media && (
              <motion.div
                className="relative w-full aspect-square"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                {isVideo && media ? (
                  <div
                    className="relative w-full h-full touch-none"
                    onTouchStart={(e) => e.preventDefault()}
                    onTouchMove={(e) => e.preventDefault()}
                  >
                    <iframe
                      src={
                        typeof media === "string" && media.includes("youtube.com")
                          ? media
                          : `https://www.youtube.com/embed/${media}`
                      }
                      className="absolute top-0 left-0 w-full h-full rounded-xl shadow-md"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      title="Love Letter Media"
                      style={{
                        touchAction: "manipulation",
                        pointerEvents: "auto",
                      }}
                    />
                  </div>
                ) : media ? (
                  Array.isArray(media) ? (
                    <ImageCarousel
                      items={media.map((item) => {
                        if (typeof item === "string") {
                          const isYouTube =
                            item.includes("youtube.com") || item.includes("youtu.be");
                          return { url: item, type: isYouTube ? "video" : "image" };
                        }
                        const isYouTube =
                          item.url.includes("youtube.com") || item.url.includes("youtu.be");
                        return { ...item, type: isYouTube ? "video" : "image" };
                      })}
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <Image
                        src={typeof media === "string" ? media : media.url}
                        alt="Love letter illustration"
                        className="rounded-xl object-cover shadow-md"
                        fill
                        priority
                        unoptimized
                      />
                    </div>
                  )
                ) : null}

                <FloatingHearts
                  $top="auto"
                  $bottom="10px"
                  isOpen={true}
                  $zIndex={10}
                  hearts={[
                    { $color: "#ff69b4", $size: "30px" }, // First heart
                    { $color: "#ff1744", $size: "40px" }, // Second heart
                    { $color: "#ff4081", $size: "35px" }, // Third heart
                  ]}
                />
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
