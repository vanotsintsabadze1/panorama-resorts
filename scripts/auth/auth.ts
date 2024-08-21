"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// Log in functionality
export async function loginUser({ email, password }: RegisterField) {
  const url = process.env.API_ADDR;

  if (!email || !password) {
    return { status: 400, message: "Please fill all fields." };
  }

  try {
    const res = await fetch(`${url}/v1/User/Login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      const data = await res.json();
      cookies().set("user", data, {
        expires: new Date(Date.now() + 9 * 24 * 60 * 60 * 1000),
      });
      return { status: 200, message: "Logged in." };
    }

    if (!res.ok) {
      return { status: res.status, message: "Invalid Credentials" };
    }
  } catch (error) {
    console.error(error);
    return { status: 500, message: "Internal server error." };
  }
}

// Log out functionality
export async function logoutUser() {
  cookies().delete("user");
  return redirect("/auth/login");
}

// Register user functionality
export async function registerUser({ email, password }: RegisterField) {
  const url = process.env.API_ADDR;

  if (!email || !password) {
    return { error: "Email and password are required", status: 400 };
  }

  try {
    const res = await fetch(`${url}/v1/User/Register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (!res.ok) {
      return { error: res.statusText, status: res.status };
    }

    if (res.ok) {
      return { message: "Successfully registered", status: 200 };
    }
  } catch (error) {
    console.error(error);
    return { error: "An error occurred", status: 500 };
  }
}
