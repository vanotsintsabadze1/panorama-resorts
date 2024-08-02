"use client";
import Link from "next/link";
import toast from "react-hot-toast";
import { confirmReservation } from "@/scripts/rooms/confirmReservation";
import { XCircle } from "lucide-react";
import { useEffect, useState } from "react";
import ConfirmedReservationDetails from "../Single-Room-Page/ConfirmedReservationDetails";
import LoadingSpinner from "@/components/misc/LoadingSpinner";

export default function ReservationConfirmation() {
  const [token, setToken] = useState<string | null>(null);
  const [data, setData] = useState<ConfirmedReservationResponse | undefined>(undefined);
  const [fetched, setFetched] = useState(false);

  async function confirmReservationOnLoad() {
    if (!token) {
      return;
    }
    const res = await confirmReservation(token);

    setFetched(true);
    if (res?.status === 200) {
      setData(res.data);
      return;
    }

    if (res?.status !== 400) {
      toast.error("Failed to confirm reservation");
      return;
    }
  }

  useEffect(() => {
    let rid = window.localStorage.getItem("rid");
    if (rid !== null) {
      setToken(rid);
    }
  }, []);

  useEffect(() => {
    if (token) {
      confirmReservationOnLoad();
      window.localStorage.removeItem("rid");
    }
  }, [token]);

  return fetched ? (
    <section className="flex w-full items-center justify-center px-[1rem] py-[4rem]">
      {data && <ConfirmedReservationDetails {...data} />}
      {!data && (
        <div className="flex flex-col items-center justify-center gap-[2rem] rounded-[2rem] bg-white px-[4rem] py-[3rem] xs:w-[30rem]">
          <XCircle size={150} fill="white" color="red" />
          <p className="text-center text-[1.3rem] font-bold">
            Failed to confirm reservation.
            <br /> <br /> Please try again or contact the team later
          </p>
          <Link href="/auth/login" className="text-center font-medium text-blue-500 underline underline-offset-2">
            Go to your reservations
          </Link>
        </div>
      )}
    </section>
  ) : (
    <section className="flex h-[40rem] w-full items-center justify-center">
      <LoadingSpinner width="4rem" height="4rem" color="black" />
    </section>
  );
}
