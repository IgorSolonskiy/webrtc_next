"use client";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

import { useRegisterUser } from "@/features/auth";
import { Button, Label, TextField } from "@/shared/ui";

export const RegisterForm = () => {
  const router = useRouter();

  const onSuccess = (res: Response) => {
    if (!res.ok) return toast.error("Something went wrong, try again later.");

    router.push("/sign-in");
  };

  const mutation = useRegisterUser({ onSuccess });
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = handleSubmit(mutation.mutate);

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-2 shadow-2xl p-12 rounded-lg"
    >
      <div>
        <Label htmlFor="email" text="Email" />
        <TextField id="email" {...register("email")} />
      </div>
      <div>
        <Label htmlFor="username" text="Username" />
        <TextField id="username" {...register("username")} />
      </div>
      <div>
        <Label htmlFor="password" text="Password" />
        <TextField type="password" id="password" {...register("password")} />
      </div>
      <Button classes="mt-3" type="submit" text="Sign up" />
    </form>
  );
};
