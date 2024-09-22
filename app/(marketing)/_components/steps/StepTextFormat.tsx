import { cn } from "@/lib/utils";
import React from "react";

const StepTextFormat = ({
  info,
}: {
  info: { heading: string; title: string; des: string; className?: string };
}) => {
  return (
    <div className="mt-10 md:pr-20">
      <h4 className={cn("my-6 font-semibold", info.className)}>
        {info.heading}
      </h4>
      <h1 className="mb-8 text-3xl font-bold">{info.title}</h1>
      <h2 className="text-2xl font-light text-zinc-500">{info.des}</h2>
    </div>
  );
};

export default StepTextFormat;
