import { PersonStanding, CircleDollarSign } from "lucide-react";
import Image from "next/image";
import RoomSeeMoreBtn from "./RoomSeeMoreBtn";

export default function RoomCard({ images, type, id, description, capacity, pricePerNight }: Room) {
  return (
    <div className="flex min-h-[40rem] w-[38rem] flex-col items-center gap-[1rem] rounded-[1rem] border border-gray-200 bg-white p-[2rem] shadow-lg xs:max-w-[35rem]">
      <div className="relative h-[25rem] w-[35rem] xs:h-[20rem] xs:w-[30rem]">
        <Image src="https://placehold.co/600x400/png" fill alt="image" className="rounded-[1rem]" />
      </div>
      <div className="flex flex-col gap-[.5rem]">
        <h2 className="text-[1.8rem] font-bold">{type}</h2>
        <p className="line-clamp-3 text-[1.3rem] font-medium">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, animi nobis amet fugit similique dolor
          voluptas quibusdam consequuntur reprehenderit ea.
        </p>
        <p className="mt-[.5rem] text-[1.3rem] font-bold">Details</p>
        <div className="my-[.5rem] flex w-full items-center gap-[2rem]">
          <div className="flex items-center justify-center gap-[.5rem]">
            <PersonStanding size={30} />
            <p className="text-[1.4rem] font-medium">4</p>
          </div>
          <div className="flex items-center justify-center gap-[.5rem]">
            <CircleDollarSign size={24} />
            <p className="text-[1.4rem] font-medium">$300</p>
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          <RoomSeeMoreBtn id={id} />
        </div>
      </div>
    </div>
  );
}
