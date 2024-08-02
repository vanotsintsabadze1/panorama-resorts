"use client";

import { cancelAuthorizedReservation } from "@/scripts/rooms/cancelAuthorizedReservation";
import { Trash, Trash2Icon } from "lucide-react";
import toast from "react-hot-toast";
import { useState } from "react";
import LoadingSpinner from "../misc/LoadingSpinner";

interface Props {
  rid: string;
}

export default function ReservationCancelBtn({ rid }: Props) {
  const [isLoading, setIsLoading] = useState(false);

  async function onCancellation() {
    setIsLoading(true);
    const res = await cancelAuthorizedReservation(rid);

    res ? toast.success("Reservation cancelled successfully!") : toast.error("Failed to cancel reservation!");

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <button
      onClick={onCancellation}
      className="mt-[2rem] flex h-[3rem] w-[12rem] items-center justify-center gap-[.5rem] rounded-lg border-2 border-red-600 text-[1.2rem] font-medium text-red-600 shadow-sm"
    >
      {isLoading && <LoadingSpinner width="2rem" height="2rem" color="red" />}
      {!isLoading && (
        <>
          <Trash2Icon size={17} color="red" />
          <p>Cancel</p>
        </>
      )}
    </button>
  );
}
