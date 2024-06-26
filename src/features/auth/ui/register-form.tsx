import { Button, Label, TextField } from "@/shared/ui";

export const RegisterForm = () => {
  return (
    <form className="flex flex-col gap-2 shadow-2xl p-12 rounded-lg">
      <div>
        <Label htmlFor="email" text="Email" />
        <TextField id="email" />
      </div>
      <div>
        <Label htmlFor="username" text="Username" />
        <TextField id="username" />
      </div>
      <div>
        <Label htmlFor="password" text="Password" />
        <TextField id="password" />
      </div>
      <Button classes="mt-3" type="button" text="Sign up" />
    </form>
  );
};
