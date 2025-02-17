import { NextResponse } from "next/server";
import { authenticateUser } from "@ipsy/trpc/src/commercetools";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    console.log(email, password, "creds");
    const authResponse = await authenticateUser(email, password);
    console.log(authResponse, "auth");
    // Set auth token in a secure HTTP-only cookie
    const response = NextResponse.json({ success: true });
    response.cookies.set("commercetools_token", authResponse.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: authResponse.expires_in,
    });
    console.log(response, "authtoken")
    return response;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Invalid credentials" },
      { status: 401 }
    );
  }
}
