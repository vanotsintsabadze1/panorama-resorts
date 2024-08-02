import Image from "next/image";

export default function RoomsBanner() {
  return (
    <section className="relative flex h-[30rem] w-full items-center justify-center md:h-[50rem]">
      <div className="z-[20] flex flex-col items-center text-white">
        <h1 className="text-shadow-lg text-[4rem] font-bold uppercase tracking-wider shadow-black md:text-[10rem]">
          Rooms
        </h1>
        <p className="text-shadow-sm mt-[.5rem] max-w-[32rem] text-center text-[1.3rem] font-medium md:max-w-full md:text-[1.8rem]">
          Find a suitable room for yourself & book it straight away!
        </p>
      </div>
      <canvas className="absolute z-[10] h-full w-full bg-black/70" />
      <Image
        src="/images/backgrounds/rooms.webp"
        fill
        className="absolute right-0 top-0 object-fill"
        alt="rooms-banner"
      />
    </section>
  );
}
