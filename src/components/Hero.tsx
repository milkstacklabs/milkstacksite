"use client";

import { useState, useEffect } from "react";
import ArrowIcon from "../assets/icons/arrow-w.svg";

const words = ["builds.", "ships.", "solves."];

export const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const isTypingComplete = displayText === currentWord;
    const isDeleteComplete = displayText === "";

    let delay = isDeleting ? 50 : 100;

    if (!isDeleting && isTypingComplete) {
      delay = 2000;
    }

    if (isDeleting && isDeleteComplete) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = window.setTimeout(() => {
      if (!isDeleting) {
        if (!isTypingComplete) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        } else {
          setIsDeleting(true);
        }
      } else {
        setDisplayText(currentWord.slice(0, displayText.length - 1));
      }
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex]);

  return (
    <section className="relative overflow-clip bg-black text-white bg-[linear-gradient(to_bottom,#000,#0F2052_34%,#2650A5_65%,#5A8BFF_82%)] py-[72px] sm:py-24">
      <div className="absolute left-1/2 top-[calc(100%-96px)] h-[375px] w-[750px] -translate-x-1/2 rounded-[100%] border border-[#5A8BFF] bg-black bg-[radial-gradient(closest-side,#000_82%,#3D6CD9)] sm:top-[calc(100%-120px)] sm:h-[768px] sm:w-[1536px] lg:h-[800px] lg:w-[2400px]" />

      <div className="container relative">
        <div className="flex justify-center -mt-10">
          {/* AnimatedGradientTextDemo removed */}
        </div>

        <div className="mt-8 flex justify-center">
          <h1 className="max-w-5xl text-center text-6xl font-bold tracking-tight leading-none sm:text-8xl lg:text-9xl">
            <span className="hidden items-baseline justify-center gap-[0.35em] sm:inline-flex whitespace-nowrap">
              <span>Milkstack</span>
              <span className="inline-block min-w-[7.5ch] text-left text-[#5A8BFF]">
                {displayText}
                <span className="ml-1 inline-block animate-pulse">|</span>
              </span>
            </span>

            <span className="sm:hidden">
              Milkstack{" "}
              <span className="inline-block text-[#5A8BFF]">
                {displayText}
                <span className="ml-1 inline-block animate-pulse">|</span>
              </span>
            </span>
          </h1>
        </div>

        <div className="flex justify-center">
          <p className="mt-8 max-w-2xl text-center text-lg text-white/70 sm:text-xl">
            AI native apps. No bullshit. Just cows.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#apps"
              className="rounded-lg bg-white px-5 py-3 font-medium text-black"
            >
              Explore the apps
            </a>

            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-5 py-3 font-medium text-white"
            >
              Why Milkstack
              <ArrowIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};