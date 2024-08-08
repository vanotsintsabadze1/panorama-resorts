"use server";

import { getUserToken } from "../auth/getUserToken";

export default async function editRoom(formData: FormData) {
  const url = process.env.API_ADDR;
  const token = await getUserToken();

  if (!token || !url) {
    return null;
  }

  try {
    const res = await fetch(`${url}/v1/Room`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    console.log(res);

    return res.ok ? { status: 200 } : { status: res.status };
  } catch (error) {
    console.error(error);
    return { status: 500 };
  }
}
