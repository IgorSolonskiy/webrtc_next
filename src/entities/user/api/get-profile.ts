export const getProfile = async (accessToken: string) =>
  fetch(process.env.NEXT_PUBLIC_API_URL + "/auth/profile", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
