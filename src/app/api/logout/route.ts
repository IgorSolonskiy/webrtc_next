import { clearTokens } from "@/shared/helpers";
import { Tokens } from "@/shared/enums";

export async function POST() {
  clearTokens([Tokens.ACCESS_TOKEN, Tokens.REFRESH_TOKEN]);

  return Response.json({ message: "ok" });
}
