"use server";

import { getUserToken } from "../auth/getUserToken";

export async function getUserReservations() {
  const url = process.env.API_ADDR;
  const token = await getUserToken();

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

    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}
