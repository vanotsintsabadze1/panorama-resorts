import { redirect } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

async function getRoombyId(id: string) {
  const url = process.env.API_ADDR;
  try {
    const res = await fetch(`${url}/rooms/${id}`);

    const data: Room = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function page({ params }: Props) {
  const room = await getRoombyId(params.id);

  if (!room) {
    return redirect("/admin/rooms");
  }

  return <div>page</div>;
}
