"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import dashboardImage from "../assets/images/peanut-dashboard.png";
import recipeDetailImage from "../assets/images/peanut-recipe-detail.png";

export const ProductShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end center"],
  });

  const leftY = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const rightY = useTransform(scrollYProgress, [0, 1], [70, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.45, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [4, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black py-[88px] text-white sm:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_34%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#000000_0%,#081120_55%,#000000_100%)]" />

      <div className="container relative">
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          <div className="max-w-xl">
            <p className="text-sm uppercase tracking-[0.24em] text-white/40">
              Inside Peanut
            </p>

            <h2 className="mt-4 text-5xl font-bold tracking-tighter sm:text-6xl">
              Meal planning built for real household life
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/65 sm:text-xl">
              Peanut helps families plan meals, use what they already have,
              build shopping lists, and cook with less friction. Structured AI
              helps where it should, while the app keeps planning state
              reliable, local-first, and under control.
            </p>

            <div className="mt-10 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-sm font-medium text-white">
                  Pantry-aware by design
                </p>
                <p className="mt-1 text-sm leading-6 text-white/55">
                  Plans around what is already in your kitchen, with
                  reservation-aware quantity tracking that keeps pantry state
                  trustworthy.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-sm font-medium text-white">
                  Structured weekly planning
                </p>
                <p className="mt-1 text-sm leading-6 text-white/55">
                  Generates a full week in two stages: a controlled meal
                  skeleton first, then fully expanded recipes with ingredients,
                  instructions, and cost-aware detail.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-sm font-medium text-white">
                  From plan to cooking flow
                </p>
                <p className="mt-1 text-sm leading-6 text-white/55">
                  Shopping seeds, recipe detail, timers, reminders, and cooking
                  guidance all connect cleanly instead of living in separate
                  broken tools.
                </p>
              </div>
            </div>
          </div>

          <motion.div
            style={{ opacity }}
            className="relative mx-auto flex w-full max-w-5xl items-center justify-center"
          >
            <div className="absolute inset-x-10 top-1/2 h-64 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.22),transparent_70%)] blur-3xl" />

            <motion.div
              style={{ y: leftY }}
              className="relative z-20 w-[46%] min-w-[260px]"
            >
              <div className="rounded-[2.7rem] bg-[#0b0f19] p-[10px] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                <div className="overflow-hidden rounded-[2.2rem] bg-[#ece7df]">
                  <Image
                    src={dashboardImage}
                    alt="Peanut dashboard screen"
                    className="block h-auto w-full object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              style={{ y: rightY, rotate }}
              className="relative z-10 -ml-10 mt-20 w-[44%] min-w-[240px]"
            >
              <div className="rounded-[2.7rem] bg-[#0b0f19] p-[10px] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                <div className="overflow-hidden rounded-[2.2rem] bg-[#ece7df]">
                  <Image
                    src={recipeDetailImage}
                    alt="Peanut recipe detail screen"
                    className="block h-auto w-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};