"use server";
import { revalidateTag } from "next/cache";
import { getUserToken } from "../auth/getUserToken";

export async function cancelAuthorizedReservation(identifier: string) {
  const url = process.env.API_ADDR;
  const token = await getUserToken();

  if (!identifier || !token) {
    return false;
  }

  try {
    const res = await fetch(`${url}/v1/Reservation/CancelAuthorized/${identifier}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.ok) {
      revalidateTag("userReservations");
      return true;
    }

    if (!res.ok) {
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
}
