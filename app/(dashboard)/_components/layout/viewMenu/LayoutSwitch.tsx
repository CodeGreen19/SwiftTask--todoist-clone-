"use client";

import React, { useState } from "react";
import { LiaListSolid } from "react-icons/lia";
import { CiViewBoard } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { cn } from "@/lib/utils";

// type LayoutStyleType = "List" | "Board" | "Calender";
const LayoutSwitch = () => {
  const [selected, setSelected] = useState<string>("List");
  const style = [
    { text: "List", icon: LiaListSolid },
    { text: "Board", icon: CiViewBoard },
    { text: "Calender", icon: SlCalender },
  ];
  return (
    <div className="rounded-lg bg-zinc-200/80 p-1 flex items-center justify-between text-zinc-500">
      {style.map((item) => (
        <div
          key={item.text}
          onClick={() => setSelected(item.text)}
          className={cn(
            "flex items-center rounded-md justify-center gap-1 cursor-pointer hover:bg-zinc-300 flex-col px-5 py-1",
            selected === item.text ? "bg-white hover:bg-white" : ""
          )}
        >
          <item.icon />
          <span className="text-sm">{item.text}</span>
        </div>
      ))}
    </div>
  );
};

export default LayoutSwitch;
