import Logo from "@/app/(marketing)/_components/navigation/Logo";
import Link from "next/link";
import React from "react";

type AuthWrapperType = {
  type: "Login" | "Sign Up" | "Forgot Password" | "Reset Password";
  caption: string;
  to_question?: string;
  to_link?: string;
  to_text?: string;
  children: React.ReactNode;
  imageUrl: string;
};

const AuthWrapper = ({
  caption,
  children,
  imageUrl,
  to_link,
  to_question,
  to_text,
  type,
}: AuthWrapperType) => {
  return (
    <div className="lg:grid grid grid-cols-1 py-5 lg:grid-cols-2 px-4 place-items-center lg:w-4/5 m-auto h-screen ">
      <div className="w-full">
        <div className="mb-6 -translate-x-3 max-w-[350px] mx-auto">
          <Logo />
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="mx-auto grid w-full max-w-[350px] gap-4">
            <div className="grid gap-2 text-start">
              <h1 className="text-3xl font-bold">{type}</h1>
              <p className="text-balance text-muted-foreground">{caption}</p>
            </div>
            {children}
            {to_link && to_question && to_text && (
              <div className="mt-0 text-center text-sm">
                {to_question}{" "}
                <Link href={to_link} className="underline">
                  {to_text}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="hidden lg:block bg-slate-300">{imageUrl}</div>
    </div>
  );
};

export default AuthWrapper;
