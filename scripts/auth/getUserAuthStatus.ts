"use server";

import { cookies } from "next/headers";

export async function getUserAuthStatus(token: string) {
  const isUserAuth = cookies().get("user");
  const url = process.env.API_ADDR;

  if (!token) {
    return false;
  }

  try {
    const res = await fetch(`${url}/v1/User/GetCurrentUser`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.ok) {
      return true;
    } else {
      if (res.status === 401) {
        return false;
      }
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
}
