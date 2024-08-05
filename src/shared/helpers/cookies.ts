"use server";

import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { cookieOptions } from "@/shared/constants";

export const setTokens = (authCookies: { [key: string]: string }): void => {
  const cookieStore = cookies();

  Object.entries(authCookies).forEach(([name, value]) =>
    cookieStore.set(name, value, cookieOptions),
  );
};

export const clearTokens = (names: string[]): void => {
  const cookieStore = cookies();

  names.forEach((name) => cookieStore.delete(name));
};

export const getAuthTokens = (names: string[]): (string | null)[] => {
  return names.map((name) => cookies().get(name)?.value || null);
};

export const clearResponseTokens = (
  response: NextResponse,
  names: string[],
) => {
  names.forEach((name) => {
    response.cookies.delete(name);
  });
};
