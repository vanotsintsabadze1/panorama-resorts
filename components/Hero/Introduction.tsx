import Image from "next/image";
import { Hotel, ArrowBigDownIcon } from "lucide-react";
import IntroductionInteractionButtons from "./IntroductionInteractionButtons";

export default function Introduction() {
  return (
    <section className="relative flex h-[43rem] w-full flex-col items-center gap-[2rem] md:h-[50rem] xs:h-[39rem]">
      <Image fill src="/images/backgrounds/hero.webp" alt="hero-palms" className="object-cover" />
      <canvas className="absolute right-0 top-0 h-full w-full bg-[rgba(0,0,0,0.7)]" />
      <div className="z-20 mt-[9rem] flex w-full flex-col items-center gap-[2rem]">
        <div className="flex flex-col items-center">
          <h2 className="text-[1.8rem] font-light text-white md:text-[2.5rem]">Welcome To</h2>
          <h1 className="text-center text-[4rem] font-bold text-white md:text-[7rem] lg:text-[8rem] xs:text-[3rem]">
            Panorama Resort
          </h1>
          <p className="max-w-[45rem] px-[1rem] text-center text-[1.2rem] font-medium leading-[2.5rem] text-white md:text-[1.4rem] xs:mt-[.5rem] xs:text-[1.1rem]">
            Experience Unmatched Luxury and Comfort - Your Perfect Getaway Awaits at Panorama Resorts
          </p>
        </div>
        <IntroductionInteractionButtons />
      </div>
    </section>
  );
}
