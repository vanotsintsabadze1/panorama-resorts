import ReservationConfirmation from "@/components/Rooms/Statuses/ReservationConfirmation";
import { getUserToken } from "@/scripts/auth/getUserToken";

export default async function page() {
  const url = process.env.API_ADDR;
  const token = await getUserToken();

  return <ReservationConfirmation url={url as string} token={token as string} />;
}
