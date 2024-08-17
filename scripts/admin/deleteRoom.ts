"use server";

import { getUserToken } from "../auth/getUserToken";

export async function deleteRoom(id: string) {
  const url = process.env.API_ADDR;
  const token = await getUserToken();

  console.log(id);

  if (!token || !id) {
    return null;
  }

  try {
    const res = await fetch(`${url}/v1/Room/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return res.status === 200 ? { status: 200 } : { status: res.status };
  } catch (error) {
    console.error(error);
    return { status: 500 };
  }
}
