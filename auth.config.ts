import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";

export default {
  providers: [
    Credentials({
      authorize: (credentials: any) => {
        let user = null;

        if (credentials.email) {
          user = {
            email: credentials.email,
            password: credentials.password,
          };
          return user;
        }

        return user;
      },
    }),
  ],
} satisfies NextAuthConfig;
