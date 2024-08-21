"use server";

import { getUserToken } from "../auth/getUserToken";

export async function deleteReview(reviewId: string) {
  const url = process.env.API_ADDR;
  const token = await getUserToken();

  try {
    const res = await fetch(`${url}/v1/Review?reviewId=${reviewId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.ok) {
      return { status: 200, message: "Review deleted successfully" };
    } else {
      return { status: res.status, message: "Failed to delete review" };
    }
  } catch (error) {
    console.error(error);
    return { status: 500, message: "Internal server error" };
  }
}
