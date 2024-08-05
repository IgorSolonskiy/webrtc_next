import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { getProfile } from "@/entities/user";
import { fetchRefreshToken } from "@/shared/route-handlers";
import { clearResponseTokens, getAuthTokens } from "@/shared/helpers";
import { cookieOptions } from "@/shared/constants";
import { Tokens } from "@/shared/enums";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const errorResponse = NextResponse.redirect(new URL("/sign-in", request.url));
  const [accessToken, refreshToken] = getAuthTokens([
    Tokens.ACCESS_TOKEN,
    Tokens.REFRESH_TOKEN,
  ]);

  if (!accessToken || !refreshToken) return errorResponse;

  const result = await getProfile(accessToken);

  if (result.status === 403) {
    const refreshResult = await fetchRefreshToken(refreshToken);

    if (refreshResult.status === 403) {
      clearResponseTokens(errorResponse, [
        Tokens.ACCESS_TOKEN,
        Tokens.REFRESH_TOKEN,
      ]);
      return errorResponse;
    }

    const { accessToken: newAccessToken } = await refreshResult.json();
    response.cookies.set(Tokens.ACCESS_TOKEN, newAccessToken, cookieOptions);
  }

  return response;
}

export const config = {
  matcher: "/",
};
