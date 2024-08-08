"use server";

import { getUserToken } from "../auth/getUserToken";

// This function gets revoked after the INITIAL PAYPAL CANCELLATION.
// It's not related to the post-successful payment cancellation.
// See cancelAuthorizedReservation.ts for that.

export async function cancelReservation(identifier: string) {
  const url = process.env.API_ADDR;
  const token = await getUserToken();

  if (!identifier || !token) {
    return false;
  }

  try {
    const res = await fetch(`${url}/v1/Reservation/CancelReservation/${identifier}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return res.ok ? true : false;
  } catch (error) {
    console.error(error);
    return false;
  }
}
