import EditRoomCard from "@/components/Admin/Rooms/EditRoomCard";
import { getUserToken } from "@/scripts/auth/getUserToken";
import { redirect } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

async function getRoombyId(id: string) {
  const url = process.env.API_ADDR;
  const token = await getUserToken();

  try {
    const res = await fetch(`${url}/v1/Room/${id}/1`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data: Room = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function page({ params }: Props) {
  const room = await getRoombyId(params.id);
  const token = await getUserToken();
  const url = process.env.API_ADDR;

  if (!room) {
    return redirect("/admin/rooms");
  }

  return (
    <section className="flex w-full items-center justify-center px-[2rem] py-[5rem]">
      <EditRoomCard url={url as string} token={token as string} {...room} />
    </section>
  );
}
