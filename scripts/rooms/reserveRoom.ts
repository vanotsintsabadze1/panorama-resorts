"use server";
import { getUserToken } from "../auth/getUserToken";
import { formatInTimeZone } from "date-fns-tz";

export async function reserveRoom(roomId: string, checkInDate: Date, checkOutDate: Date, residentAmount: number) {
  const url = process.env.API_ADDR;
  const tz = "Asia/Tbilisi";

  const formattedCheckInDate = formatInTimeZone(checkInDate, tz, "yyyy-MM-dd'T'00:00:00");
  const formattedCheckOutDate = formatInTimeZone(checkOutDate, tz, "yyyy-MM-dd'T'00:00:00");

  const token = await getUserToken();

  if (!roomId || !checkInDate || !checkOutDate || !residentAmount || false) {
    return {
      status: 400,
      message: "Please fill all the fields",
    };
  }

  try {
    const res = await fetch(`${url}/v1/Reservation`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        roomId: roomId,
        checkInDateUtc: formattedCheckInDate,
        checkOutDateUtc: formattedCheckOutDate,
        paymentMethod: 1,
        numberOfGuests: residentAmount,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      return { status: 200, data };
    }

    if (!res.ok) {
      return { status: res.status, message: "Failed to reserve room" };
    }
  } catch (error) {
    console.error(error);
    return { status: 500, message: "Internal Server Error" };
  }
}
