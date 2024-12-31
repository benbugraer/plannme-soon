"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Cover } from "./ui/cover";
import { AnimatedTooltip } from "./ui/animated-tooltip";

import Nextjs from "@/public/icons/NextIcon";
import React from "@/public/icons/ReactIcons";
import TypeScript from "@/public/icons/TypeScriptIcon";
import TailwindCSS from "@/public/icons/TailwindIcon";
import shadcnui from "@/public/icons/ShadcnIcon";
import { SimpleIconsClerk } from "@/public/icons/ClerkAuthIcon";
import Prisma from "@/public/icons/PrismaIcon";
import Supabase from "@/public/icons/SupabaseIcon";
import tRPC from "@/public/icons/TrcpIcon";

const ease = [0.16, 1, 0.3, 1];

function HeroCreated() {
  const bugra = [
    {
      id: 1,
      name: "Bugra Er",
      designation: "Fullstack Developer",
      image: "https://avatars.githubusercontent.com/u/160940880",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease }}
      className="flex items-center mb-6"
    >
      <div className="flex gap-5">
        <div className="flex flex-row items-center justify-center ">
          <AnimatedTooltip items={bugra} />
        </div>
        <div className="z-10 flex items-center justify-center">
          <div
            className={cn(
              "group rounded-full border border-primary  text-base  transition-all ease-in hover:cursor-pointer bg-black dark:bg-white dark:hover:bg-tertiary hover:bg-tertiary"
            )}
          >
            <div className="inline-flex text-xs lg:text-sm items-center justify-center px-4 py-1 transition ease-out text-white dark:text-black group-hover:text-primary group-hover:dark:text-primary">
              <a
                href="https://github.com/benbugraer"
                target="_blank"
                className="flex gap-1"
              >
                <span className="font-bold">Bugra Er</span>
                <p> tarafından oluşturulmakta.</p>
              </a>
              <MoveRight className="ml-3 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function HeroTitles() {
  return (
    <div className="flex w-full max-w-5xl flex-col space-y-4 overflow-hidden">
      <motion.h1
        className="text-center text-[1.6rem] md:text-3xl lg:text-5xl font-medium leading-tight pb-6"
        initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
        animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease,
          staggerChildren: 0.2,
        }}
      >
        {[
          "Randevularınızı",
          "Planlamanın",
          "En Kolay",
          "Ve",
          "En Basit",
          "Yolu",
          <Cover key="plannme">
            {" "}
            <span className="font-bold">P</span>
            <span className="font-light">lann</span>
            <span className="font-bold">M</span>
            <span className="font-light">e</span>
          </Cover>,
          "Çok",
          "Yakında",
          "Hizmetinizde",
        ].map((text, index) => (
          <motion.span
            key={index}
            className="inline-block px-1 md:px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              ease,
            }}
          >
            {text}
          </motion.span>
        ))}
      </motion.h1>

      <motion.div className="mx-auto max-w-xl text-center leading-10 lg:leading-6 text-muted-foreground lg:flex">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.4,
            duration: 0.8,
            ease,
          }}
          className="mr-3"
        >
          Modern Teknolojiler ile Geliştiriyoruz:
        </motion.span>

        <motion.span
          className="flex gap-2"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 1.6,
              },
            },
          }}
          initial="hidden"
          animate="show"
        >
          {[
            {
              Icon: Nextjs,
              href: "https://nextjs.org/",
              title: "Next.js",
            },
            {
              Icon: React,
              href: "https://react.dev/",
              title: "React.js",
            },
            {
              Icon: TypeScript,
              href: "https://www.typescriptlang.org/",
              title: "Typescript",
            },
            {
              Icon: Supabase,
              href: "https://supabase.com/",
              title: "Supabase",
            },
            {
              Icon: Prisma,
              href: "https://www.prisma.io/",
              title: "Prisma",
            },
            {
              Icon: tRPC,
              href: "https://trpc.io/",
              title: "tRPC",
            },
            {
              Icon: SimpleIconsClerk,
              href: "https://clerk.com/",
              title: "Clerk Auth",
            },
            {
              Icon: TailwindCSS,
              href: "https://tailwindcss.com/",
              title: "Tailwind CSS",
            },
            {
              Icon: shadcnui,
              href: "https://ui.shadcn.com/",
              title: "Shadcn UI",
            },
          ].map(({ Icon, href, title }, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease }}
            >
              <Link href={href} target="_blank" title={title}>
                <Icon
                  className={`w-6 h-6 hover:opacity-80 transition-opacity`}
                />
              </Link>
            </motion.div>
          ))}
        </motion.span>
      </motion.div>
    </div>
  );
}

function HeroEmail() {
  return (
    <motion.div
      className="flex gap-3"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.2,
            delayChildren: 2.0, // Start after icons animation
          },
        },
      }}
      initial="hidden"
      animate="show"
    ></motion.div>
  );
}

export default function HeroSection() {
  return (
    <section id="hero">
      <div className="relative flex w-full flex-col items-center justify-start px-4  sm:px-6 sm:pt-24 md:pt-12 lg:px-8 ">
        <HeroCreated />
        <HeroTitles />
        <HeroEmail />
      </div>
    </section>
  );
}
