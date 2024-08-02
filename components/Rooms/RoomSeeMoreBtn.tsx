"use client";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
}

export default function RoomSeeMoreBtn({ id }: Props) {
  const router = useRouter();

  function onSeeMoreClick() {
    router.push(`/rooms/${id}`);
  }

  return (
    <button
      onClick={onSeeMoreClick}
      className="my-[.5rem] h-[3.5rem] w-[13rem] rounded-lg bg-black text-[1.3rem] font-bold uppercase text-white shadow-md"
    >
      See More
    </button>
  );
}
