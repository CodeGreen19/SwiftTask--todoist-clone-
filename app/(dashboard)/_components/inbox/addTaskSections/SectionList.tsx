"use client";

import React from "react";
import { FaRegCircle } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { PiDotsThreeOutlineThin } from "react-icons/pi";
import TaskOptions from "./TaskOptions";
import { CiEdit } from "react-icons/ci";
import { PiCircleLight } from "react-icons/pi";
import { PiCheckCircleThin } from "react-icons/pi";
import { LiaCircleSolid } from "react-icons/lia";
import { AddTaskType } from "@/types/todo";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useEditTask } from "@/app/(dashboard)/_hooks/useEditTask";
import { useAddTask } from "@/app/(dashboard)/_hooks/useAddText";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTask } from "@/actions/todo/task";
const SectionList = ({ id, task, desc, priority, dueDate }: AddTaskType) => {
  const { setEditTaskId } = useEditTask();
  const { setTaskName, setTaskDescription, setPriority, setAddBoxOpen } =
    useAddTask();

  const queryClient = useQueryClient();
  // delete task
  const { mutate } = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const handleEdit = () => {
    setAddBoxOpen(false);
    setTaskName(task);
    setTaskDescription(desc ?? "");
    setPriority(priority);
    setEditTaskId(id!);
  };
  const handleRemove = () => {
    mutate(id!);
  };
  return (
    <div>
      <div className="group flex items-start justify-between border-b border-b-zinc-100">
        <div className="flex p-2 items-start justify-start gap-1">
          <span className="mt-[1px] relative rounded-full">
            <PiCheckCircleThin className="text-2xl  absolute opacity-0 hover:opacity-85 transition-all cursor-pointer top-0 left-0" />
            <LiaCircleSolid
              className={cn(
                "text-2xl ",
                priority === "P1"
                  ? "text-red-500 font-bold"
                  : priority === "P2"
                  ? "text-amber-500 font-bold"
                  : priority === "P3"
                  ? "text-sky-500 font-bold"
                  : ""
              )}
            />
          </span>
          <div>
            <p className="font-normal">{task}</p>
            {desc && <p className="text-xs">{desc}</p>}
            {dueDate && (
              <p className="text-xs text-blue-500">
                {format(dueDate, "d MMM")}
              </p>
            )}
          </div>
        </div>
        <div>
          <div className="invisible text-2xl group-hover:visible flex items-center gap-4 mt-2">
            <CiEdit className="cursor-pointer" onClick={handleEdit} />
            <TaskOptions
              id={id}
              task={task}
              desc={desc}
              dueDate={dueDate}
              remove={handleRemove}
              editHandler={handleEdit}
            >
              <PiDotsThreeOutlineThin className="text-xl" />
            </TaskOptions>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionList;
