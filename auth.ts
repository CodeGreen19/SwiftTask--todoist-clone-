import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./lib/db/prisma";
import authConfig from "./auth.config";

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
  },
});
