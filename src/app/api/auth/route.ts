import { cookies } from "next/headers";

const options = { httpOnly: true, secure: true };

export async function POST(request: Request) {
  const cookieStore = cookies();
  const body = await request.json();
  const result = await fetch(process.env.NEXT_PUBLIC_API_URL + "/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!result.ok) {
    return new Response("Email or password is incorrect.", {
      status: 400,
    });
  }

  const { accessToken, refreshToken } = await result.json();

  cookieStore.set("accessToken", accessToken, options);
  cookieStore.set("refreshToken", refreshToken, options);

  return Response.json({ message: "ok" });
}
