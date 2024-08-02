import UserReservationsWrapper from "@/components/UserReservations/UserReservationsWrapper";
import { getUserReservations } from "@/scripts/rooms/getUserReservations";

export default async function page() {
  const userReservations: ConfirmedReservationResponse[] | null = await getUserReservations();

  return (
    <section className="flex min-h-[40rem] w-full flex-col items-center justify-center">
      <UserReservationsWrapper userReservations={userReservations} />
    </section>
  );
}
