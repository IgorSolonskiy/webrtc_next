import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

const options = {
  secure: true,
  httpOnly: true,
};

const getProfile = async (accessToken: string) =>
  fetch(process.env.NEXT_PUBLIC_API_URL + "/auth/profile", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

const fetchRefreshToken = async (refreshToken: string) =>
  fetch(process.env.NEXT_PUBLIC_API_URL + "/auth/refresh", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${refreshToken}`,
    },
  });

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const accessToken = cookies().get("accessToken")?.value;
  const refreshToken = cookies().get("refreshToken")?.value;
  const errorResponse = NextResponse.redirect(new URL("/sign-in", request.url));

  if (!accessToken || !refreshToken) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  const result = await getProfile(accessToken);

  if (result.status === 403) {
    const refreshResult = await fetchRefreshToken(refreshToken);

    if (refreshResult.status === 403) {
      errorResponse.cookies.delete("accessToken");
      errorResponse.cookies.delete("refreshToken");
      return errorResponse;
    }

    const { accessToken: newAccessToken } = await refreshResult.json();

    response.cookies.set("accessToken", newAccessToken, options);
  }

  return response;
}

export const config = {
  matcher: "/",
};
