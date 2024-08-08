import { getAllRooms } from "@/scripts/rooms/getAllRooms";
import RoomCard from "./RoomCard";
import RoomsFilter from "./RoomsFilter";
export default async function RoomsWrapper() {
  const rooms: Room[] = await getAllRooms();

  return (
    <section className="flex w-full flex-col items-center gap-[3rem] pb-[4rem] pt-[2rem]">
      <RoomsFilter />
      <div className="grid grid-cols-1 gap-x-[8rem] gap-y-[5rem] lg:grid-cols-2 xl:grid-cols-3">
        {rooms.map((room, index) => (
          <RoomCard {...room} key={index} />
        ))}
        {rooms.length === 0 && <p className="uppercase text-gray-300 text-[1.4rem] font-light tracking-wider">No rooms found.</p>}
      </div>
    </section>
  );
}
