export const loginUser = (data) =>
  fetch(process.env.NEXT_PUBLIC_API_URL + "/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
