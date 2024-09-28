import NextAuth from "next-auth";
import authConfig from "./auth.config";
import {
  API_AUTH_PREFIX,
  AUTH_REDIRECT_URL,
  AUTH_ROUTES,
  PUBLIC_ROUTES,
  UN_AUTHORIZED_REDIRECT_URL,
} from "./routes";

export const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const authRoutes = AUTH_ROUTES.includes(nextUrl.pathname);
  const publicRoutes = PUBLIC_ROUTES.includes(nextUrl.pathname);
  const isApiRoutes = nextUrl.pathname.startsWith(API_AUTH_PREFIX);

  if (isApiRoutes) return;

  if (isLoggedIn && authRoutes) {
    return Response.redirect(new URL(AUTH_REDIRECT_URL, nextUrl));
  }
  if (isLoggedIn && publicRoutes) {
    return Response.redirect(new URL(AUTH_REDIRECT_URL, nextUrl));
  }
  if (!isLoggedIn && !publicRoutes && !authRoutes) {
    return Response.redirect(new URL(UN_AUTHORIZED_REDIRECT_URL, nextUrl));
  }
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"], // the path right here is used to allow where the middleware can invoked in our app !
};
