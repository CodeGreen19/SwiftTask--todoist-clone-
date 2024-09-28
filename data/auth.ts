import { prisma } from "@/lib/db/prisma";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await prisma.user.findFirst({ where: { email } });
    return user;
  } catch {
    return null;
  }
};
