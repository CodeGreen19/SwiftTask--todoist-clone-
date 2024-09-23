"use client";

import { Fragment } from "react";
import { AuthInput } from "../_components/AuthInput";
import AuthSocial from "../_components/AuthSocial";
import AuthWrapper from "../_components/AuthWrapper";

import { Button } from "@/components/ui/button";
import { Form, FormField, FormMessage } from "@/components/ui/form";
import {
  LoginSchema,
  LoginSchemaType,
  SignUpSchema,
  SignUpSchemaType,
} from "@/schema/auth";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import AuthSubmitBtn from "../_components/AuthSubmitBtn";

const LoginPage = () => {
  const LoginForm = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (value: LoginSchemaType) => {
    console.log(value);
  };
  return (
    <AuthWrapper
      type="Sign Up"
      caption="Enter your credentials to login"
      imageUrl="signUp image"
      to_link="/auth/login"
      to_question="Aleary have an account?"
      to_text="Login"
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

          <AuthSubmitBtn text="Login" />
          <AuthSocial />
        </form>
      </Form>
    </AuthWrapper>
  );
};

export default LoginPage;
