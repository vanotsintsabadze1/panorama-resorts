"use client";

import Link from "next/link";
import RegisterSubmitBtn from "./RegisterSubmitBtn";
import { useState } from "react";

export default function RegisterFields() {
  const [creds, setCredentials] = useState<RegisterField>({
    email: "",
    password: "",
  });

  return (
    <form className="flex w-full flex-col items-center gap-[2rem] px-[2rem]">
      <input
        className="h-[4rem] w-full border-b-2 border-b-black/50 px-[1.2rem] py-[1rem] text-[1.3rem] outline-none duration-200"
        type="email"
        value={creds.email}
        onChange={(e) => setCredentials({ ...creds, email: e.target.value })}
        name="email"
        placeholder="Email"
      />
      <input
        className="h-[4rem] w-full border-b-2 border-b-black/50 px-[1.2rem] py-[1rem] text-[1.3rem] outline-none duration-200"
        type="password"
        value={creds.password}
        onChange={(e) => setCredentials({ ...creds, password: e.target.value })}
        name="password"
        placeholder="Password"
      />
      <div className="mt-[1rem] flex w-full items-center justify-center">
        <Link href="/auth/login" className="text-[1.2rem] font-medium text-blue-500 underline underline-offset-2">
          Already have an account?
        </Link>
      </div>
      <div className="mt-[.5rem] flex w-full items-center justify-center pb-[1rem]">
        <RegisterSubmitBtn setCreds={setCredentials} email={creds.email} password={creds.password} />
      </div>
    </form>
  );
}
