"use server";

import { getUserToken } from "../auth/getUserToken";

export async function editReview(starCount: number, text: string, roomId: string) {
  const url = process.env.API_ADDR;
  const token = await getUserToken();

  try {
    const res = await fetch(`${url}/v1/Review?roomId=${roomId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ starCount, text }),
    });

    return res.ok ? { status: 200 } : { status: res.status, message: res.statusText };
  } catch (error) {
    console.error(error);
    return { status: 500, message: error };
  }
}
