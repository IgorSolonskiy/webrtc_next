"use client";

import { useForm } from "react-hook-form";

import { Button, Label, TextField } from "@/shared/ui";

type FormValues = {
  email: string;
  password: string;
  username: string;
};

type Props = {
  onRegister: (values: FormValues) => void;
};

export const RegisterForm = ({ onRegister }: Props) => {
  const { register, handleSubmit } = useForm<FormValues>();

  return (
    <form
      onSubmit={handleSubmit(onRegister)}
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
        <TextField id="password" type="password" {...register("password")} />
      </div>
      <Button classes="mt-3" type="submit" text="Sign up" />
    </form>
  );
};
