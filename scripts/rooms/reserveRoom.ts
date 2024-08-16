"use server";
import { format } from "date-fns";
import { getUserToken } from "../auth/getUserToken";

export async function reserveRoom(roomId: string, checkInDate: Date, checkOutDate: Date, residentAmount: number) {
  const url = process.env.API_ADDR;
  const formattedCheckInDate = format(checkInDate, "yyyy-MM-dd'T'HH:mm:ss.SSSSSSSXXX");
  const formattedCheckOutDate = format(checkOutDate, "yyyy-MM-dd'T'HH:mm:ss.SSSSSSSXXX");
  const token = await getUserToken();

  if (!roomId || !checkInDate || !checkOutDate || !residentAmount) {
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

    console.log("🚀 ~ reserveRoom ~ res:", res);

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
