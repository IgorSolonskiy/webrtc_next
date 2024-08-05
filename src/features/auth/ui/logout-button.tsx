"use client";

import { useRouter } from "next/navigation";

import { useLogoutUser } from "@/features/auth";
import { Button } from "@/shared/ui";

export const LogoutButton = () => {
  const router = useRouter();
  const onSuccess = () => router.push("/sign-in");
  const mutation = useLogoutUser({ onSuccess });
  const handleClick = () => mutation.mutate();

  return <Button onClick={handleClick} text="Logout" />;
};
