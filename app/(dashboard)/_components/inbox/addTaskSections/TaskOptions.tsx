"use client";

import React from "react";

import { proirityArr } from "../../data";
import { cn } from "@/lib/utils";
import { CiEdit } from "react-icons/ci";
import { Separator } from "@/components/ui/separator";
import { FiDelete } from "react-icons/fi";
import { FcDeleteDatabase } from "react-icons/fc";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";
import { AddTaskType, PriorityType } from "@/types/todo";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTask } from "@/actions/todo/task";

const TaskOptions = ({
  children,
  remove,
  id,
  task,
  desc,
  dueDate,
  editHandler,
}: {
  children: React.ReactNode;
  remove: () => void;
  id?: string;
  task: string;
  desc: string | null;
  dueDate: Date | null;
  editHandler: () => void;
}) => {
  const queryClient = useQueryClient();
  // mutate for update
  const { mutate: updateMutate } = useMutation({
    mutationFn: updateTask,
    onSuccess: ({ message, error }) => {
      if (error) alert(error);
      if (message) {
        queryClient.invalidateQueries({ queryKey: ["tasks"] });
      }
    },
  });
  const hanldeChangePriority = (priority: PriorityType) => {
    let data: AddTaskType = {
      id: id!,
      task: task,
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
