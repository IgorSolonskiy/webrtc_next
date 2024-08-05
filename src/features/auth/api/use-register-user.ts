import { useMutation } from "@tanstack/react-query";
import { UseMutationOptions } from "@tanstack/react-query/src/types";

interface IValues {
  email: string;
  username: string;
  password: string;
}

export const useRegisterUser = (props: UseMutationOptions) =>
  useMutation({
    mutationFn: (values: IValues) =>
      fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }),
    ...props,
  });
