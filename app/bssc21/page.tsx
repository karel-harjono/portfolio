import { Metadata } from "next";
import { notFound } from "next/navigation";
import HashUtils from "@/lib/HashUtils";
import LoveLetterContent from "@/app/_components/LoveLetterContent";

export const metadata: Metadata = {
  title: "Love Letter",
  description: "A special message for you",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

type Content = {
  text: string;
  media: string;
  isVideo: boolean;
};

// Example mapping of hashIds to content
const contentMap: Record<string, Content> = {
  [HashUtils.hashId(1)]: {
    text: "My dearest, every moment with you feels like a beautiful dream I never want to wake up from. You make my world brighter just by being in it.",
    media: "0Xq3Um80Pgg", // This is just an example YouTube video ID - replace with your actual video ID
    isVideo: true,
  },
  [HashUtils.hashId(2)]: {
    text: "My dearest, every moment with you feels like a beautiful dream I never want to wake up from. You make my world brighter just by being in it.",
    // media: "https://drive.google.com/file/d/1OXvdbrYfYyi4O7YhTM-8j6GARX5ZoWnR/view?usp=sharing", // This is just an example YouTube video ID - replace with your actual video ID
    isVideo: false,
    media: "/images/bssc21/DSCF1420.JPG",
  },
  // Add more entries as needed
};

export default function Bssc21Page({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  const id = searchParams?.id;

  if (!id || !contentMap[id]) {
    notFound();
  }

  const content = contentMap[id];

  return (
    <div className="absolute inset-0 min-h-screen bg-gradient-to-b from-red-300 to-rose-400">
      <main className="relative w-full h-full flex flex-col items-center justify-center p-4 overflow-hidden">
        <LoveLetterContent {...content} />
      </main>
    </div>
  );
}
