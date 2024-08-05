"use client";

import { useRouter } from "next/navigation";

import { useLogoutUser } from "@/features/auth";
import { Button } from "@/shared/ui";

export const Logout = () => {
  const router = useRouter();
  const onSuccess = () => router.push("/sign-in");
  const mutation = useLogoutUser({ onSuccess });

  return <Button onClick={mutation.mutate} text="Logout" />;
};
