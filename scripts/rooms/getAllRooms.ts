"use server";

export async function getAllRooms() {
  const url = process.env.API_ADDR;

  try {
    const res = await fetch(`${url}/v1/Room`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      cache: "no-cache",
    });

    if (res.ok) {
      const data = await res.json();
      return data;
    }

    if (!res.ok) {
      const data = await res.json();
      return [];
    }
  } catch (err) {
    console.error(err);
    return [];
  }
}
