"use client";

import { useState } from "react";
import RoomCard from "./RoomCard";
import RoomsFilter from "./RoomsFilter";

interface Props {
  rooms: Room[];
  url: string;
  token: string;
}

export default function RoomsWrapper({ rooms, url, token }: Props) {
  const [existingRooms, setExistingRooms] = useState(rooms);

  return (
    <section className="flex w-full flex-col items-center gap-[3rem] pb-[4rem] pt-[2rem]">
      <RoomsFilter setRooms={setExistingRooms} />
      <div className="grid grid-cols-1 gap-x-[8rem] gap-y-[5rem] lg:grid-cols-2 xl:grid-cols-3">
        {existingRooms.map((room, index) => (
          <RoomCard url={url as string} token={token as string} {...room} key={index} />
        ))}
      </div>
      {rooms.length === 0 && (
        <div className="flex w-full items-center justify-center">
          <p className="text-[1.4rem] font-light uppercase tracking-wider text-gray-300">No rooms found.</p>
        </div>
      )}
    </section>
  );
}
