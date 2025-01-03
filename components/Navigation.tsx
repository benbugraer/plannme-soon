"use client";

import { CSSProperties } from "react";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import Github from "@/public/icons/GitHubIcon";
import XformerlyTwitter from "@/public/icons/XIcon";
import LinkedIn from "@/public/icons/LinkedinIcon";
import Instagram from "@/public/icons/InstagramIcon";

const social = [
  {
    url: "https://github.com/benbugraer",
    icon: <Github className="w-4 h-4" />,
    title: "GitHub",
  },
  {
    url: "https://x.com/benbugraer",
    icon: <LinkedIn className="w-4 h-4" />,
    title: "LinkedIn",
  },
  {
    url: "https://x.com/plannme",
    icon: <XformerlyTwitter className="w-4 h-4" />,
    title: "X",
  },
  {
    url: "https://www.instagram.com/plannme.app/",
    icon: <Instagram className="w-4 h-4" />,
    title: "Instagram",
  },
];

export default function Navigation() {
  return (
    <header
      className="w-full max-w-[1440px]  md:px-[34px] left-1/2 z-50 mx-auto mb-8 flex -translate-x-1/2 items-center justify-between py-5 lg:mt-6 lg:max-w-[min(1150px,calc(100vw-24px))] lg:rounded-2xl lg:py-0 bg-tertiary border border-primary animate-in-reverse"
      style={{ "--index": 0 } as CSSProperties}
    >
      <div className="container flex h-14 items-center w-full">
        <nav className="flex container items-center justify-end text-center w-full">
          <h1 className="mr-auto">
            <Link href="/" className="text-2xl tracking-tighter font-bold">
              PlannMe
            </Link>
          </h1>
        </nav>

        <nav className="flex items-center justify-end ml-auto">
          <div className="flex gap-1 sm:gap-2 items-center">
            {social.map((social) => (
              <a
                target="_blank"
                key={social.url}
                href={social.url}
                title={social.title}
                className="inline-flex text-tertiary items-center justify-center text-sm font-medium transition-colors rounded-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-primary duration-500 hover:duration-500 hover:text-accent-foreground h-8 w-8 sm:h-9 sm:w-9"
              >
                {social.icon}
              </a>
            ))}
            <div className="ml-1 sm:ml-2">
              <ThemeSwitcher />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
