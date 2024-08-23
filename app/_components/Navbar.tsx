"use client";
import React from "react";
import Link from "next/link";
import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import LinkedInIcon from "./_icons/LinkedInIcon";
import GitHubIcon from "./_icons/GitHubIcon";
import { usePathname } from "next/navigation";
import { Qwitcher_Grypen } from "next/font/google";

const qwitcherGryphen = Qwitcher_Grypen({ weight: "700", subsets: ["latin"] });

const Navbar = () => {
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    return pathname === path
      ? "flex items-center px-4 py-2 my-1 bg-gray-700 text-white cursor-pointer rounded-full justify-between"
      : "flex items-center px-4 py-2 my-1 hover:bg-gray-700 cursor-pointer rounded-full justify-between";
  };

  return (
    <div className="hidden fixed lg:block w-60 p-2 bg-transparent text-primary rounded-3xl text-sm">
      <Link href={"/"}>
        <div className={`${qwitcherGryphen.className} p-4 mb-1 text-4xl`}>
          Karel Harjono
        </div>
      </Link>
      <ul>
        <li>
          <Link href="/" className={getLinkClass("/")}>
            Home
            <HomeIcon className="h-5 w-5 mr-2" />
          </Link>
        </li>
        {/* <li>
          <Link href="/work" className={getLinkClass("/work")}>
            Work
            <BriefcaseIcon className="h-5 w-5 mr-2" />
          </Link>
        </li>
        <li>
          <Link href="/about" className={getLinkClass("/about")}>
            About
            <UserIcon className="h-5 w-5 mr-2" />
          </Link>
        </li> */}
        <li className="flex items-center justify-between p-4 rounded-lg">
          <div className="flex items-center">Network</div>
          <div className="flex items-center">
            <a href="mailto:harjono.karel@gmail.com" target="_blank">
              <EnvelopeIcon className="h-5 w-5 mx-1" />
            </a>
            <a href="https://github.com/karel-harjono" target="_blank">
              <GitHubIcon className="h-5 w-5 mx-1" />
            </a>
            <a href="https://www.linkedin.com/in/karelharjono" target="_blank">
              <LinkedInIcon className="h-5 w-5 mx-1" />
            </a>
          </div>
        </li>
      </ul>
      <footer className="text-center text-xs text-secondary mt-2">
        © 2024 Karel Harjono
      </footer>
    </div>
  );
};

export default Navbar;
