import { prisma } from "@/lib/db/prisma";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await prisma.user.findFirst({ where: { email } });
    return user;
  } catch {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { id } });

    return user;
  } catch {
    return null;
  }
};

export const getAccountByUserId = async (userId: string) => {
  try {
    const account = prisma.account.findFirst({
      where: { userId },
    });

    return account;
  } catch {
    return null;
  }
};
