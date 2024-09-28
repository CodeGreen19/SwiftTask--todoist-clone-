"use client";

import { Fragment } from "react";
import { AuthInput } from "../_components/AuthInput";
import AuthWrapper from "../_components/AuthWrapper";

import { Form, FormField, FormMessage } from "@/components/ui/form";
import { NewPasswordSchema, NewPasswordSchemaType } from "@/schema/auth";

import { UpdatePasswordAction } from "@/actions/auth";
import { showToast } from "@/components/shared/toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import AuthSubmitBtn from "../_components/AuthSubmitBtn";

const NewPassword = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  if (!token) {
    showToast("error", "token does'nt exists !");
    return router.push("/");
  }
  const { mutate, isPending } = useMutation({
    mutationFn: UpdatePasswordAction,
    onSuccess: async ({ error, message }) => {
      if (error) {
        return showToast("error", error);
      }
      if (message) {
        showToast("success", message);
        router.push("/auth/login");
      }
    },
  });
  const NewPassForm = useForm<NewPasswordSchemaType>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      confirmPass: "",
      password: "",
    },
  });

  const onSubmit = (value: NewPasswordSchemaType) => {
    if (value.password !== value.confirmPass) {
      return showToast(
        "error",
        "new password and confirm password does'nt match !"
      );
    }
    mutate({ password: value.password, token });
  };

  return (
    <AuthWrapper
      type="Reset Password"
      caption="Enter new and confirm password to update"
      imageUrl="login image"
    >
      <Form {...NewPassForm}>
        <form
          className="grid gap-2 w-full"
          onSubmit={NewPassForm.handleSubmit(onSubmit)}
        >
          <FormField
            control={NewPassForm.control}
            name="password"
            render={({ field }) => (
              <Fragment>
                <AuthInput
                  label="New Password"
                  placeholder="******"
                  type="password"
                  field={field}
                />
                <FormMessage />
              </Fragment>
            )}
          ></FormField>
          <FormField
            control={NewPassForm.control}
            name="confirmPass"
            render={({ field }) => (
              <Fragment>
                <AuthInput
                  label="Confirm Password"
                  placeholder="******"
                  type="password"
                  field={field}
                />
                <FormMessage />
              </Fragment>
            )}
          ></FormField>

          <AuthSubmitBtn text="Update" loading={isPending} />
        </form>
      </Form>
    </AuthWrapper>
  );
};

export default NewPassword;
