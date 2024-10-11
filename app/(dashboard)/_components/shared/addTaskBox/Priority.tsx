import React from "react";

import { useAddTask } from "@/app/(dashboard)/_hooks/useAddText";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { PopoverClose } from "@radix-ui/react-popover";
import { proirityArr } from "../../data";

const Priority = ({ children }: { children: React.ReactNode }) => {
  const { setPriority } = useAddTask();
  return (
    <Popover>
      <PopoverTrigger className="outline-none">{children}</PopoverTrigger>
      <PopoverContent className="w-auto">
        <PopoverClose>
          <ul className="">
            {proirityArr.map((item) => (
              <li
                key={item.text}
                className="p-2 hover:bg-amber-50 rounded-md flex items-center justify-start cursor-pointer"
                onClick={() => setPriority(item.value)}
              >
                <item.icon className={cn("mr-3", item.className)} />{" "}
                <span className="text-sm text-zinc-500 ">{item.text}</span>
              </li>
            ))}
          </ul>
        </PopoverClose>
      </PopoverContent>
    </Popover>
  );
};

export default Priority;
