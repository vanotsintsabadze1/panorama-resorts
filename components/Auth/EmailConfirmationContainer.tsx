"use client";

import { useRouter } from "next/navigation";
import { CheckCircle2, XCircle } from "lucide-react";
import { useEffect } from "react";
import Link from "next/link";
import { useState } from "react";

interface Props {
  status: number;
}

export default function EmailConfirmationContainer({ status }: Props) {
  const router = useRouter();

  const [count, setCount] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (count === 0) {
      router.push("/auth/login");
    }
  }, [count]);

  return (
    <main className="no-scrollbar flex h-screen w-full items-center justify-center bg-gray-300 text-center text-[1.3rem] font-bold">
      <div className="flex flex-col items-center justify-center gap-[2rem] rounded-[2rem] bg-white px-[4rem] py-[3rem] xs:w-[30rem]">
        {status === 200 ? (
          <CheckCircle2 size={80} fill="white" color="green" />
        ) : (
          <XCircle size={80} fill="white" color="red" />
        )}
        {status === 200 ? "Email confirmed successfully!" : "An error occurred while confirming email."}
        <Link href="/auth/login" className="font-medium text-blue-500 underline underline-offset-2">
          Go to Login
        </Link>
        <p className="text-[1.2rem] font-medium">You'll be automatically redirected to login page in: {count}</p>
      </div>
    </main>
  );
}
