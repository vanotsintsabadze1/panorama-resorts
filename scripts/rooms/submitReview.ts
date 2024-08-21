"use server";

import { getUserToken } from "../auth/getUserToken";

export async function submitReview(starCount: number, text: string, roomId: string) {
  const url = process.env.API_ADDR;
  const token = await getUserToken();

  try {
    const res = await fetch(`${url}/v1/Review`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ starCount, text, roomId }),
    });

    if (res.ok) {
      return { status: 200 };
    } else {
      console.error(res.statusText);
      return { status: res.status, message: res.statusText };
    }
  } catch (error) {
    console.error(error);
    return { status: 500, message: "Internal Server Error" };
  }
}
