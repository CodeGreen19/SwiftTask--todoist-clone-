import { cn } from "@/lib/utils";
import React from "react";

const StepTextFormat = ({
  info,
}: {
  info: { heading: string; title: string; des: string; className?: string };
}) => {
  return (
    <div className="mt-10">
      <h4 className={cn("my-3 text-sm", info.className)}>{info.heading}</h4>
      <h1 className="mb-4 text-3xl font-bold">{info.title}</h1>
      <h2 className="text-2xl font-light">{info.des}</h2>
    </div>
  );
};

export default StepTextFormat;
