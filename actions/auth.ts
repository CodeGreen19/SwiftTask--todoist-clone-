"use server";

import { signIn, signOut } from "@/auth";
import { prisma } from "@/lib/db/prisma";
import {
  LoginSchemaType,
  NewPasswordSchema,
  NewPasswordSchemaType,
  ResetSchema,
  ResetSchemaType,
  SignUpSchemaType,
} from "@/schema/auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { getUserByEmail } from "@/data/auth";
import {
  generateResetPassToken,
  generateVerificationToken,
  getResetTokenByToken,
} from "@/data/token";
import { AUTH_REDIRECT_URL } from "@/routes";

export const signUpAction = async (userInfo: SignUpSchemaType) => {
  const { email, password, fullName } = userInfo;

  const encrypt_password = bcrypt.hashSync(password);
  const isEmailExist = await getUserByEmail(email);

  if (!!isEmailExist) {
    return { error: "Email alread exists !" };
  }

  const newUser = await prisma.user.create({
    data: {
      email,
      password: encrypt_password,
      name: fullName,
    },
  });
  const varificationToken = await generateVerificationToken(email, password);

  let confirmation_link = `${process.env.BASE_URL}/auth/new-verification?token=${varificationToken.token}`;

  console.log(confirmation_link);

  // Todo: send email
  //  await sendVerificationEmail(
  //    verificationToken.email,
  //    verificationToken.token
  //  );
  return { newUser, message: "Conformation email sent !" };
};

export const LoginAction = async (userInfo: LoginSchemaType) => {
  const { email, password } = userInfo;
  let existUser = await getUserByEmail(email);
  if (!existUser) {
    return { error: "invalid credentials !" };
  }

  const isPasswordCompared = bcrypt.compareSync(password, existUser.password!);

  if (!isPasswordCompared) {
    return { error: "invalid credentials !" };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirect: true,
      redirectTo: AUTH_REDIRECT_URL,
    });
    return { message: "logged in successfully" };
  } catch (error: any) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "invallid credentials !" };

        default:
          return { error: "something went wrong !" };
      }
    }
    throw error;
  }
};

export const logoutAction = async () => {
  await signOut({ redirectTo: "/auth/login" });
};

export const ResetPasswordAction = async (info: ResetSchemaType) => {
  const { data, success } = ResetSchema.safeParse(info);
  if (!success) {
    return { error: "enter a valid email address !" };
  }
  const existingUser = await getUserByEmail(data.email);
  if (!existingUser) {
    return { error: "email does'nt exists !" };
  }

  const { token } = await generateResetPassToken(data.email);

  // todo send mail form here
  const resetLink = `${process.env.BASE_URL}/auth/new-password?token=${token}`;
  console.log(resetLink);

  return { message: "reset email sent !" };
};

export const UpdatePasswordAction = async ({
  password,
  token,
}: {
  password: string;
  token: string;
}) => {
  const existingToken = await getResetTokenByToken(token);
  if (!existingToken) {
    return { error: "token does'nt exist !" };
  }
  const existingUser = await getUserByEmail(existingToken.email);
  if (!existingUser) {
    return { error: "user does'nt exist! " };
  }
  const hashed_pass = bcrypt.hashSync(password);

  await prisma.user.update({
    where: { id: existingUser.id },
    data: {
      password: hashed_pass,
    },
  });
  return { message: "password is updated. " };
};
