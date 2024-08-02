import { cookies } from "next/headers";

import RoomReservationContainer from "@/components/Rooms/Single-Room-Page/RoomReservationContainer";
import SingleRoomCard from "@/components/Rooms/Single-Room-Page/SingleRoomCard";

interface Props {
  params: {
    id: string;
  };
}

async function getRoom(id: string) {
  const url = process.env.API_ADDR;
  const token = cookies().get("token")?.value;
  try {
    const res = await fetch(`${url}/v1/Room/${id}/1`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.ok) {
      return await res.json();
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function page({ params: { id } }: Props) {
  const data: Room | null = await getRoom(id);

  if (!data) {
    return (
      <section className="flex h-[50rem] w-full items-center justify-center">
        <h1 className="h-[5rem] font-bold">
          Couldn't load the room {":("}. <br /> <br /> Please report the issue.
        </h1>
      </section>
    );
  }

  return (
    <section className="flex w-full flex-col items-center justify-center py-[4rem]">
      <SingleRoomCard {...data} />;
      <RoomReservationContainer {...data} />
    </section>
  );
}
