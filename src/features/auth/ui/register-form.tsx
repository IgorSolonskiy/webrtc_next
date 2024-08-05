"use client";

import { useForm } from "react-hook-form";

import { Button, Label, TextField } from "@/shared/ui";

interface FormValues {
  email: string;
  password: string;
  username: string;
}

interface IProps {
  onRegister: (values: FormValues) => void;
}

export const RegisterForm = ({ onRegister }: IProps) => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit = handleSubmit(onRegister);

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
