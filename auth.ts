import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./lib/db/prisma";
import authConfig from "./auth.config";
import { getAccountByUserId, getUserById } from "./data/auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
  callbacks: {
    signIn: async ({ user, account }: any) => {
      if (account?.provider !== "credentials") {
        return true;
      }
      return true;
    },
    jwt: async ({ token }) => {
      if (!token.sub) return token;
      const existingUser = await getUserById(token.sub);
      if (existingUser) {
        token.name = existingUser.name;
        token.email = existingUser.email;
      }

      return token;
    },
    session: async ({ session, token }) => {
      if (token.sub && session.user) {
        session.user.id = token.sub;
        session.user.name = token.name;
      }
      return session;
    },
  },
});
