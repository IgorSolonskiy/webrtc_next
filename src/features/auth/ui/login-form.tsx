"use client";

import { useForm } from "react-hook-form";

import { Button, Label, TextField } from "@/shared/ui";

interface FormValues {
  email: string;
  username: string;
}

interface IProps {
  onLogin: (values: FormValues) => void;
}

export const LoginForm = ({ onLogin }: IProps) => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit = handleSubmit(onLogin);

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
