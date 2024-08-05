import { registerUser } from "@/shared/route-handlers";

export async function POST(request: Request) {
  const body = await request.json();
  const result = await registerUser(body);

  if (!result.ok) {
    return new Response("Something went wrong, try again later.", {
      status: 400,
    });
  }

  return Response.json({ message: "ok" });
}
