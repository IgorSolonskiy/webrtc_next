import { useMutation } from "@tanstack/react-query";
import { UseMutationOptions } from "@tanstack/react-query/src/types";

interface IValues {
  email: string;
  password: string;
}

export const useLoginUser = (props: UseMutationOptions) =>
  useMutation({
    mutationFn: (values: IValues) =>
      fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }),
    ...props,
  });
