import { getAllRooms } from "@/scripts/rooms/getAllRooms";
import RoomsWrapper from "@/components/Admin/Rooms/RoomsWrapper";

export default async function page() {
  const rooms: Room[] | null = await getAllRooms();

  return <RoomsWrapper rooms={rooms} />;
}
