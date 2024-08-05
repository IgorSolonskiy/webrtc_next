import { loginUser } from "@/shared/route-handlers";
import { setTokens } from "@/shared/helpers";

export async function POST(request: Request) {
  const body = await request.json();
  const result = await loginUser(body);

  if (!result.ok) {
    return new Response("Email or password is incorrect.", {
      status: 400,
    });
  }

  const { accessToken, refreshToken } = await result.json();

  setTokens({ accessToken, refreshToken });

  return Response.json({ message: "ok" });
}
