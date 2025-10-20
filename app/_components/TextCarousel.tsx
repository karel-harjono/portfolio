"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface TextCarouselProps {
  slides: React.ReactNode[];
  onComplete?: () => void;
}

export default function TextCarousel({ slides, onComplete }: TextCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    } else if (onComplete) {
      onComplete();
    }
  };

  return (
    <div className="relative w-full" onClick={handleNext}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className={`text-center ${playfair.className}`}
        >
          <div className="text-lg font-medium text-gray-800 leading-relaxed">
            {slides[currentSlide]}
          </div>
          {currentSlide < slides.length - 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-4 text-xs text-gray-500"
            >
              Tap to continue...
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="mt-4 flex justify-center gap-2 mb-3">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentSlide ? "bg-rose-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
