import { Metadata } from "next";
import { notFound } from "next/navigation";
import HashUtils from "@/lib/HashUtils";
import LoveLetterContent from "@/app/_components/LoveLetterContent";
import { FloatingHearts } from "@/app/_components/Hearts";
import TextCarousel from "@/app/_components/TextCarousel";

export const metadata: Metadata = {
  title: "My gift to you",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

type Content = {
  text: string | JSX.Element;
  media?: string;
  isVideo?: boolean;
  audioSrc?: string;
};

const contentMap: Record<string, Content> = {
  [HashUtils.hashId(1)]: {
    text: (
      <>
        <TextCarousel
          slides={[
            "Dear Bess,",
            "Happy 21st Birthday 🎉🎂.",
            "I wish you a day that's quiet but full of warmth. I pray for the coming year filled with exciting new adventures.",
            "You are the greatest gift in my life. So today, I want to give to you something from the bottom of my heart.",
            <>
              Of the countless times I've adorned you with my words, none have ever truly captured
              the depth of my feelings for you. But today, I hope this series of heartfelt photos
              (and surprises) can show you just how much you mean to me.
            </>,
            <span className="italic">From Karel</span>,
          ]}
        />
      </>
    ),
  },
  [HashUtils.hashId(2)]: {
    text: "Blub blub... 🐠💖, I realized I wasn't as weak as I thought. Look!! Even in the photo, I don't look like I was struggling at all! I'm so proud of myself.",
    // text: "My dearest, every moment with you feels like a beautiful dream I never want to wake up from. You make my world brighter just by being in it.",
    // media: "https://drive.google.com/file/d/1OXvdbrYfYyi4O7YhTM-8j6GARX5ZoWnR/view?usp=sharing", // This is just an example YouTube video ID - replace with your actual video ID
    isVideo: false,
    media: [
      `/images/bssc21/2/page2_1.JPG`,
      `/images/bssc21/2/page2_2.JPG`,
      `/images/bssc21/2/page2_3.JPG`,
      `/images/bssc21/2/page2_4.JPG`,
    ],
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
    <div className="absolute inset-0 min-h-screen bg-gradient-to-b from-red-300 to-rose-500">
      <main className="relative w-full h-full flex flex-col items-center justify-center p-4 overflow-hidden">
        <LoveLetterContent {...content} />
      </main>
    </div>
  );
}
