"use client";

import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { useLoginUser } from "@/features/auth";
import { Button, Label, TextField } from "@/shared/ui";

type FormData = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const router = useRouter();

  const onSuccess = (res: Response) => {
    if (!res.ok) return toast.error("Email or password is incorrect.");

    router.push("/");
  };

  const mutation = useLoginUser({ onSuccess });
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = handleSubmit(mutation.mutate);

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-2 shadow-2xl p-12 rounded-lg"
    >
      <div>
        <Label htmlFor="email" text="Email" />
        <TextField type="text" {...register("email")} />
      </div>
      <div>
        <Label htmlFor="password" text="Password" />
        <TextField type="password" {...register("password")} />
      </div>
      <Button classes="mt-3" type="submit" text="Sign in" />
    </form>
  );
};
