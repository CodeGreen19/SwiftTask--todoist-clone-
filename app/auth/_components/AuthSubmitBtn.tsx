import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const AuthSubmitBtn = ({
  loading = false,
  text,
}: {
  loading?: boolean;
  text: string;
}) => {
  return (
    <Button
      type="submit"
      disabled={loading}
      className="relative"
      size={"auth"}
      variant={"auth"}
    >
      {text}{" "}
      {loading && (
        <AiOutlineLoading3Quarters
          className={cn("absolute text-white top-[22px] right-6 animate-spin")}
        />
      )}
    </Button>
  );
};

export default AuthSubmitBtn;
