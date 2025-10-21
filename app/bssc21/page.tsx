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
      `/images/bssc21/2/page2_1.JPG`,
      `/images/bssc21/2/page2_2.JPG`,
      `/images/bssc21/2/page2_3.JPG`,
      `/images/bssc21/2/page2_4.JPG`,
      `/images/bssc21/2/page2_5.JPG`,
    ],
  },
  [HashUtils.hashId(3)]: {
    text: "Bae, I srsly don't get it.. How did I not recognize this girl before? She looks so.. pretty to me now. I pray now writing this, that I can see her this gorgeous forever. Amen~",
    isVideo: false,
    media: [
      `/images/bssc21/3/page3_1.JPG`,
      `/images/bssc21/3/page3_2.JPG`,
      { url: `/images/bssc21/3/page3_3.JPG`, aspectRatio: "aspect-[4/3]" },
      { url: `/images/bssc21/3/page3_4.JPG`, aspectRatio: "aspect-[3/4]" },
    ],
  },
  [HashUtils.hashId(4)]: {
    text: "You are a strong strong person. Your smiles looks so genuine and beautiful. I look at you as my inspiration. You shown me how to find joy in the little things. I hope I can be one of your little joys too. 💖",
    isVideo: false,
    media: [
      { url: `/images/bssc21/4/page4_1.JPG`, aspectRatio: "aspect-[3/4]" },
      { url: `/images/bssc21/4/page4_2.JPG`, aspectRatio: "aspect-[3/4]" },
      { url: `/images/bssc21/4/page4_3.JPG`, aspectRatio: "aspect-[3/4]" },
      { url: `/images/bssc21/4/page4_4.JPG`, aspectRatio: "aspect-[3/4]" },
      { url: `/images/bssc21/4/page4_5.JPG`, aspectRatio: "aspect-[3/4]" },
    ],
  },
  [HashUtils.hashId(5)]: {
    text: "Blub blub... 🐠💖, I realized I wasn't as weak as I thought. Look!! Even in the photo, I don't look like I was struggling at all! I'm so proud of myself.",
    isVideo: false,
    media: [
      `/images/bssc21/2/page2_1.JPG`,
      `/images/bssc21/2/page2_2.JPG`,
      `/images/bssc21/2/page2_3.JPG`,
      `/images/bssc21/2/page2_4.JPG`,
      `/images/bssc21/2/page2_5.JPG`,
    ],
  },
  [HashUtils.hashId(6)]: {
    text: "Blub blub... 🐠💖, I realized I wasn't as weak as I thought. Look!! Even in the photo, I don't look like I was struggling at all! I'm so proud of myself.",
    isVideo: false,
    media: [
      `/images/bssc21/2/page2_1.JPG`,
      `/images/bssc21/2/page2_2.JPG`,
      `/images/bssc21/2/page2_3.JPG`,
      `/images/bssc21/2/page2_4.JPG`,
      `/images/bssc21/2/page2_5.JPG`,
    ],
  },
  [HashUtils.hashId(7)]: {
    text: "Blub blub... 🐠💖, I realized I wasn't as weak as I thought. Look!! Even in the photo, I don't look like I was struggling at all! I'm so proud of myself.",
    isVideo: false,
    media: [
      `/images/bssc21/2/page2_1.JPG`,
      `/images/bssc21/2/page2_2.JPG`,
      `/images/bssc21/2/page2_3.JPG`,
      `/images/bssc21/2/page2_4.JPG`,
      `/images/bssc21/2/page2_5.JPG`,
    ],
  },
  [HashUtils.hashId(8)]: {
    text: "Blub blub... 🐠💖, I realized I wasn't as weak as I thought. Look!! Even in the photo, I don't look like I was struggling at all! I'm so proud of myself.",
    isVideo: false,
    media: [
      `/images/bssc21/2/page2_1.JPG`,
      `/images/bssc21/2/page2_2.JPG`,
      `/images/bssc21/2/page2_3.JPG`,
      `/images/bssc21/2/page2_4.JPG`,
      `/images/bssc21/2/page2_5.JPG`,
    ],
  },
  [HashUtils.hashId(9)]: {
    text: "Blub blub... 🐠💖, I realized I wasn't as weak as I thought. Look!! Even in the photo, I don't look like I was struggling at all! I'm so proud of myself.",
    isVideo: false,
    media: [
      `/images/bssc21/2/page2_1.JPG`,
      `/images/bssc21/2/page2_2.JPG`,
      `/images/bssc21/2/page2_3.JPG`,
      `/images/bssc21/2/page2_4.JPG`,
      `/images/bssc21/2/page2_5.JPG`,
    ],
  },
  [HashUtils.hashId(10)]: {
    text: "Blub blub... 🐠💖, I realized I wasn't as weak as I thought. Look!! Even in the photo, I don't look like I was struggling at all! I'm so proud of myself.",
    isVideo: false,
    media: [
      `/images/bssc21/2/page2_1.JPG`,
      `/images/bssc21/2/page2_2.JPG`,
      `/images/bssc21/2/page2_3.JPG`,
      `/images/bssc21/2/page2_4.JPG`,
      `/images/bssc21/2/page2_5.JPG`,
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

  for (let i = 1; i <= 30; i++) {
    console.log(i.toString() + " " + HashUtils.hashId(i));
  }

  return (
    <div className="absolute inset-0 min-h-screen bg-gradient-to-b from-red-300 to-rose-500">
      <main className="relative w-full h-full flex flex-col items-center justify-center p-4 overflow-hidden">
        <LoveLetterContent {...content} />
      </main>
    </div>
  );
}
