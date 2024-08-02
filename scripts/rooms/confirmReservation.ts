"use server";
import { cookies } from "next/headers";

export async function confirmReservation(rid: string) {
  const url = process.env.API_ADDR;
  const token = cookies().get("user");

  if (!rid) {
    return {
      status: 400,
      message: "Please fill all the fields",
    };
  }

  try {
    const res = await fetch(`${url}/v1/Reservation/ApproveReservation/${rid}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token?.value}`,
      },
    });

    if (res.ok) {
      const data = await res.json();
      return { status: 200, data };
    }

    if (!res.ok) {
      return { status: res.status, message: "Failed to confirm reservation" };
    }
  } catch (error) {
    console.error(error);
    return { status: 500, message: "Internal Server Error" };
  }
}
