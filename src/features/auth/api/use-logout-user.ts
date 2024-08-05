import { useMutation } from "@tanstack/react-query";
import { UseMutationOptions } from "@tanstack/react-query/src/types";

export const useLogoutUser = (props: UseMutationOptions) =>
  useMutation({
    mutationFn: (values) =>
      fetch("/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    ...props,
  });
