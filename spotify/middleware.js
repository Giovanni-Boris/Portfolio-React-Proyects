import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
export const config = {
  matcher: "/",
};
export async function middleware(req) {
  //Token will exist if user is logged in
  const token = await getToken({ req, secret: process.env.JWT_SECRET });
  const { pathname } = req.nextUrl;
  console.log("using middleware", pathname);
  //Allow the request if the following is true....
  // if the token exits
  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next();
  }
  //Redirect them to login if they dont have token AND are requesting a protected route
  if (!token && pathname !== "/login") {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.rewrite(url);
  }
}
