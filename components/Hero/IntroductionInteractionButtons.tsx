"use client";

import { ArrowBigDownIcon, Hotel } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLenis } from "@studio-freight/react-lenis";

export default function IntroductionInteractionButtons() {
  const router = useRouter();
  const lenis = useLenis();

  function scrollToAboutSection() {
    lenis?.scrollTo("#aboutUsSection");
  }

  return (
    <div className="flex flex-col items-center justify-center gap-[3rem]">
      <button
        onClick={() => router.push("/rooms")}
        className="mt-[1rem] flex h-[4rem] w-[16rem] items-center justify-center gap-[.8rem] rounded-lg bg-orange-800 px-[1rem] text-[1.4rem] font-bold text-white shadow-2xl shadow-orange-400"
      >
        Book Now <Hotel color="white" size={20} />
      </button>
      <button
        onClick={scrollToAboutSection}
        className="mt-[1rem] flex h-[4rem] w-[4rem] animate-bounce items-center justify-center rounded-[50%] bg-white"
      >
        <ArrowBigDownIcon size={25} />
      </button>
    </div>
  );
}
