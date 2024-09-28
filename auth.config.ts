import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";
import type { NextAuthConfig } from "next-auth";
import { prisma } from "./lib/db/prisma";

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    Credentials({
      authorize: async (credentials: any) => {
        if (credentials.email) {
          const user = await prisma.user.findUnique({
            where: { email: credentials.email },
          });

          if (user) {
            return user;
          } else {
            return null;
          }
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
