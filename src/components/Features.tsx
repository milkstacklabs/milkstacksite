import Bentodemo from "./bentogrid";

export const Features = () => {
  return (
    <section className="bg-black py-[72px] text-white sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl font-bold tracking-tighter sm:text-6xl">
          The vision
        </h2>

        <div className="mx-auto max-w-3xl">
          <p className="mt-5 text-center text-xl leading-8 text-white/70">
            Milkstack exists to build software that people actually want to keep
            using. Not bloated platforms, not AI gimmicks, and not polished junk
            that falls apart under real use. Just products with clear utility,
            strong structure, and enough personality to feel human.
          </p>
        </div>

        <div className="mt-24 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Bentodemo />
        </div>
      </div>
    </section>
  );
};