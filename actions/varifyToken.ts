"use server";

import { getUserByEmail } from "@/data/auth";
import { getVerificationTokenByToken } from "@/data/token";
import { prisma } from "@/lib/db/prisma";

export const VarificationTokenAction = async (token: string) => {
  const existingToken = await getVerificationTokenByToken(token);
  if (!existingToken) {
    return { error: "token does no exists !" };
  }
  const hasExipaired = new Date(existingToken.expires) < new Date();
  if (hasExipaired) {
    return { error: "token has expired !" };
  }

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) {
    return { error: "Email does not exist!" };
  }

  await prisma.user.update({
    where: { id: existingUser.id },
    data: {
      emailVerified: new Date(),
    },
  });

  await prisma.verificationToken.delete({ where: { id: existingToken.id } });

  return {
    message: "Email varified !",
    email: existingUser.email,
    password: existingToken.password,
  };
};
