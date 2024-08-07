"use client";

import { useForm } from "react-hook-form";

import { Button, Label, TextField } from "@/shared/ui";

type FormValues = {
  email: string;
  username: string;
};

type Props = {
  onLogin: (values: FormValues) => void;
};

export const LoginForm = ({ onLogin }: Props) => {
  const { register, handleSubmit } = useForm<FormValues>();

  return (
    <form
      onSubmit={handleSubmit(onLogin)}
      className="flex flex-col gap-2 shadow-2xl p-12 rounded-lg"
    >
      <div>
        <Label htmlFor="email" text="Email" />
        <TextField id="email" {...register("email")} />
      </div>
      <div>
        <Label htmlFor="password" text="Password" />
        <TextField id="password" type="password" {...register("password")} />
      </div>
      <Button classes="mt-3" type="submit" text="Sign in" />
    </form>
  );
};
