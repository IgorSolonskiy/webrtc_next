export const registerUser = (data) =>
  fetch(process.env.NEXT_PUBLIC_API_URL + "/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
