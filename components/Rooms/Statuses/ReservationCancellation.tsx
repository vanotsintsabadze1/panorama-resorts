"use client";

import { cancelReservation } from "@/scripts/rooms/cancelReservation";
import { X } from "lucide-react";
import { useEffect } from "react";
import Link from "next/link";

export default function ReservationCancellation() {
  async function cancelOnPageLoad() {
    let rid = window.localStorage.getItem("rid");
    if (rid) {
      await cancelReservation(rid);
    }
    window.localStorage.removeItem("rid");
  }

  useEffect(() => {
    cancelOnPageLoad();
  }, []);

  return (
    <div className="flex h-[40rem] w-full flex-col items-center justify-center">
      <X size={150} fill="white" color="red" />
      <p className="text-center text-[1.3rem] font-bold">
        You've cancelled your reservation.
        <br /> <br /> Please try again or contact the sales team later.
      </p>
      <Link
        href="/"
        className="mt-[2rem] text-center text-[1.3rem] font-bold text-blue-500 underline underline-offset-2"
      >
        Go to your reservations
      </Link>
    </div>
  );
}
