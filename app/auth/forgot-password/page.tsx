"use client";

import { Fragment } from "react";
import { AuthInput } from "../_components/AuthInput";
import AuthWrapper from "../_components/AuthWrapper";

import { Form, FormField, FormMessage } from "@/components/ui/form";
import { ResetSchema, ResetSchemaType } from "@/schema/auth";

import { ResetPasswordAction } from "@/actions/auth";
import { showToast } from "@/components/shared/toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import AuthSubmitBtn from "../_components/AuthSubmitBtn";

const ForgotPassword = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: ResetPasswordAction,
    onSuccess: async ({ error, message }) => {
      if (error) {
        return showToast("error", error);
      }
      if (message) {
        showToast("success", message);
      }
    },
  });
  const ResetPassForm = useForm<ResetSchemaType>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (value: ResetSchemaType) => {
    mutate(value);
  };

  return (
    <AuthWrapper
      type="Reset Password"
      caption="Enter your email to get reset passwork link to change your password."
      imageUrl="login image"
    >
      <Form {...ResetPassForm}>
        <form
          className="grid gap-2 w-full"
          onSubmit={ResetPassForm.handleSubmit(onSubmit)}
        >
          <FormField
            control={ResetPassForm.control}
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

          <AuthSubmitBtn text="Send" loading={isPending} />
        </form>
      </Form>
    </AuthWrapper>
  );
};

export default ForgotPassword;
