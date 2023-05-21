import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export { default } from "next-auth/middleware";
export const config = { matcher: ["/"] };

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process?.env?.NEXTAUTH_SECRET,
    cookieName: "next-auth.session-token",
  });

  const { pathname } = request.nextUrl;

  if (
    token?.token &&
    Math.floor(Date.now() / 1000) < token?.refreshExpiresIn!!
  ) {
    return NextResponse.redirect("/login");
  }

  return NextResponse.next();
}
