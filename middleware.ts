import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { getUserAuthStatus } from "./scripts/auth/getUserAuthStatus";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("user");
  const pathname = request.nextUrl.pathname;
  const userAuthStatusRes = await getUserAuthStatus(token?.value as string);
  const userData = userAuthStatusRes.data;
  const isUserAuth = userData !== undefined;
  const isUserAdmin = userData ? userData.roles.includes("Admin") : false;

  if (token?.value && !isUserAuth) {
    const response = NextResponse.next();
    response.cookies.delete("user");
    return response;
  }

  // prettier-ignore
  if (((!isUserAuth && pathname.startsWith("/rooms")) || (!isUserAdmin && pathname.startsWith("/admin")) )) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  if (isUserAuth && (pathname.startsWith("/auth/login") || pathname.startsWith("/auth/register"))) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}
