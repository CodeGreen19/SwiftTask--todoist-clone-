"use client";

import React from "react";

import { updateTask } from "@/actions/todo/task";
import { useProjectDetail } from "@/app/(dashboard)/_hooks/useProjectDetail";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { AddTaskType, PriorityType } from "@/types/todo";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { PopoverClose } from "@radix-ui/react-popover";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { proirityArr } from "../../data";

const TaskOptions = ({
  children,
  remove,
  id,
  task,
  desc,
  dueDate,
  editHandler,
  isDone,
  projectName,
  sectionName,
}: {
  children: React.ReactNode;
  remove: () => void;
  id?: string;
  task: string;
  isDone: boolean;
  projectName: string;
  sectionName: string | null;
  desc: string | null;
  dueDate: Date | null;

  editHandler: () => void;
}) => {
  const queryClient = useQueryClient();
  const { selectedProjectId } = useProjectDetail();
  // mutate for update
  const { mutate: updateMutate } = useMutation({
    mutationFn: updateTask,
    onSuccess: ({ message, error }) => {
      if (error) alert(error);
      if (message) {
        queryClient.invalidateQueries({ queryKey: [selectedProjectId] });
      }
    },
  });
  const hanldeChangePriority = (priority: PriorityType) => {
    const data: AddTaskType = {
      id: id!,
      task: task,
      projectName,
      sectionName,
      priority: priority,
      desc,
      dueDate,
    };
    updateMutate(data);
  };
  return (
    <Popover>
      <PopoverTrigger className=" outline-none">{children}</PopoverTrigger>
      <PopoverContent className="mr-2 min-w-[180px] w-auto">
        {!isDone && (
          <>
            <PopoverClose className="w-full">
              <div
                onClick={editHandler}
                className="flex w-full  p-2 hover:bg-amber-50 rounded-md text-sm items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <CiEdit /> Edit
                </span>
                <span className="text-zinc-400">O then E</span>
              </div>
            </PopoverClose>
            <Separator />
            <PopoverClose>
              <ul className="w-full">
                {proirityArr.map((item) => (
                  <li
                    key={item.text}
                    onClick={() => hanldeChangePriority(item.value)}
                    className="p-2 w-full hover:bg-amber-50 rounded-md flex items-center justify-start cursor-pointer"
                  >
                    <item.icon className={cn("mr-3", item.className)} />{" "}
                    <span className="text-sm text-zinc-500 ">{item.text}</span>
                  </li>
                ))}
              </ul>
            </PopoverClose>
            <Separator />
          </>
        )}
        <PopoverClose className="w-full">
          <div
            className="flex w-full p-2 hover:bg-amber-50 rounded-md text-sm items-center justify-between cursor-pointer"
            onClick={remove}
          >
            <span className="flex text-rose-500 items-center gap-2">
              <RiDeleteBin6Line className="text-lg" /> Delete
            </span>
            <span className="text-zinc-400">
              <ArrowRightIcon />
            </span>
          </div>
        </PopoverClose>
      </PopoverContent>
    </Popover>
  );
};

export default TaskOptions;
