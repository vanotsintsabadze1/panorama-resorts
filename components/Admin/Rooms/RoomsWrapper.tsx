"use client";

import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import RoomsActions from "./RoomActions";

interface Props {
  rooms: Room[] | [];
}

export default function RoomsWrapper({ rooms }: Props) {
  const [search, setSearch] = useState("");
  const [searchableRooms, setSearchableRooms] = useState(rooms);
  const router = useRouter();

  useEffect(() => {
    if (search === "" && searchableRooms.length === rooms.length) {
      return;
    }

    if (search === "") {
      setSearchableRooms(rooms);
      return;
    }

    setSearchableRooms(rooms.filter((room) => room.type.toString() === search));
  }, [search]);

  return (
    <section className="mt-[6rem] flex w-full flex-col items-center justify-center gap-[2rem] overflow-auto">
      <div className="flex w-full flex-col items-center justify-center gap-[2rem]">
        <div className="relative">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for a room..."
            className="h-[3.8rem] w-[38rem] rounded-[1rem] border border-gray-300 px-[1rem] text-[1.3rem] shadow-md xs:w-[30rem]"
          />
          <button className="absolute right-[2rem] h-full">
            <Search size={20} />
          </button>
        </div>
        <div className="flex w-[38rem] items-center justify-end xs:w-full">
          <button
            onClick={() => router.push("/admin/rooms/createRoom")}
            className="h-[3.2rem] rounded-[1rem] bg-orange-500 px-[2rem] text-[1.3rem] font-bold text-white shadow-md"
          >
            + Create
          </button>
        </div>
      </div>
      <div className="flex h-[40rem] min-w-[70rem] flex-col overflow-auto rounded-[1rem] border border-gray-300 bg-white p-[2rem] text-[1.3rem] shadow-md">
        <div className="grid w-full grid-cols-5 font-semibold uppercase">
          <div className="col-span-1 flex items-center px-[1rem]">ID</div>
          <div className="col-span-1 flex items-center justify-center px-[1rem]">Type</div>
          <div className="col-span-1 flex items-center justify-center px-[1rem]">Capacity</div>
          <div className="col-span-1 flex items-center justify-center px-[1rem]">Price Per Night</div>
          <div className="col-span-1 flex items-center justify-center px-[1rem]">Actions</div>
        </div>
        {searchableRooms.map((room) => (
          <div
            key={room.id}
            className="mt-[2rem] grid w-full grid-cols-5 gap-[1rem] rounded-[1rem] border border-gray-300 py-[1rem] shadow-sm"
          >
            <div className="col-span-1 flex w-[10rem] items-center truncate px-[1rem]">{room.id}</div>
            <div className="col-span-1 flex items-center justify-center px-[1rem]">
              {room.type === 0 ? "Single Room" : room.type === 1 ? "Double Room" : "Suite Room"}
            </div>
            <div className="col-span-1 flex items-center justify-center px-[1rem]">{room.capacity}</div>
            <div className="col-span-1 flex items-center justify-center px-[1rem]">{room.pricePerNight}</div>
            <div className="col-span-1 flex items-center justify-center gap-[1rem] px-[1rem]">
              <RoomsActions id={room.id} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
