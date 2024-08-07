"use client";
import { useState } from "react";
import LoginBtn from "./LoginBtn";
import Link from "next/link";

export default function LoginFields() {
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });

  return (
    <form className="flex w-full flex-col items-center gap-[2rem] px-[2rem]">
      <input
        className="h-[4rem] w-full border-b-2 border-b-black/50 px-[1.2rem] py-[1rem] text-[1.3rem] outline-none duration-200"
        type="email"
        name="email"
        autoComplete="on"
        value={creds.email}
        onChange={(e) => setCreds({ ...creds, email: e.target.value })}
        placeholder="Email"
      />
      <input
        className="h-[4rem] w-full border-b-2 border-b-black/50 px-[1.2rem] py-[1rem] text-[1.3rem] outline-none duration-200"
        type="password"
        name="password"
        autoComplete="on"
        value={creds.password}
        onChange={(e) => setCreds({ ...creds, password: e.target.value })}
        placeholder="Password"
      />
      <div className="flex w-full items-center justify-between px-[.5rem]">
        <div className="flex items-center gap-[.5rem]">
          <input type="checkbox" name="" id="" />
          <label className="text-[1.1rem] font-medium">Remember me</label>
        </div>
        <Link href="#" className="text-primary text-[1.1rem] font-medium underline underline-offset-1">
          Forgot password?
        </Link>
      </div>

      <div className="flex w-full items-center justify-center py-[1rem]">
        <Link href="/auth/register" className="text-[1.2rem] font-medium text-blue-500 underline underline-offset-1">
          Don't have an account?
        </Link>
      </div>
      <div className="flex w-full items-center justify-center py-[1rem]">
        <LoginBtn setCreds={setCreds} email={creds.email} password={creds.password} />
      </div>
    </form>
  );
}
