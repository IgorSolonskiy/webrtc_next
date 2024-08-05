import { useMutation } from "@tanstack/react-query";
import { UseMutationOptions } from "@tanstack/react-query/src/types";

export const useRegisterUser = (props: UseMutationOptions) =>
  useMutation({
    mutationFn: (values) =>
      fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }),
    ...props,
  });
