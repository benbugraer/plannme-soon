"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface CountdownProps {
  targetDate: Date;
}

export function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +targetDate - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const countdownItems = [
    { label: "Gün", value: timeLeft.days },
    { label: "Saat", value: timeLeft.hours },
    { label: "Dakika", value: timeLeft.minutes },
    { label: "Saniye", value: timeLeft.seconds },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="flex flex-wrap justify-start max-w-md"
    >
      <div className="grid grid-cols-4 gap-3 w-full">
        {countdownItems.map(({ label, value }, index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 1.8 + index * 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-col items-center"
          >
            <div
              className={cn(
                "w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-primary",
                "flex items-center justify-center",
                "border border-primary",
                "backdrop-blur-sm"
              )}
            >
              <span className="text-xl sm:text-2xl font-bold">
                {value.toString().padStart(2, "0")}
              </span>
            </div>
            <span className="mt-2 text-xs sm:text-sm text-muted-foreground">
              {label}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
