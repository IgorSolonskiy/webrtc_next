export const fetchRefreshToken = async (refreshToken: string) =>
  fetch(process.env.NEXT_PUBLIC_API_URL + "/auth/refresh", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${refreshToken}`,
    },
  });
