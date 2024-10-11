import { cn } from "@/lib/utils";
import { AddTaskType } from "@/types/todo";
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { GoChevronDown } from "react-icons/go";
import AddTaskSections from "../../inbox/AddTaskSections";

const SectionEach = ({
  name,
  tasks,
}: {
  name: string;
  tasks: AddTaskType[];
}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <h1 className="p-3 border-b font-semibold flex items-center justify-between">
        <span className="flex items-center gap-2">
          <span
            className={cn(
              "p-1 rotate-0 transition-all",
              !open ? "-rotate-90" : "rotate-0"
            )}
            onClick={() => setOpen(!open)}
          >
            <GoChevronDown />
          </span>
          <span>{name}</span>
        </span>
        <span>
          <BsThreeDots />
        </span>
      </h1>
      <div
        className={cn(
          "px-4 h-0  overflow-hidden",
          open ? "h-full py-2" : "h-0 "
        )}
      >
        <AddTaskSections tasks={tasks} sectionName={name} />
      </div>
    </div>
  );
};

export default SectionEach;
