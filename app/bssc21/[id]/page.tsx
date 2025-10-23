import { Metadata } from "next";
import { notFound } from "next/navigation";
import HashUtils from "@/lib/HashUtils";
import LoveLetterContent from "@/app/_components/LoveLetterContent";
import { contentMap } from "../content";

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
