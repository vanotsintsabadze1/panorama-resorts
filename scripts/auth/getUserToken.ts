"use server";

import { cookies } from "next/headers";

export async function getUserToken() {
  const cookieStore = cookies();

  const token = cookieStore.get("user");

  return token?.value ? token.value : null;
}
