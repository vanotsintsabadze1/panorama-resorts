import UserReservationCard from "./UserReservationCard";

interface Props {
  userReservations: ConfirmedReservationResponse[] | null;
}

export default function UserReservationsWrapper({ userReservations }: Props) {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center gap-[1rem] px-[2rem] py-[3rem]">
        <h1 className="text-center text-[2rem] font-semibold text-gray-800">Your Reservations</h1>
        <canvas className="h-[.1rem] w-[38rem] bg-gray-500/50 xs:w-full" />
        <p className="max-w-[35rem] text-center text-[1.3rem] font-light opacity-70">
          Notice: You can cancel your reservation without any fee only if it's not a day before the actual check-in,
          otherwise the fee must be paid.
        </p>
      </div>

      <div className="flex w-full flex-col items-center gap-[3rem] px-[1rem]">
        {userReservations &&
          userReservations.map((reservation) => (
            <UserReservationCard key={reservation.identifier} reservation={reservation} />
          ))}
      </div>
      {userReservations && userReservations.length === 0 && (
        <p className="text-[1.5rem] font-light uppercase tracking-widest text-gray-400">No Reservations</p>
      )}
    </>
  );
}
