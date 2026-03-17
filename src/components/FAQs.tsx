"use client";

import { useState } from "react";
import PlusIcon from "../assets/icons/plus.svg";
import MinusIcon from "../assets/icons/minus.svg";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    question: "What is Milkstack?",
    answer:
      "Milkstack is a product company building AI-native apps with strong design, clear utility, and a bit of personality.",
  },
  {
    question: "What is Milkstack building right now?",
    answer:
      "Milkstack is focused on building software that feels fast, useful, and worth opening again. More products will be announced over time.",
  },
  {
    question: "Is Peanut part of Milkstack?",
    answer:
      "Yes. Peanut is one of the products being built under Milkstack.",
  },
  {
    question: "What powers Milkstack products?",
    answer:
      "Milkstack uses a focused stack including OpenAI, Supabase, and IONOS.",
  },
  {
    question: "Are the products live yet?",
    answer:
      "Some are live, some are still being refined, and some are still in development.",
  },
  {
    question: "Why the cows?",
    answer:
      "Because most software brands take themselves too seriously.",
  },
];

const AccordionItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="border-b border-white/15 py-7 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center gap-4">
        <span className="flex-1 text-lg font-bold text-white">{question}</span>
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: "16px" }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            className="overflow-hidden text-white/70 leading-7 pr-8"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQs = () => {
  return (
    <section className="bg-black bg-gradient-to-b from-[#0F2052] to-black py-[72px] text-white sm:py-24">
      <div className="container">
        <h2 className="mx-auto max-w-[720px] text-center text-5xl tracking-tighter sm:text-6xl">
          Questions, answered
        </h2>

        <div className="mx-auto mt-12 max-w-[720px]">
          {items.map(({ question, answer }) => (
            <AccordionItem question={question} answer={answer} key={question} />
          ))}
        </div>
      </div>
    </section>
  );
};