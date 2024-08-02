"use client";

import { useRouter } from "next/navigation";

export default function ContactUsBtn() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/contact")}
      className="h-[3.5rem] w-[12rem] rounded-[2rem] bg-orange-600 font-semibold text-white"
    >
      Contact us
    </button>
  );
}
