"use client";

import { Button } from "@/shared/ui";
import { useLogoutUser } from "@/features/auth";
import { useRouter } from "next/navigation";

export const LogoutButton = () => {
  const router = useRouter();
  const onSuccess = () => router.push("/sign-in");
  const mutation = useLogoutUser({ onSuccess });
  const handleClick = () => mutation.mutate();

  return <Button onClick={handleClick} text="Logout" />;
};
