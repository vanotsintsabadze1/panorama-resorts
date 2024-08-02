"use client";

import { useState } from "react";
import DateSetters from "./DateSetters";
import ResidentAmount from "./ResidentAmount";
import { reserveRoom } from "@/scripts/rooms/reserveRoom";
import toast from "react-hot-toast";
import LoadingSpinner from "@/components/misc/LoadingSpinner";

export default function RoomReservationContainer({ id, capacity }: Room) {
  const date = new Date();
  const [checkInDate, setCheckInDate] = useState(date);
  const [checkOutDate, setCheckOutDate] = useState(date);
  const [residentAmount, setResidentAmount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);

  async function onReserve() {
    setIsLoading(true);

    if (!residentAmount) {
      toast.error("Please input the amount of guests");
      setIsLoading(false);
      return;
    }

    if (
      checkInDate === checkOutDate ||
      checkInDate > checkOutDate ||
      checkInDate < date ||
      checkOutDate < date ||
      checkInDate === date ||
      checkOutDate === date
    ) {
      toast.error("Invalid date range");
      setIsLoading(false);
      return;
    }

    const res = await reserveRoom(id, checkInDate, checkOutDate, residentAmount);

    if (res?.status === 200) {
      const { data } = res;
      const { approveLink, reservationIdentifier }: ReservationResponse = data;

      window.localStorage.setItem("rid", reservationIdentifier);
      window.location.href = approveLink;
    }

    setIsLoading(false);
  }

  return (
    <section className="mt-[3rem] flex items-center justify-center bg-white sm:min-w-[40rem] md:w-[60rem] xs:w-[30rem]">
      <div className="flex w-full flex-col gap-[1.5rem] rounded-lg border border-gray-200 p-[2rem] shadow-md">
        <DateSetters
          checkIn={checkInDate}
          checkOut={checkOutDate}
          setCheckInDate={setCheckInDate}
          setCheckOutDate={setCheckOutDate}
        />
        <ResidentAmount capacity={capacity} residentAmount={residentAmount} setResidentAmount={setResidentAmount} />
        <section className="flex w-full items-center justify-center">
          <button
            onClick={onReserve}
            className="relative flex h-[3.5rem] w-full items-center justify-center rounded-lg bg-black text-[1.3rem] font-bold uppercase text-white shadow-md"
          >
            {isLoading ? <LoadingSpinner color="grey" /> : "Reserve"}
          </button>
        </section>
      </div>
    </section>
  );
}
