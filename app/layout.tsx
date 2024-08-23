import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Karel Harjono",
  description: "Personal website of Karel Harjono",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen p-0 m-0 overflow-y-scroll scrollbar bg-primary">
          <Navbar />
          <main className="flex flex-col flex-1 items-center justify-start p-24 text-primary bg-secondary rounded-lg m-3">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
