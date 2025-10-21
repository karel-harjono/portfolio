import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import HashUtils from "@/lib/HashUtils";
import LoveLetterContent from "@/app/_components/LoveLetterContent";
import { FloatingHearts } from "@/app/_components/Hearts";
import TextCarousel from "@/app/_components/TextCarousel";

export const metadata: Metadata = {
  title: "My gift to you",
};

// Generate static params for all possible hash IDs (1-30)
export function generateStaticParams() {
  return Array.from({ length: 30 }, (_, i) => ({
    id: HashUtils.hashId(i + 1),
  }));
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

type Content = {
  text: string | JSX.Element;
  media?: string | (string | { url: string; aspectRatio: string })[];
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
            "I wish you a day that&apos;s quiet but full of warmth. I pray for the coming year filled with exciting new adventures.",
            "You are the greatest gift in my life. So today, I want to give to you something from the bottom of my heart.",
            <React.Fragment key="note">
              Of the countless times I&apos;ve adorned you with my words, none have ever truly
              captured the depth of my feelings for you. But today, I hope this series of heartfelt
              photos (and surprises) can show you just how much you mean to me.
            </React.Fragment>,
            <React.Fragment key="hint">
              I wish to share to you how I see you. How much I adore your smiles. I want to remind
              you of the times you were able to find joy even in the toughest of times. I really
              hope I can describe to you how I feel, but the best I can do is show you the best of
              you in my eyes. You will soon realize this to be a dump post on my favourite pictures
              of you. I hope you enjoy it!
            </React.Fragment>,
            <span key="from" className="italic">
              From Karel
            </span>,
          ]}
        />
      </>
    ),
  },
  [HashUtils.hashId(2)]: {
    text: "Blub blub... 🐠💖, I realized I wasn't as weak as I thought. Look!! Even in the photo, I don't look like I was struggling at all! I'm so proud of myself.",
    isVideo: false,
    media: [
      `/images/bssc21/2/page2_1.jpg`,
      `/images/bssc21/2/page2_2.jpg`,
      `/images/bssc21/2/page2_3.jpg`,
      `/images/bssc21/2/page2_4.jpg`,
      `/images/bssc21/2/page2_5.jpg`,
      "https://www.youtube.com/watch?v=GasWcIZgLzE",
    ],
  },
  [HashUtils.hashId(3)]: {
    text: "Bae, I srsly don't get it.. How did I not recognize this girl before? She looks so.. pretty to me now. I pray now writing this, that I can see her this gorgeous forever. Amen~",
    isVideo: false,
    media: [
      `/images/bssc21/3/page3_1.jpg`,
      `/images/bssc21/3/page3_2.jpg`,
      { url: `/images/bssc21/3/page3_3.jpg`, aspectRatio: "aspect-[4/3]" },
      { url: `/images/bssc21/3/page3_4.jpg`, aspectRatio: "aspect-[3/4]" },
    ],
  },
  [HashUtils.hashId(4)]: {
    text: "You are a strong strong person. Your smiles looks so genuine and beautiful. I look at you as my inspiration. You shown me how to find joy in the little things. I hope I can be one of your little joys too. 💖",
    isVideo: false,
    media: [
      { url: `/images/bssc21/4/page4_1.jpg`, aspectRatio: "aspect-[3/4]" },
      { url: `/images/bssc21/4/page4_2.jpg`, aspectRatio: "aspect-[3/4]" },
      { url: `/images/bssc21/4/page4_3.jpg`, aspectRatio: "aspect-[3/4]" },
      { url: `/images/bssc21/4/page4_4.jpg`, aspectRatio: "aspect-[3/4]" },
      { url: `/images/bssc21/4/page4_5.jpg`, aspectRatio: "aspect-[3/4]" },
    ],
  },
  [HashUtils.hashId(5)]: {
    text: "I haven't seen these pictures before! My heart skipped a beat when I saw them. You are so beautiful, inside and out. I think I found my new favorite pictures of you. (guess which is my favourite?)",
    isVideo: false,
    media: [
      { url: `/images/bssc21/5/page5_1.jpg`, aspectRatio: "aspect-[3/4]" },
      { url: `/images/bssc21/5/page5_2.jpg`, aspectRatio: "aspect-[3/4]" },
      { url: `/images/bssc21/5/page5_3.jpg`, aspectRatio: "aspect-[3/4]" },
      { url: `/images/bssc21/5/page5_4.jpg`, aspectRatio: "aspect-[3/4]" },
      { url: `/images/bssc21/5/page5_5.jpg`, aspectRatio: "aspect-[3/4]" },
      { url: `/images/bssc21/5/page5_6.jpg`, aspectRatio: "aspect-[4/3]" },
    ],
  },
  [HashUtils.hashId(6)]: {
    text: "I wish to share to you how I see you, how much I value your smiles. I just really love you. You look so happy and radiant here. It makes me so happy seeing you like this.",
    isVideo: false,
    media: [
      `/images/bssc21/2/page2_1.jpg`,
      `/images/bssc21/2/page2_2.jpg`,
      `/images/bssc21/2/page2_3.jpg`,
      `/images/bssc21/2/page2_4.jpg`,
      `/images/bssc21/2/page2_5.jpg`,
    ],
  },
  [HashUtils.hashId(7)]: {
    text: "Blub blub... 🐠💖, I realized I wasn't as weak as I thought. Look!! Even in the photo, I don't look like I was struggling at all! I'm so proud of myself.",
    isVideo: false,
    media: [
      `/images/bssc21/2/page2_1.jpg`,
      `/images/bssc21/2/page2_2.jpg`,
      `/images/bssc21/2/page2_3.jpg`,
      `/images/bssc21/2/page2_4.jpg`,
      `/images/bssc21/2/page2_5.jpg`,
    ],
  },
  [HashUtils.hashId(8)]: {
    text: "Blub blub... 🐠💖, I realized I wasn't as weak as I thought. Look!! Even in the photo, I don't look like I was struggling at all! I'm so proud of myself.",
    isVideo: false,
    media: [
      `/images/bssc21/2/page2_1.jpg`,
      `/images/bssc21/2/page2_2.jpg`,
      `/images/bssc21/2/page2_3.jpg`,
      `/images/bssc21/2/page2_4.jpg`,
      `/images/bssc21/2/page2_5.jpg`,
    ],
  },
  [HashUtils.hashId(9)]: {
    text: "Blub blub... 🐠💖, I realized I wasn't as weak as I thought. Look!! Even in the photo, I don't look like I was struggling at all! I'm so proud of myself.",
    isVideo: false,
    media: [
      `/images/bssc21/2/page2_1.jpg`,
      `/images/bssc21/2/page2_2.jpg`,
      `/images/bssc21/2/page2_3.jpg`,
      `/images/bssc21/2/page2_4.jpg`,
      `/images/bssc21/2/page2_5.jpg`,
    ],
  },
  [HashUtils.hashId(10)]: {
    text: "Blub blub... 🐠💖, I realized I wasn't as weak as I thought. Look!! Even in the photo, I don't look like I was struggling at all! I'm so proud of myself.",
    isVideo: false,
    media: [
      `/images/bssc21/2/page2_1.jpg`,
      `/images/bssc21/2/page2_2.jpg`,
      `/images/bssc21/2/page2_3.jpg`,
      `/images/bssc21/2/page2_4.jpg`,
      `/images/bssc21/2/page2_5.jpg`,
    ],
  },
  // Add more entries as needed
};

export default function Bssc21IdPage({ params }: { params: { id: string } }) {
  const { id } = params;

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
