"use client";

import { useRouter } from "next/navigation";

import { LogoutButton, useLogoutUser } from "@/features/auth";

export const Logout = () => {
  const router = useRouter();
  const onSuccess = () => router.push("/sign-in");
  const mutation = useLogoutUser({ onSuccess });

  return <LogoutButton onClick={mutation.mutate} />;
};
