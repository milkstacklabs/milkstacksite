"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import openaiLogo from "../assets/images/openai.png";
import supabaseLogo from "../assets/images/supabase.png";
import ionosLogo from "../assets/images/Ionos.png";

// =========================================================
// MARK: - SHARED CARD WRAPPER
// =========================================================

function BentoCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(84,132,255,0.16),transparent_35%)]" />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

// =========================================================
// MARK: - CARD 1 / VISION
// =========================================================

function VisionCard() {
  const principles = [
    {
      label: "01",
      title: "Real work over theatre",
      copy: "Products should solve actual problems, not perform innovation.",
      delay: 0,
    },
    {
      label: "02",
      title: "Structure beats chaos",
      copy: "AI should assist, not turn the product into a guessing game.",
      delay: 0.05,
    },
    {
      label: "03",
      title: "Good software should last",
      copy: "Built to hold up under repeat use, not just impress once.",
      delay: 0.1,
    },
  ];

  return (
    <BentoCard className="min-h-[420px] lg:col-span-2">
      <div className="flex h-full flex-col justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-white/45">
            The vision
          </p>

          <h3 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Build software people actually want to keep using.
          </h3>

          <p className="mt-4 max-w-3xl text-base leading-7 text-white/65 sm:text-lg">
            Milkstack exists to make products that are clear, useful, and
            durable under real use. Not bloated suites. Not polished junk. Just
            software with a job to do, and the discipline to do it well.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {principles.map((item) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: item.delay }}
              className="rounded-2xl border border-white/10 bg-black/30 p-4"
            >
              <p className="text-sm text-white/45">{item.label}</p>
              <h4 className="mt-2 text-lg font-medium text-white">
                {item.title}
              </h4>
              <p className="mt-2 text-sm leading-6 text-white/60">
                {item.copy}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}

// =========================================================
// MARK: - CARD 2 / STACK
// =========================================================

function StackCard() {
  const stack = [
    {
      src: openaiLogo,
      alt: "OpenAI Logo",
      width: 144,
      height: 64,
    },
    {
      src: supabaseLogo,
      alt: "Supabase Logo",
      width: 190,
      height: 37,
    },
    {
      src: ionosLogo,
      alt: "IONOS Logo",
      width: 150,
      height: 44,
    },
  ];

  return (
    <BentoCard className="min-h-[420px]">
      <div className="flex h-full flex-col justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-white/45">
            Powered by
          </p>

          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
            Good tools. Used properly.
          </h3>

          <p className="mt-4 max-w-md text-sm leading-7 text-white/65 sm:text-base">
            The stack is there to support the product, not become the pitch.
            Pick the right tools, keep the architecture clean, and make the
            software hold together.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          {stack.map((item, index) => (
            <motion.div
              key={item.alt}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="flex h-20 items-center justify-center rounded-2xl border border-white/10 bg-black/30 px-4"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className="h-auto w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}

// =========================================================
// MARK: - CARD 3 / OPERATING STANDARD
// =========================================================

function StandardCard() {
  const items = [
    "Clarity",
    "Determinism",
    "Real utility",
    "Less friction",
  ];

  return (
    <BentoCard className="min-h-[320px]">
      <div className="flex h-full flex-col justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-white/45">
            Operating standard
          </p>

          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
            Make it obvious.
          </h3>

          <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">
            The best outcome is not “wow, AI.” It’s software that feels clear
            enough that people stop thinking about the tool and just use it.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {items.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/80"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}

// =========================================================
// MARK: - CARD 4 / BRAND
// =========================================================

function BrandCard() {
  return (
    <BentoCard className="min-h-[320px]">
      <div className="flex h-full flex-col justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-white/45">
            Why Milkstack
          </p>

          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
            Serious products. Memorable brand.
          </h3>

          <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">
            The software should be dependable. The brand doesn’t need to sound
            like everyone else pretending to change the world.
          </p>
        </div>

        <div className="mt-8">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45 }}
            className="text-lg font-medium leading-8 text-white"
          >
            Enterprise-grade AI tools.
            <br />
            No bullshit. Just cows.
          </motion.p>
        </div>
      </div>
    </BentoCard>
  );
}

// =========================================================
// MARK: - ROOT
// =========================================================

function Bentodemo() {
  return (
    <div className="w-full">
      <div className="grid gap-5 lg:grid-cols-3">
        <VisionCard />
        <StackCard />
        <StandardCard />
        <BrandCard />
      </div>
    </div>
  );
}

export default Bentodemo;