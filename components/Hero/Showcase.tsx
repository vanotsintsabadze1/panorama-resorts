import Image from "next/image";
import Link from "next/link";

export default function Showcase() {
  return (
    <section className="mt-[2rem] flex w-full flex-wrap items-center justify-center gap-x-[10rem] gap-y-[3rem] py-[2rem]">
      <div className="flex w-[50rem] flex-col items-center justify-center p-[1rem]">
        <div className="relative h-[25rem] w-[38rem] md:h-[30rem] md:w-[45rem] xs:h-[20rem] xs:w-[30rem]">
          <Image src="/images/backgrounds/hero-showcase-1.webp" fill alt="image" className="rounded-[2rem]" />
          <canvas className="absolute z-[20] h-full w-full rounded-[2rem] bg-orange-600/20" />
        </div>
        <div className="mt-[1rem] flex flex-col items-center justify-center gap-[1.5rem]">
          <p className="max-w-[40rem] px-[1rem] text-center text-[1.3rem] font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, sequi vero est assumenda dicta enim,
            similique eius corporis dolores expedita, libero atque illo natus. Deleniti minima ducimus quis officia ad.
          </p>
          <button className="h-[3.5rem] w-[12rem] rounded-lg bg-orange-600 text-[1.2rem] font-bold text-white shadow-md">
            <Link href="/rooms" className="h-full w-full">
              View Rooms
            </Link>
          </button>
        </div>
      </div>
      <div className="flex w-[50rem] flex-col items-center justify-center p-[1rem]">
        <div className="relative h-[25rem] w-[38rem] md:h-[30rem] md:w-[45rem] xs:h-[20rem] xs:w-[30rem]">
          <Image src="/images/backgrounds/hero-showcase-2.webp" fill alt="image" className="rounded-[2rem]" />
          <canvas className="absolute z-[20] h-full w-full rounded-[2rem] bg-orange-600/20" />
        </div>
        <div className="mt-[1rem] flex flex-col items-center justify-center gap-[1.5rem]">
          <p className="max-w-[40rem] px-[1rem] text-center text-[1.3rem] font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, sequi vero est assumenda dicta enim,
            similique eius corporis dolores expedita, libero atque illo natus. Deleniti minima ducimus quis officia ad.
          </p>
          <button className="h-[3.5rem] w-[12rem] rounded-lg bg-orange-600 text-[1.2rem] font-bold text-white shadow-md">
            <Link href="/facilities" className="h-full w-full">
              View Facilities
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}
