"use client";

import { cancelAuthorizedReservation } from "@/scripts/rooms/cancelAuthorizedReservation";
import { Trash2Icon } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import LoadingSpinner from "../misc/LoadingSpinner";
import ConfirmationModal from "../misc/ConfirmationModal";

interface Props {
  rid: string;
}

export default function ReservationCancelBtn({ rid }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [shouldConfirmationModalOpen, setShouldConfirmationModalOpen] = useState(false);

  async function onCancellation() {
    setIsLoading(true);
    const res = await cancelAuthorizedReservation(rid);

    res ? toast.success("Reservation cancelled successfully!") : toast.error("Failed to cancel reservation!");

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <>
      {shouldConfirmationModalOpen && (
        <ConfirmationModal callback={() => onCancellation()} setModal={setShouldConfirmationModalOpen} />
      )}

      <button
        onClick={() => setShouldConfirmationModalOpen(true)}
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
    </>
  );
}
