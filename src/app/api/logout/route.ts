import { clearTokens } from "@/shared/helpers";

export async function POST(request: Request) {
  clearTokens(["accessToken", "refreshToken"]);

  return Response.json({ message: "ok" });
}
