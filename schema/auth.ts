import { z } from "zod";

export const SignUpSchema = z.object({
  fullName: z.string().min(2).max(50),
  email: z.string().email(),
  password: z.string().min(6, { message: "password must be at least 6 char" }),
});
export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, { message: "password must be at least 6 char" }),
});

export type SignUpSchemaType = z.infer<typeof SignUpSchema>;
export type LoginSchemaType = z.infer<typeof LoginSchema>;
