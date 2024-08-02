"use client";
import { useRouter } from "next/navigation";

import { Bookmark } from "lucide-react";

interface Props {
  reservationCount: number;
}

export default function UserReservationsMarker({ reservationCount }: Props) {
  const router = useRouter();

  return (
    <div className="relative flex items-center justify-center">
      <button onClick={() => router.push("/rooms/userReservations")}>
        <Bookmark size={30} fill="white" />
      </button>
      {reservationCount > 0 && (
        <div className="absolute -right-1 -top-2 rounded-[50%] bg-orange-600 px-[.6rem] py-[.1rem] text-[1.1rem] font-semibold text-white">
          {reservationCount}
        </div>
      )}
    </div>
  );
}
