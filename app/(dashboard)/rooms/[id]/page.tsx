import { cookies } from "next/headers";

import RoomReservationContainer from "@/components/Rooms/Single-Room-Page/RoomReservationContainer";
import SingleRoomCard from "@/components/Rooms/Single-Room-Page/SingleRoomCard";
import ReviewsWrapper from "@/components/Rooms/Single-Room-Page/ReviewsWrapper";
import { getUserToken } from "@/scripts/auth/getUserToken";

interface Props {
  params: {
    id: string;
  };
}

async function getRoom(url: string, token: string, rid: string) {
  try {
    const res = await fetch(`${url}/v1/Room/${rid}/1`, {
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

async function isUserPermittedToReview(url: string, token: string, rid: string) {
  try {
    const res = await fetch(`${url}/v1/Review/CanUserReview/${rid}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.ok) {
      const data: boolean = await res.json();
      return data;
    } else {
      console.error(res.statusText);
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
}

export default async function page({ params: { id } }: Props) {
  const url = process.env.API_ADDR;
  const token = await getUserToken();
  const data: Room | null = await getRoom(url as string, token as string, id);
  const canReview = await isUserPermittedToReview(url as string, token as string, id);

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
      <ReviewsWrapper canReview={canReview} />
    </section>
  );
}
