import FacilityContainers from "@/components/Facilities/FacilityContainers";
import FacilityTypes from "@/components/Facilities/FacilityTypes";
import Image from "next/image";

export default function page() {
  return (
    <>
      <section className="relative flex h-[40rem] w-full items-center justify-center md:h-[50rem]">
        <canvas className="absolute left-0 top-0 z-[20] h-full w-full bg-black/60"></canvas>
        <Image src="/images/backgrounds/facilities.webp" className="object-cover" fill alt="facilities-banner" />
        <div className="z-[20] flex flex-col items-center gap-[1rem] px-[2rem] text-center">
          <h1 className="text-shadow-md text-[4rem] font-bold text-white shadow-black md:text-[7rem]">
            Discover Our Exceptional <br /> Facilities
          </h1>
          <p className="text-shadow-lg text-[1.3rem] font-medium text-white shadow-black md:text-[1.5rem]">
            Indulge in a world-class experience at our hotel, where every detail <br /> is meticulously crafted to
            ensure your ultimate satisfaction.
          </p>
        </div>
      </section>
      <FacilityTypes />
      <FacilityContainers />
    </>
  );
}
