import React from "react";
import HashUtils from "@/lib/HashUtils";
import TextCarousel from "@/app/_components/TextCarousel";

export type Content = {
  text: string | JSX.Element;
  media?: string | (string | { url: string; aspectRatio: string })[];
  isVideo?: boolean;
  audioSrc?: string;
};

export const contentMap: Record<string, Content> = {
  [HashUtils.hashId(1)]: {
    text: (
      <React.Fragment>
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
              of you. I hope you like it!
            </React.Fragment>,
            <span key="from" className="italic">
              From Karel
            </span>,
          ]}
        />
      </React.Fragment>
    ),
  },
  [HashUtils.hashId(2)]: {
    text: "Blub blub... 🐠💖, I realized I wasn't as weak as I thought. Look!! Even in the photo, I don't look like I was struggling at all! I'm so proud of myself.",
    isVideo: false,
    media: [
      "/images/bssc21/2/page2_1.jpg",
      "/images/bssc21/2/page2_2.jpg",
      "/images/bssc21/2/page2_3.jpg",
      "/images/bssc21/2/page2_4.jpg",
      "/images/bssc21/2/page2_5.jpg",
    ],
  },
  [HashUtils.hashId(3)]: {
    text: "Bae, I srsly don't get it.. How did I not recognize this girl before? She looks so.. pretty to me now. I pray now writing this, that I can see her this gorgeous forever. Amen~",
    isVideo: false,
    media: [
      "/images/bssc21/3/page3_1.jpg",
      "/images/bssc21/3/page3_2.jpg",
      { url: "/images/bssc21/3/page3_3.jpg", aspectRatio: "aspect-[4/3]" },
      { url: "/images/bssc21/3/page3_4.jpg", aspectRatio: "aspect-[3/4]" },
    ],
  },
  [HashUtils.hashId(4)]: {
    text: "You are a strong strong person. Your smiles looks so genuine and beautiful. I look at you as my inspiration. You shown me how to find joy in the little things. I hope I can be one of your little joys too. 💖",
    isVideo: false,
    media: [
      { url: "/images/bssc21/4/page4_1.jpg", aspectRatio: "aspect-[3/4]" },
      { url: "/images/bssc21/4/page4_2.jpg", aspectRatio: "aspect-[3/4]" },
      { url: "/images/bssc21/4/page4_3.jpg", aspectRatio: "aspect-[3/4]" },
      { url: "/images/bssc21/4/page4_4.jpg", aspectRatio: "aspect-[3/4]" },
      { url: "/images/bssc21/4/page4_5.jpg", aspectRatio: "aspect-[3/4]" },
    ],
  },
  [HashUtils.hashId(5)]: {
    text: "I haven't seen these pictures before! My heart skipped a beat when I saw them. You are so beautiful, inside and out. I think I found my new favorite pictures of you. (guess which is my favourite?)",
    isVideo: false,
    media: [
      { url: "/images/bssc21/5/page5_1.jpg", aspectRatio: "aspect-[3/4]" },
      { url: "/images/bssc21/5/page5_2.jpg", aspectRatio: "aspect-[3/4]" },
      { url: "/images/bssc21/5/page5_3.jpg", aspectRatio: "aspect-[3/4]" },
      { url: "/images/bssc21/5/page5_4.jpg", aspectRatio: "aspect-[4/3]" },
      { url: "/images/bssc21/5/page5_5.jpg", aspectRatio: "aspect-[4/3]" },
      { url: "/images/bssc21/5/page5_6.jpg", aspectRatio: "aspect-[4/3]" },
    ],
  },
  [HashUtils.hashId(6)]: {
    text: "I wish to share to you how I see you, how much I value your smiles. I just really love you. You look so happy and radiant here. It makes me so happy seeing you like this.",
    isVideo: false,
    media: [
      "/images/bssc21/6/page6_1.jpg",
      "/images/bssc21/6/page6_2.jpg",
      "/images/bssc21/6/page6_3.jpg",
      "/images/bssc21/6/page6_4.jpg",
      "/images/bssc21/6/page6_5.jpg",
    ],
  },
  [HashUtils.hashId(7)]: {
    text: "And of course, I love love love your funny personality! Never change, my silly baby 💖",
    isVideo: false,
    media: [
      "/images/bssc21/7/page7_1.jpg",
      "/images/bssc21/7/page7_2.jpg",
      "/images/bssc21/7/page7_3.jpg",
      "/images/bssc21/7/page7_4.jpg",
      "/images/bssc21/7/page7_5.jpg",
    ],
  },
  [HashUtils.hashId(8)]: {
    text: "You are such a bright soul. Your energy is infectious, and your smile lights up every room. Need proof?",
    isVideo: false,
    media: [
      "/images/bssc21/8/page8_1.jpg",
      "/images/bssc21/8/page8_2.jpg",
      "/images/bssc21/8/page8_3.jpg",
      "/images/bssc21/8/page8_4.jpg",
      "/images/bssc21/8/page8_5.jpg",
      "/images/bssc21/8/page8_6.jpg",
    ],
  },
  [HashUtils.hashId(9)]: {
    text: "You are a blessings from God to me, your friends, and more importantly to your family. Remember that always.",
    isVideo: false,
    media: [
      "/images/bssc21/9/page9_1.jpg",
      "/images/bssc21/9/page9_2.jpg",
      "/images/bssc21/9/page9_3.jpg",
      "/images/bssc21/9/page9_4.jpg",
      "/images/bssc21/9/page9_5.jpg",
    ],
  },
  [HashUtils.hashId(10)]: {
    text: "I love your modesty and humility. To me, you have the right balance of confidence and grace. ",
    isVideo: false,
    media: [
      "/images/bssc21/10/page10_1.jpg",
      "/images/bssc21/10/page10_2.jpg",
      "/images/bssc21/10/page10_3.jpg",
    ],
  },
  [HashUtils.hashId(11)]: {
    text: "I wanted to put these photos together with the last one, but how could I? You look so stunning in these pictures, I want to show you in fullness how your confidence is beautiful!",
    isVideo: false,
    media: [
      { url: "/images/bssc21/11/page11_1.jpg", aspectRatio: "aspect-[4/3]" },
      { url: "/images/bssc21/11/page11_2.jpg", aspectRatio: "aspect-[4/3]" },
      { url: "/images/bssc21/11/page11_3.jpg", aspectRatio: "aspect-[4/3]" },
      { url: "/images/bssc21/11/page11_4.jpg", aspectRatio: "aspect-[3/4]" },
      { url: "/images/bssc21/11/page11_5.jpg", aspectRatio: "aspect-[4/3]" },
      { url: "/images/bssc21/11/page11_6.jpg", aspectRatio: "aspect-[4/3]" },
      { url: "/images/bssc21/11/page11_7.jpg", aspectRatio: "aspect-[4/3]" },
      { url: "/images/bssc21/11/page11_8.jpg", aspectRatio: "aspect-[4/3]" },
    ],
  },
  [HashUtils.hashId(12)]: {
    text: "In the days you feel unattractive, I hope you can look at yourself the same way I see you.",
    isVideo: false,
    media: [
      { url: "/images/bssc21/12/page12_1.jpg", aspectRatio: "aspect-[3/4]" },
      { url: "/images/bssc21/12/page12_2.jpg", aspectRatio: "aspect-[3/4]" },
      { url: "/images/bssc21/12/page12_3.jpg", aspectRatio: "aspect-[3/4]" },
      { url: "/images/bssc21/12/page12_4.jpg", aspectRatio: "aspect-[3/4]" },
      { url: "/images/bssc21/12/page12_5.jpg", aspectRatio: "aspect-[3/4]" },
    ],
  },
  [HashUtils.hashId(13)]: {
    text: (
      <React.Fragment>
        How beautiful you are, my darling! Oh, how beautiful! Your eyes behind your veil are doves.
        Your hair is like a flock of goats descending from the hills of Gilead.
        <span className="block my-1 italic text-sm text-right">Song of Songs 4:1</span>
      </React.Fragment>
    ),
    isVideo: false,
    media: ["https://www.youtube.com/watch?v=2ra8c--dZMQ"], // TODO: update link
  },
  [HashUtils.hashId(14)]: {
    text: "Food for thought..",
    isVideo: false,
    media: [
      { url: "/images/bssc21/14/page14_1.jpg", aspectRatio: "aspect-[3/4]" },
      { url: "/images/bssc21/14/page14_2.jpg", aspectRatio: "aspect-[3/4]" },
      { url: "/images/bssc21/14/page14_3.jpg", aspectRatio: "aspect-[3/4]" },
      { url: "/images/bssc21/14/page14_4.jpg", aspectRatio: "aspect-[3/4]" },
      { url: "/images/bssc21/14/page14_5.jpg", aspectRatio: "aspect-[3/4]" },
      { url: "/images/bssc21/14/page14_6.jpg", aspectRatio: "aspect-[3/4]" },
    ],
  },
  [HashUtils.hashId(15)]: {
    text: "Another day, another joy to see you smile 😊💖",
    isVideo: false,
    media: [
      { url: "/images/bssc21/15/page15_1.jpg", aspectRatio: "aspect-[3/4]" },
      { url: "/images/bssc21/15/page15_2.jpg", aspectRatio: "aspect-[3/4]" },
      "https://youtube.com/shorts/zosWxZM2vNs?feature=share",
    ],
  },
  [HashUtils.hashId(16)]: {
    text: "Today, I felt especially grateful for you. I felt that you are such a blessing in my life.",
    isVideo: false,
    media: [
      { url: "/images/bssc21/16/page16_1.jpg", aspectRatio: "aspect-[3/4]" },
      { url: "/images/bssc21/16/page16_2.jpg", aspectRatio: "aspect-[3/4]" },
      { url: "/images/bssc21/16/page16_3.jpg", aspectRatio: "aspect-[3/4]" },
      { url: "/images/bssc21/16/page16_4.jpg", aspectRatio: "aspect-[3/4]" },
      { url: "/images/bssc21/16/page16_5.jpg", aspectRatio: "aspect-[3/4]" },
      { url: "/images/bssc21/16/page16_6.jpg", aspectRatio: "aspect-[3/4]" },
    ],
  },
  [HashUtils.hashId(17)]: {
    text: "Our fellowship together has given me so much joy. I cherish them very much. I hope we can have more of these desires to learn more about God together.",
    isVideo: false,
    media: [
      { url: "/images/bssc21/17/page17_1.jpg", aspectRatio: "aspect-[3/4]" },
      { url: "/images/bssc21/17/page17_2.jpg", aspectRatio: "aspect-[3/4]" },
      { url: "/images/bssc21/17/page17_3.jpg", aspectRatio: "aspect-[3/4]" },
      { url: "/images/bssc21/17/page17_4.jpg", aspectRatio: "aspect-[3/4]" },
    ],
  },
  [HashUtils.hashId(18)]: {
    text: "You are gorgeous..",
    isVideo: false,
    media: [
      "/images/bssc21/18/page18_1.jpg",
      "/images/bssc21/18/page18_2.jpg",
      // "/images/bssc21/18/page18_3.jpg",
      // "/images/bssc21/18/page18_4.jpg",
      // "/images/bssc21/18/page18_5.jpg",
    ],
  },
  [HashUtils.hashId(19)]: {
    text: "Can`t take my eyes off of you.. ",
    isVideo: false,
    media: [
      "/images/bssc21/19/page19_1.jpg",
      "/images/bssc21/19/page19_2.jpg",
      "/images/bssc21/19/page19_3.jpg",
      // "/images/bssc21/19/page19_4.jpg",
      // "/images/bssc21/19/page19_5.jpg",
    ],
  },
  [HashUtils.hashId(20)]: {
    text: "Rainbow will always reminds me of you. So full of colors and life :)",
    isVideo: false,
    media: [
      "/images/bssc21/20/page20_1.jpg",
      // "/images/bssc21/20/page20_2.jpg",
      // "/images/bssc21/20/page20_3.jpg",
      // "/images/bssc21/20/page20_4.jpg",
      // "/images/bssc21/20/page20_5.jpg",
    ],
  },
  [HashUtils.hashId(21)]: {
    text: "I thought I would have a hard time filling out 21 of these pages, but looking at these photos of you, I realized I have so many more reasons to love you.",
    isVideo: false,
    media: [
      "/images/bssc21/21/page21_1.jpg",
      // "/images/bssc21/21/page21_2.jpg",
      // "/images/bssc21/21/page21_3.jpg",
      // "/images/bssc21/21/page21_4.jpg",
      // "/images/bssc21/21/page21_5.jpg",
    ],
  },
  [HashUtils.hashId(22)]: {
    text: "Though this is the last, I hope it is not the end, but rather a new beginning for us. I look forward to more memories together. I love you so much, Bess. Happy Birthday!",
    isVideo: false,
    media: [
      "/images/bssc21/22/page22_1.jpg",
      // "/images/bssc21/22/page22_2.jpg",
      // "/images/bssc21/22/page22_3.jpg",
      // "/images/bssc21/22/page22_4.jpg",
      // "/images/bssc21/22/page22_5.jpg",
    ],
  },
  // Add more entries as needed
};
