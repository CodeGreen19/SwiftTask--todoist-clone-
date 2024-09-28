"use client";
import { LoginAction } from "@/actions/auth";
import { VarificationTokenAction } from "@/actions/varifyToken";
import { showToast } from "@/components/shared/toast";
import { cn } from "@/lib/utils";
import { AUTH_REDIRECT_URL } from "@/routes";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const NewVarification = () => {
  const router = useRouter();
  const { update } = useSession();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  if (!token) {
    showToast("error", "Missing token !");
    router.push("/");
    return;
  }
  // query the data
  const { data } = useQuery({
    queryKey: ["varification-token"],
    queryFn: async () => {
      let data = await VarificationTokenAction(token);
      if (data.error) {
        showToast("error", data.error);
        router.push("/");
      }
      if (data.message) {
        let { error, message } = await LoginAction({
          email: data.email!,
          password: data.password!,
        });
        if (error) {
          showToast("error", error);
        }
        if (message) {
          await update();
        }
      }
      return data;
    },
  });

  return (
    <div className="flex items-center justify-center h-[80vh] w-full text-signature">
      Varifying your email
      <span>
        <AiOutlineLoading3Quarters
          className={cn("ml-4 text-lg animate-spin")}
        />
      </span>
    </div>
  );
};

export default NewVarification;