"use client";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import { RegisterForm, useRegisterUser } from "@/features/auth";

export const Register = () => {
  const router = useRouter();

  const onSuccess = (res: Response) => {
    if (!res.ok) return toast.error("Something went wrong, try again later.");

    router.push("/sign-in");
  };

  const mutation = useRegisterUser({ onSuccess });

  return <RegisterForm onRegister={mutation.mutate} />;
};
