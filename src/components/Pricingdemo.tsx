export const Pricing = () => {
  const items = [
    {
      name: "Peanut",
      category: "Family food OS",
      description:
        "A local-first meal planning app for real household use. Peanut handles weekly planning, pantry-aware generation, shopping workflows, recipe execution, and structured AI assistance without turning the whole experience into chaos.",
    },
    {
      name: "ChatISO",
      category: "ISO 9001 compliance engine",
      description:
        "A compliance product for SMEs working toward ISO 9001 accreditation. ChatISO is being built to reduce admin drag, make documentation easier to navigate, and give smaller businesses a clearer route through the accreditation process.",
    },
    {
      name: "Project Orion",
      category: "Telecoms project tooling",
      description:
        "A project management system for telecoms work, focused on automation, delivery oversight, and ML-assisted CAD file auditing. Orion is aimed at making operational work more reliable, structured, and easier to review at scale.",
    },
  ];

  return (
    <section className="bg-black py-[72px] text-white sm:py-24">
      <div className="container">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.24em] text-white/40">
            Current projects
          </p>

          <h2 className="mt-4 text-5xl font-bold tracking-tighter sm:text-6xl">
            Three very different problems. One standard.
          </h2>

          <p className="mt-5 text-xl text-white/70">
            Milkstack is building products across consumer, compliance, and
            operational software — all with the same bias toward clarity,
            structure, and software that holds up under real use.
          </p>
        </div>

        <div className="mt-16 border-y border-white/10">
          {items.map((item, index) => (
            <div
              key={item.name}
              className={`grid gap-5 py-8 md:grid-cols-[220px_1fr] ${
                index !== items.length - 1 ? "border-b border-white/10" : ""
              }`}
            >
              <div>
                <span className="inline-flex rounded-full border border-white/15 px-3 py-1 text-sm text-white/60">
                  {item.category}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-white">
                  {item.name}
                </h3>

                <p className="mt-3 max-w-3xl text-base leading-7 text-white/65">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};