"use client";

import GoogleLoginWrapper from "@/components/Auth/Login/GoogleLoginWrapper";
import { googleLogin } from "@/scripts/auth/auth";
import { redirect } from "next/navigation";

interface Props {
  searchParams: {
    [key: string]: string;
  };
}

export default async function page({ searchParams }: Props) {
  if (!searchParams.code) {
    return redirect("/");
  }

  const code = searchParams.code;

  return <GoogleLoginWrapper code={code} />;
}
