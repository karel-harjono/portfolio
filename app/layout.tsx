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
        <div className="flex min-h-screen max-w-screen box-border p-0 m-0 scrollbar bg-primary">
          <Navbar />
          <main className="flex flex-col flex-1 justify-start lg:ml-64 items-center p-2">
            <div className="flex text-primary bg-secondary rounded-lg w-full h-full p-6 lg:p-12">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
