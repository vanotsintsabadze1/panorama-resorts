"use server";

export async function getUserAuthStatus(token: string) {
  const url = process.env.API_ADDR;

  if (!token) {
    return false;
  }

  try {
    const res = await fetch(`${url}/v1/User/GetCurrentUser`, {
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
