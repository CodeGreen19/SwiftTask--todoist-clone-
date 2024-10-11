"use client";

import { Fragment } from "react";
import { AuthInput } from "../_components/AuthInput";
import AuthSocial from "../_components/AuthSocial";
import AuthWrapper from "../_components/AuthWrapper";

import { Form, FormField, FormMessage } from "@/components/ui/form";
import { LoginSchema, LoginSchemaType } from "@/schema/auth";

import { LoginAction } from "@/actions/auth";
import { showToast } from "@/components/shared/toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import AuthSubmitBtn from "../_components/AuthSubmitBtn";

const LoginPage = () => {
  const { update } = useSession();
  const searchParams = useSearchParams();
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider!"
      : "";

  // showToast("error", urlError);

  const { mutate, isPending } = useMutation({
    mutationFn: LoginAction,
    onSuccess: async ({ error, message }) => {
      if (error) {
        LoginForm.reset();
        return showToast("error", error);
      }
      if (message) {
        await update();
      }
    },
  });
  const LoginForm = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (value: LoginSchemaType) => {
    mutate(value);
  };

  return (
    <AuthWrapper
      type="Login"
      caption="Enter your credentials to login"
      imageUrl="login image"
      to_link="/auth/signup"
      to_question="Don't have any account ?"
      to_text="Sign Up"
    >
      <Form {...LoginForm}>
        <form
          className="grid gap-2 w-full"
          onSubmit={LoginForm.handleSubmit(onSubmit)}
        >
          <FormField
            control={LoginForm.control}
            name="email"
            render={({ field }) => (
              <Fragment>
                <AuthInput
                  label="Email"
                  placeholder="email@example.com"
                  type="text"
                  field={field}
                />
                <FormMessage />
              </Fragment>
            )}
          ></FormField>
          <FormField
            control={LoginForm.control}
            name="password"
            render={({ field }) => (
              <Fragment>
                <AuthInput
                  label="Password"
                  placeholder="******"
                  type="password"
                  field={field}
                />
                <FormMessage />
              </Fragment>
            )}
          ></FormField>
          <div className="flex items-center justify-end my-1 text-sm text-zinc-400 hover:text-zinc-500">
            <Link href={"/auth/forgot-password"}>
              <span>forgot your password ?</span>
            </Link>
          </div>
          <AuthSubmitBtn text="Login" loading={isPending} />
        </form>
        <div className="flex flex-col gap-1">
          {urlError && (
            <p className="my-1 text-rose-500 text-sm">error : {urlError}</p>
          )}
          <AuthSocial />
        </div>
      </Form>
    </AuthWrapper>
  );
};

export default LoginPage;
