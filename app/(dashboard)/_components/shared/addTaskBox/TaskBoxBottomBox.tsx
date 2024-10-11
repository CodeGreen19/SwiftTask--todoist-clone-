"use client";

import React from "react";

import { useProjectDetail } from "@/app/(dashboard)/_hooks/useProjectDetail";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const TaskBoxBottomBox = ({ children }: { children: React.ReactNode }) => {
  const { projects, setSelectedProjectName } = useProjectDetail();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="px-2 max-h-[200px] overflow-y-scroll ">
        {projects.map((item, i) => (
          <DropdownMenuItem
            key={i}
            onClick={() => {
              setSelectedProjectName(item.name);
            }}
            className="hover:bg-zinc-200 cursor-pointer rounded-md"
          >
            {item.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TaskBoxBottomBox;
