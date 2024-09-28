import { prisma } from "@/lib/db/prisma";
import { v4 as uuid } from "uuid";

export const getPasswordResetTokenByEmail = async (email: string) => {
  try {
    const passwordResetEmail = await prisma.passwordResetToken.findFirst({
      where: { email },
    });

    return passwordResetEmail;
  } catch {
    return null;
  }
};

export const getVarificationTokenByEmail = async (email: string) => {
  try {
    const varificationEmail = await prisma.verificationToken.findFirst({
      where: { email },
    });

    return varificationEmail;
  } catch {
    return null;
  }
};

export const generateVerificationToken = async (
  email: string,
  password: string
) => {
  const token = uuid();
  const expires = new Date(new Date().getTime() + 3600 * 1000);
  const existingToken = await getVarificationTokenByEmail(email);

  if (existingToken) {
    await prisma.verificationToken.delete({ where: { id: existingToken.id } });
  }

  const passwordResetToken = await prisma.verificationToken.create({
    data: { token, email, expires, password },
  });
  return passwordResetToken;
};

export const getVerificationTokenByToken = async (token: string) => {
  try {
    const verificationToken = await prisma.verificationToken.findUnique({
      where: { token },
    });

    return verificationToken;
  } catch {
    return null;
  }
};
export const getResetTokenByToken = async (token: string) => {
  try {
    const passwordResetToken = await prisma.passwordResetToken.findUnique({
      where: { token },
    });

    return passwordResetToken;
  } catch {
    return null;
  }
};

// for reset token
export const generateResetPassToken = async (email: string) => {
  const token = uuid();
  const expires = new Date(new Date().getTime() + 3600 * 1000);
  const existingToken = await getPasswordResetTokenByEmail(email);

  if (existingToken) {
    await prisma.passwordResetToken.delete({ where: { id: existingToken.id } });
  }

  const passwordResetToken = await prisma.passwordResetToken.create({
    data: { token, email, expires },
  });
  return passwordResetToken;
};
