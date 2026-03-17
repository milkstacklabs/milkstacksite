"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import HelixImage from "../assets/images/helix2.png";
import EmojiImage from "../assets/images/emojistar.png";

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const helixTranslateY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const emojiTranslateY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-black py-[72px] text-white sm:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_34%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#000000_0%,#050b18_55%,#000000_100%)]" />

      <div className="container relative">
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] px-6 py-10 text-center backdrop-blur-sm sm:px-10 sm:py-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(84,132,255,0.16),transparent_40%)]" />

          <motion.div
            style={{ y: helixTranslateY }}
            className="pointer-events-none absolute left-[calc(100%+12px)] top-10 hidden opacity-70 lg:block"
          >
            <Image
              src={HelixImage}
              alt=""
              className="h-auto w-[180px]"
              aria-hidden="true"
            />
          </motion.div>

          <motion.div
            style={{ y: emojiTranslateY }}
            className="pointer-events-none absolute right-[calc(100%+8px)] top-[-32px] hidden opacity-80 lg:block"
          >
            <Image
              src={EmojiImage}
              alt=""
              className="h-auto w-[140px]"
              aria-hidden="true"
            />
          </motion.div>

          <div className="relative z-10">
            <p className="text-sm uppercase tracking-[0.24em] text-white/40">
              Stay in the loop
            </p>

            <h2 className="mt-4 text-5xl font-bold tracking-tighter sm:text-6xl">
              Get updates from Milkstack
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70 sm:text-xl">
              New products, progress updates, and the occasional questionable
              cow-related decision.
            </p>

            <form className="mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-12 rounded-lg border border-white/10 bg-white/10 px-5 font-medium text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-white/20 sm:flex-1"
              />

              <button className="h-12 rounded-lg bg-white px-5 font-medium text-black transition hover:bg-white/90">
                Get updates
              </button>
            </form>

            <p className="mt-4 text-sm text-white/45">
              No spam. Just product updates and what Milkstack is shipping.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};