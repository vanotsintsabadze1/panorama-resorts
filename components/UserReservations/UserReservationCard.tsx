"use client";

import Image from "next/image";
import ReservationCancelBtn from "./ReservationCancelBtn";
import { useEffect, useState } from "react";
import LoadingSpinner from "../misc/LoadingSpinner";

interface Props {
  url: string;
  token: string;
  reservation: ConfirmedReservationResponse;
}

export default function UserReservationCard({ url, token, reservation }: Props) {
  const [image, setImage] = useState("");

  async function getImageAsURL() {
    const res = await fetch(`${url}/v1/Image/${reservation.room.images[0]}`, {
      method: "GET",
      headers: {
        "Content-Type": "image/.jpeg",
        Authorization: `Bearer ${token}`,
      },
    });
    const blob = await res.blob();
    const imageURL = URL.createObjectURL(blob);
    setImage(imageURL);
  }

  useEffect(() => {
    getImageAsURL();
  }, []);

  return (
    <div className="flex w-full items-center gap-[2rem] overflow-x-auto rounded-2xl bg-white px-[1rem] py-[2rem] text-gray-700 shadow-md md:items-start lg:w-[80rem] lg:px-[2rem]">
      <div className="relative h-[15rem] w-[30rem] md:h-[20rem]">
        {image !== "" ? (
          <Image src={image} className="rounded-[2rem]" alt={reservation.identifier + "-image"} fill />
        ) : (
          <LoadingSpinner width="4rem" height="4rem" color="black" />
        )}
        {reservation.status === 0 ? (
          <div className="absolute bottom-[1rem] right-[1rem] flex h-[2.8rem] w-[10rem] items-center justify-center rounded-lg bg-green-600 text-[1.1rem] font-semibold uppercase text-white shadow-md">
            Confirmed
          </div>
        ) : reservation.status === 2 ? (
          <div className="absolute bottom-[1rem] right-[1rem] flex h-[2.8rem] w-[10rem] items-center justify-center rounded-lg bg-red-600 text-[1.1rem] font-semibold uppercase text-white shadow-md">
            Cancelled
          </div>
        ) : reservation.status === 3 ? (
          <div className="absolute bottom-[1rem] right-[1rem] flex h-[2.8rem] w-[10rem] items-center justify-center rounded-lg bg-green-600 text-[1.1rem] font-semibold uppercase text-white shadow-md">
            Completed
          </div>
        ) : (
          <div className="absolute bottom-[1rem] right-[1rem] flex h-[2.8rem] w-[10rem] items-center justify-center rounded-lg bg-yellow-600 text-[1.1rem] font-semibold uppercase text-white shadow-md">
            Pending
          </div>
        )}
      </div>
      <div className="flex flex-col gap-[1rem] text-[1.2rem]">
        <h1>
          <b>Identifier:</b> {reservation.identifier}
        </h1>
        <p>
          <b>Number of Guests:</b> {reservation.numberOfGuests}
        </p>
        <p>
          <b>Check-In:</b> {new Date(reservation.checkInDateUtc).toLocaleDateString()}
        </p>
        <p>
          <b>Check-Out:</b> {new Date(reservation.checkOutDateUtc).toLocaleDateString()}
        </p>
        <p>
          <b>UID:</b> {reservation.user.id}
        </p>
        <p>
          <b>User Email:</b> {reservation.user.email}
        </p>

        {reservation.status === 0 && <ReservationCancelBtn rid={reservation.identifier} />}
      </div>
    </div>
  );
}
