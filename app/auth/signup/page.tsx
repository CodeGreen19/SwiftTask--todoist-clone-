"use client";

import { Fragment } from "react";
import { AuthInput } from "../_components/AuthInput";
import AuthSocial from "../_components/AuthSocial";
import AuthWrapper from "../_components/AuthWrapper";

import { Form, FormField, FormMessage } from "@/components/ui/form";
import { SignUpSchema, SignUpSchemaType } from "@/schema/auth";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { signUpAction } from "@/actions/auth";
import AuthSubmitBtn from "../_components/AuthSubmitBtn";

import { toast } from "sonner";
import { showToast } from "@/components/shared/toast";

const SignUpPage = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: signUpAction,
    onSuccess: ({ error, message }) => {
      if (error) {
        signUpForm.reset();
        return showToast("error", error);
      }
      if (message) {
        showToast("success", message);
        signUpForm.reset();
      }
    },
  });
  //form
  const signUpForm = useForm<SignUpSchemaType>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: "",
      fullName: "",
      password: "",
    },
  });

  const onSubmit = (info: SignUpSchemaType) => {
    mutate(info);
  };

  return (
    <AuthWrapper
      type="Sign Up"
      caption="Enter your credentials to Sign Up"
      imageUrl="signUp image"
      to_link="/auth/login"
      to_question="Aleary have an account?"
      to_text="Login"
    >
      <Form {...signUpForm}>
        <form
          className="grid gap-2 w-full"
          onSubmit={signUpForm.handleSubmit((info) => onSubmit(info))}
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

          <AuthSubmitBtn text="Sign Up" loading={isPending} />
        </form>
        <div className="flex flex-col gap-1">
          <AuthSocial />
        </div>
      </Form>
    </AuthWrapper>
  );
};

export default SignUpPage;
