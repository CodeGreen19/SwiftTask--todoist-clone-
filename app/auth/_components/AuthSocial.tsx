import { Button } from "@/components/ui/button";
import React, { Fragment } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const AuthSocial = () => {
  return (
    <Fragment>
      <Button variant="outline" className="w-full p-7 space-x-3">
        <FcGoogle className="text-red-500 text-lg" />{" "}
        <span>Continue with Google</span>
      </Button>
      <Button variant="outline" className="w-full p-7 space-x-3">
        <FaFacebook className="text-blue-500 text-lg" />{" "}
        <span>Continue with FaceBook</span>
      </Button>
    </Fragment>
  );
};

export default AuthSocial;
