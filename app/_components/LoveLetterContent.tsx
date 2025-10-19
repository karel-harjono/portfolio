"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { getDriveImageUrl } from "@/lib/DriveUtils";
import { FloatingHearts, FloatingHeart } from "./Hearts";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

type LoveLetterContentProps = {
  text: string;
  media: string;
  isVideo: boolean;
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
            duration: 0.6,
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
            <div className="text-center mb-6">
              <motion.p
                className={`text-lg font-medium text-gray-800 leading-relaxed ${playfair.className}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.2 }}
              >
                {text}
              </motion.p>
            </div>

            <motion.div
              className="relative w-full aspect-square mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              {isVideo ? (
                <div
                  className="relative w-full h-full touch-none"
                  onTouchStart={(e) => e.preventDefault()}
                  onTouchMove={(e) => e.preventDefault()}
                >
                  <iframe
                    src={
                      media.includes("youtube.com")
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
              ) : (
                <div className="relative w-full h-full">
                  <Image
                    src={media}
                    alt="Love letter illustration"
                    className="rounded-xl object-cover shadow-md"
                    fill
                    priority
                    unoptimized
                  />
                </div>
              )}
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
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
