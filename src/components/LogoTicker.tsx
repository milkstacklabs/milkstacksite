import Image from "next/image";
import openaiLogo from "../assets/images/openai.png";
import supabaseLogo from "../assets/images/supabase.png";
import IonosLogo from "../assets/images/Ionos.png";
import LogoCarousel from "./companylogos";

const images = [
  { src: openaiLogo, alt: "OpenAI Logo" },
  { src: supabaseLogo, alt: "Supabase Logo" },
  { src: IonosLogo, alt: "Vercel Logo" },
];

export const LogoTicker = () => {
  return (
    <div className="bg-black py-[72px] text-white sm:py-24">
      <div className="container">
        <h2 className="mb-16 text-center text-lg text-white/70">
          Milkstack is powered by
        </h2>

        <LogoCarousel images={images} />
      </div>
    </div>
  );
};