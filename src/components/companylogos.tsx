import Image from "next/image";
import openaiLogo from "../assets/images/openai.png";
import supabaseLogo from "../assets/images/supabase.png";
import ionosLogo from "../assets/images/Ionos.png";
import GitHubLogo from "../assets/images/GitHub.png";
import DockerLogo from "../assets/images/docker.png";

export default function LogoCarousel() {
  const logos = [
    {
      src: supabaseLogo,
      alt: "Supabase Logo",
      width: 250,
      height: 48,
    },
    {
      src: ionosLogo,
      alt: "IONOS Logo",
      width: 180,
      height: 53,
    },
    {
      src: openaiLogo,
      alt: "OpenAI Logo",
      width: 160,
      height: 72,
    },
    {
      src: GitHubLogo,
      alt: "GitHub Logo",
      width: 160,
      height: 40,
    },
    {
      src: DockerLogo,
      alt: "Docker Logo",
      width: 160,
      height: 40,
    },
  ];

  return (
    <div className="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex animate-infinite-scroll items-center gap-12 md:gap-16">
        {logos.map((logo, index) => (
          <li
            key={index}
            className="flex h-24 w-[300px] shrink-0 items-center justify-center grayscale opacity-70 transition-all hover:grayscale-0 hover:opacity-100"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="h-auto w-auto object-contain"
            />
          </li>
        ))}
      </ul>

      <ul
        className="flex animate-infinite-scroll items-center gap-12 md:gap-16"
        aria-hidden="true"
      >
        {logos.map((logo, index) => (
          <li
            key={`dup-${index}`}
            className="flex h-24 w-[300px] shrink-0 items-center justify-center grayscale opacity-70 transition-all hover:grayscale-0 hover:opacity-100"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="h-auto w-auto object-contain"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}