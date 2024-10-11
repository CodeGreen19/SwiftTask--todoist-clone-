"use client";

import { FormControl, FormLabel, useFormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { RxEyeClosed } from "react-icons/rx";
import { VscEye } from "react-icons/vsc";

export type AuthInputType = {
  type: "email" | "text" | "password";
  label: string;
  placeholder: string;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: any;
};

export function AuthInput({
  className,
  label,
  placeholder,
  type,
  field,
}: AuthInputType) {
  const [showPass, setShowPass] = useState<boolean>(false);
  const { error } = useFormField();
  const isError = error ? String(error?.message) : "";

  return (
    <div
      className={cn(
        "grid focus-within:border-gray-300 border border-gray-200 rounded-md relative w-full",
        isError !== "" ? "border-red-500 focus-within:border-red-500" : "",
        className
      )}
    >
      <FormLabel className="p-3 pb-0">{label}</FormLabel>
      <FormControl>
        <Input
          {...field}
          type={type === "password" && showPass ? "text" : type}
          className="focus-visible:ring-0 placeholder:text-zinc-400 border-none bg-white pt-0 py-1 text-lg w-full"
          placeholder={placeholder}
        />
      </FormControl>

      {type === "password" && (
        <span
          className="absolute cursor-pointer p-2 right-2 bottom-1"
          onClick={() => setShowPass(!showPass)}
        >
          {showPass ? <VscEye className="text-lg" /> : <RxEyeClosed />}
        </span>
      )}
    </div>
  );
}
