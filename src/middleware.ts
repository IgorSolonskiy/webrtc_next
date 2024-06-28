import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { getProfile } from "@/shared/api";

export async function middleware(request: NextRequest) {
  const result = await getProfile();

  if (!result.ok) {
    return NextResponse.redirect(new URL("/meet", request.url));
  }
}

export const config = {
  matcher: "/",
};
