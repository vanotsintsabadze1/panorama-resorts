import { getUserToken } from "@/scripts/auth/getUserToken";
import { TvMinimal, Wifi, Bed, Ruler } from "lucide-react";
import Image from "next/image";
import ImageSlider from "./ImageSlider";

export default async function SingleRoomCard({
  id,
  type,
  description,
  capacity,
  pricePerNight,
  pricePerNightCurrency,
  images,
}: Room) {
  const url = process.env.API_ADDR;
  const token = await getUserToken();

  return (
    <div className="flex flex-col items-center rounded-[1rem] border border-gray-200 p-[2rem] shadow-md sm:w-[38rem] md:w-[50rem] lg:w-auto lg:flex-row lg:gap-x-[3rem] lg:px-[4rem] xs:w-[30rem]">
      <section className="flex flex-col gap-[1rem]">
        <h1 className="text-[2.5rem] font-bold">Room Title</h1>
        <p className="text-[1.4rem] font-medium md:w-[40rem] lg:max-w-[45rem]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias adipisci atque fugit fuga earum tenetur
          iusto consequuntur modi laboriosam ducimus!
        </p>
        <h2 className="mt-[.5rem] text-[1.4rem] font-bold">Details</h2>
        <div className="grid grid-cols-2 gap-y-[1rem] font-medium text-gray-500">
          <div className="flex h-[3rem] items-center gap-[.8rem] text-[1.2rem]">
            <Wifi size={25} />
            5G WiFi
          </div>
          <div className="flex h-[3rem] items-center gap-[.8rem] text-[1.2rem]">
            <Ruler size={25} />
            30m²
          </div>
          <div className="flex h-[3rem] items-center gap-[.8rem] text-[1.2rem]">
            <TvMinimal size={25} />
            Television
          </div>
          <div className="flex h-[3rem] items-center gap-[.8rem] text-[1.2rem]">
            <Bed size={25} />1 King Size Bed
          </div>
        </div>
      </section>
      <section className="mt-[1rem] flex w-full flex-col items-center justify-center gap-[1rem] py-[1.5rem] lg:w-auto">
        <ImageSlider token={token as string} url={url as string} roomImages={images} />
      </section>
    </div>
  );
}
