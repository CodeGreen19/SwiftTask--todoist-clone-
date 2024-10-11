"use client";
import { Button } from "@/components/ui/button";
import { AUTH_REDIRECT_URL } from "@/routes";
import { signIn } from "next-auth/react";
import React, { Fragment } from "react";
import { FcGoogle } from "react-icons/fc";

const AuthSocial = () => {
  const onClick = (provider: "google" | "facebook") => {
    signIn(provider, {
      redirectTo: AUTH_REDIRECT_URL,
    });
  };
  return (
    <Fragment>
      <Button
        onClick={() => onClick("google")}
        variant="outline"
        className="w-full p-7 space-x-3"
      >
        <FcGoogle className="text-red-500 text-lg" />{" "}
        <span>Continue with Google</span>
      </Button>
      {/* <Button
        onClick={() => onClick("facebook")}
        variant="outline"
        className="w-full p-7 space-x-3"
      >
        <FaFacebook className="text-blue-500 text-lg" />{" "}
        <span>Continue with FaceBook</span>
      </Button> */}
    </Fragment>
  );
};

export default AuthSocial;
