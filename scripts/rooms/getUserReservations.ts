"use server";

import { cookies } from "next/headers";

export async function getUserReservations() {
  const url = process.env.API_ADDR;
  const token = cookies().get("user")?.value;

  if (!token) return null;

  try {
    const res = await fetch(`${url}/v1/Reservation/UserReservations`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-cache",
      next: {
        tags: ["userReservations"],
      },
    });

    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
