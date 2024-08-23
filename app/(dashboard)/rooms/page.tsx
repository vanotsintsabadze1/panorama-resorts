import RoomsBanner from "@/components/Rooms/RoomsBanner";
import RoomsWrapper from "@/components/Rooms/RoomsWrapper";
import { getUserToken } from "@/scripts/auth/getUserToken";
import { getAllRooms } from "@/scripts/rooms/getAllRooms";

export default async function page() {
  const rooms: Room[] | null = await getAllRooms();
  const url = process.env.API_ADDR;
  const token = await getUserToken();

  return (
    <>
      <RoomsBanner />
      <RoomsWrapper rooms={rooms} url={url as string} token={token as string} />
    </>
  );
}
