"use client";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import { LoginForm, useLoginUser } from "@/features/auth";

export const Login = () => {
  const router = useRouter();

  const onSuccess = (res: Response) => {
    if (!res.ok) return toast.error("Email or password is incorrect.");

    router.push("/");
  };

  const mutation = useLoginUser({ onSuccess });

  return <LoginForm onLogin={mutation.mutate} />;
};
