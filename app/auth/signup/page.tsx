"use client";

import { Fragment } from "react";
import { AuthInput } from "../_components/AuthInput";
import AuthSocial from "../_components/AuthSocial";
import AuthWrapper from "../_components/AuthWrapper";

import { Button } from "@/components/ui/button";
import { Form, FormField, FormMessage } from "@/components/ui/form";
import { SignUpSchema, SignUpSchemaType } from "@/schema/auth";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const SignUpPage = () => {
  const signUpForm = useForm<SignUpSchemaType>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: "",
      fullName: "",
      password: "",
    },
  });

  const onSubmit = (value: SignUpSchemaType) => {
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
      <Form {...signUpForm}>
        <form
          className="grid gap-2 w-full"
          onSubmit={signUpForm.handleSubmit(onSubmit)}
        >
          <FormField
            control={signUpForm.control}
            name="fullName"
            render={({ field }) => (
              <Fragment>
                <AuthInput
                  label="Full Name"
                  placeholder="john doe"
                  type="text"
                  field={field}
                />
                <FormMessage />
              </Fragment>
            )}
          ></FormField>
          <FormField
            control={signUpForm.control}
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
            control={signUpForm.control}
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

          <Button type="submit" size={"auth"} variant={"auth"}>
            Login
          </Button>
          <AuthSocial />
        </form>
      </Form>
    </AuthWrapper>
  );
};

export default SignUpPage;
