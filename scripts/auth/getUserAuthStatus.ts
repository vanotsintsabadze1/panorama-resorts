"use server";

export async function getUserAuthStatus(token: string) {
  const url = process.env.API_ADDR;

  try {
    const res = await fetch(`${url}/v1/User/GetCurrentUser`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    let data: AuthorizedUser | undefined;

    if (res.ok) {
      data = (await res.json()) as AuthorizedUser;
      return { data, isAuth: true };
    } else {
      return { data: undefined, isAuth: false };
    }
  } catch (error) {
    console.error(error);
    return { data: undefined, isAuth: false };
  }
}
