import { format } from "date-fns";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

interface Props extends ConfirmedReservationResponse {
  image: string;
}

export default function ConfirmedReservationDetails({
  checkInDateUtc,
  checkOutDateUtc,
  numberOfGuests,
  identifier,
  user,
  image,
}: Props) {
  const formattedCheckInDate = format(new Date(checkInDateUtc), "dd/MM/yyyy");
  const formattedCheckOutDate = format(new Date(checkOutDateUtc), "dd/MM/yyyy");

  return (
    <div className="flex w-[40rem] flex-col items-center p-[1rem] md:w-[60rem] xs:w-[30rem]">
      <div className="relative h-[25rem] w-[38rem] md:h-[30rem] md:w-[45rem] xs:h-[20rem] xs:w-[30rem]">
        <Image src={image} fill alt="room-image" className="rounded-[2rem]" />
      </div>
      <div className="mt-[2rem] flex w-[38rem] flex-col gap-[1rem] md:w-[45rem] xs:w-[30rem]">
        <div className="flex w-full flex-col items-center justify-center gap-[1rem]">
          <CheckCircle2 size={50} fill="white" color="green" />
          <p className="text-[1.3rem] font-semibold text-green-600">Success</p>
        </div>
        <div className="flex w-full flex-col gap-[.5rem]">
          <p className="text-[1.2rem] font-semibold uppercase text-gray-400">Identifier:</p>
          <p className="text-[1.3rem] font-medium text-black">{identifier}</p>
        </div>
        <div className="flex flex-col gap-[.5rem]">
          <p className="text-[1.2rem] font-semibold uppercase text-gray-400">Check In:</p>
          <p className="text-[1.3rem] font-medium text-black">{formattedCheckInDate}</p>
        </div>
        <div className="flex flex-col gap-[.5rem]">
          <p className="text-[1.2rem] font-semibold uppercase text-gray-400">Check Out:</p>
          <p className="text-[1.3rem] font-medium text-black">{formattedCheckOutDate}</p>
        </div>
        <div className="flex flex-col gap-[.5rem]">
          <p className="text-[1.2rem] font-semibold uppercase text-gray-400">Number of Guests:</p>
          <p className="text-[1.3rem] font-medium text-black">{numberOfGuests}</p>
        </div>
        <div className="flex flex-col gap-[.5rem]">
          <p className="text-[1.2rem] font-semibold uppercase text-gray-400">User:</p>
          <p className="text-[1.3rem] font-medium text-black">ID: {user.id}</p>
          <p className="text-[1.3rem] font-medium text-black">Email: {user.email}</p>
        </div>
      </div>
    </div>
  );
}
