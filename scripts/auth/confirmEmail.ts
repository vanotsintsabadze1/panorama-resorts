"use server";

export async function confirmEmail(token: string) {
  if (!token) {
    return { error: "Token is required", status: 400 };
  }

  const url = process.env.API_ADDR;

  try {
    const res = await fetch(`${url}/v1/User/RegistrationEmailConfirmation?token=${token}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (res.ok) {
      return { message: "Successfully confirmed email", status: 200 };
    }

    if (!res.ok) {
      return { error: res.statusText, status: res.status };
    }
  } catch (error) {
    console.error(error);
    return { error: "An error occurred", status: 500 };
  }
}
