"use client";

import { useRouter } from "next/navigation";

import Image from "next/image";

interface Props {
  url: string;
}

export default function GoogleLoginBtn({ url }: Props) {
  const router = useRouter();
  const addr = url + "/v1/User/google-login";

  return (
    <button
      onClick={() => router.push(addr)}
      className="flex items-center justify-center gap-[.5rem] rounded-md border border-gray-300 px-[1.5rem] py-[.7rem] shadow-md"
    >
      <Image width={25} height={25} src="/images/icons/sm-icons/google_colored.webp" alt="google-logo" />
      <p className="text-[1.3rem] font-medium">Sign in with Google</p>
    </button>
  );
}
