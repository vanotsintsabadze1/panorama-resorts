"use server";

import { getUserToken } from "../auth/getUserToken";

export async function createRoom(formData: FormData) {
  const url = process.env.API_ADDR;
  const token = await getUserToken();

  if (!formData) {
    return { status: 200, message: "No form data provided" };
  }

  try {
    const response = await fetch(`${url}/v1/Room`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (response.ok) {
      return { status: 200, message: "Room created successfully" };
    } else {
      return { status: response.status, message: "Failed to create room" };
    }
  } catch (error) {
    console.error(error);
    return { status: 500, message: "Internal server error" };
  }
}
