"use client";
import React, { useState } from "react";
import { template_data } from "../data";
import { cn } from "@/lib/utils";

const MobileTemplate = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="flex flex-col mt-9 w-full items-center justify-center gap-3">
      {template_data.map((item, i) => (
        <div
          onClick={() => setSelected(i)}
          key={i}
          className={cn(
            "bg-slate-100 border border-gray-200 rounded-lg w-full transition-all p-4",
            selected === i ? "h-52" : "h-14"
          )}
        >
          <h1 className="">{item.title}</h1>
          <div className="h-32 w-full "></div>
        </div>
      ))}
    </div>
  );
};

export default MobileTemplate;
