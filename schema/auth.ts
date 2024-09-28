import { z } from "zod";

export const SignUpSchema = z.object({
  fullName: z.string().min(1, { message: "Full Name is required" }),
  email: z.string().email(),
  password: z.string().min(6, { message: "password must be at least 6 char" }),
});
export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, { message: "password must be at least 6 char" }),
});
export const ResetSchema = z.object({
  email: z.string().email({ message: "email is required !" }),
});
export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum 6 characters",
  }),
  confirmPass: z.string().min(6, {
    message: "Minimum 6 characters",
  }),
});

export type SignUpSchemaType = z.infer<typeof SignUpSchema>;
export type LoginSchemaType = z.infer<typeof LoginSchema>;
export type ResetSchemaType = z.infer<typeof ResetSchema>;
export type NewPasswordSchemaType = z.infer<typeof NewPasswordSchema>;
