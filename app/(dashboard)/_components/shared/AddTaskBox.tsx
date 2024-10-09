"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { Separator } from "@/components/ui/separator";

import TextareaAutosize from "react-textarea-autosize";
import Priority from "./addTaskBox/Priority";
import DueDate from "./addTaskBox/DueDate";
import Reminders from "./addTaskBox/Reminders";
import TaskBoxBottomBox from "./addTaskBox/TaskBoxBottomBox";
import { GoDiscussionOutdated } from "react-icons/go";
import { MdLabelImportantOutline } from "react-icons/md";
import { CiAlarmOn } from "react-icons/ci";
import { RxCross1, RxCross2 } from "react-icons/rx";
import { RiSendPlane2Fill } from "react-icons/ri";
import { useAddTask } from "../../_hooks/useAddText";
import { format } from "date-fns";
import { CrossIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { AddTaskType } from "@/types/todo";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddTask, updateTask } from "@/actions/todo/task";
import { useEditTask } from "../../_hooks/useEditTask";
import { nextDay, today } from "../data/dateData";

type AddTaskBoxType = {
  close?: () => void;
};

const AddTaskBox = ({ close }: AddTaskBoxType) => {
  const {
    dueDate,
    setDueDate,
    priority,
    setPriority,
    setTaskName,
    setTaskDescription,
    taskDescription,
    taskName,
    clearTaskInfo,
  } = useAddTask();

  const queryClient = useQueryClient();
  const { editTaskId, setEditTaskId } = useEditTask();
  // mutation for create
  const { mutate } = useMutation({
    mutationFn: AddTask,
    onSuccess: ({ message, error }) => {
      if (error) alert(error);
      if (message) {
        queryClient.invalidateQueries({ queryKey: ["tasks"] });
      }
    },
  });
  // mutate for update
  const { mutate: updateMutate } = useMutation({
    mutationFn: updateTask,
    onSuccess: ({ message, error }) => {
      if (error) alert(error);
      if (message) {
        setEditTaskId("");
        queryClient.invalidateQueries({ queryKey: ["tasks"] });
      }
    },
  });

  const hanldeSubmit = () => {
    let data: AddTaskType = {
      id: editTaskId,
      task: taskName,
      desc: taskDescription,
      dueDate: dueDate,
      priority: priority,
    };
    if (data.id) {
      // update
      updateMutate(data);
    } else {
      // created
      mutate(data);
    }
    clearTaskInfo();
  };
  return (
    <div className="bg-white">
      <TextareaAutosize
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="w-full resize-none outline-none  pl-2 text-md md:text-lg font-semibold"
        placeholder="Task name"
      />
      <TextareaAutosize
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        className="w-full resize-none outline-none pl-2 text-sm"
        placeholder="Description"
      />
      <div className="flex gap-1 my-3 pl-2 text-zinc-500">
        <DueDate>
          <div
            className={cn(
              "px-3 py-[7px] text-sm rounded-md hover:bg-zinc-100 border gap-1 flex items-center border-zinc-300",
              dueDate && "text-blue-500"
            )}
          >
            <GoDiscussionOutdated />{" "}
            {dueDate ? (
              <span className="flex items-center gap-1 text-sm">
                {format(dueDate, "d MMM") === format(today, "d MMM") ? (
                  <span className="text-red-500">today</span>
                ) : format(dueDate, "d MMM") === format(nextDay, "d MMM") ? (
                  <span className="text-purple-500">tomorrow</span>
                ) : (
                  format(dueDate, "d MMM")
                )}
                <span
                  className="text-red-500"
                  onClick={(e) => {
                    e.stopPropagation();
                    setDueDate(null);
                  }}
                >
                  <RxCross2 className="text-zinc-500" />
                </span>
              </span>
            ) : (
              "Due date"
            )}
          </div>
        </DueDate>
        <Priority>
          <div
            className={cn(
              "px-3 py-[7px] text-sm rounded-md hover:bg-zinc-100 border border-zinc-300 flex items-center",
              priority === "P1"
                ? "text-red-500"
                : priority === "P2"
                ? "text-amber-500"
                : priority === "P3"
                ? "text-sky-500"
                : ""
            )}
          >
            <MdLabelImportantOutline />{" "}
            {priority !== "P4" ? (
              <span className="flex items-center gap-1">
                {priority}{" "}
                <RxCross2
                  onClick={(e) => {
                    e.stopPropagation();
                    setPriority("P4");
                  }}
                  className="text-zinc-500"
                />
              </span>
            ) : (
              "Priority"
            )}
          </div>
        </Priority>
        {/* <Reminders> */}
        <div className="px-3 text-gray-300 cursor-not-allowed py-[7px] text-sm rounded-md flex items-center  border border-zinc-300">
          <CiAlarmOn /> Reminders
        </div>
        {/* </Reminders> */}
        <Button
          variant={"outline"}
          className="hover:bg-transparent cursor-not-allowed"
        >
          <BiDotsHorizontalRounded className="text-gray-300" />
        </Button>
      </div>
      <Separator />
      <div className="w-full flex items-center justify-between p-2">
        <TaskBoxBottomBox>
          <div className="px-3 py-[7px] text-sm rounded-md hover:bg-zinc-100">
            inbox
          </div>
        </TaskBoxBottomBox>
        <div className="flex gap-2">
          <Button
            variant={"secondary"}
            onClick={() => {
              clearTaskInfo();
              if (close) {
                close();
              }
            }}
          >
            <RxCross1 className="sm:hidden" />{" "}
            <span className="hidden sm:block">Cancel</span>
          </Button>
          <Button
            className="bg-amber-600 text-white hover:bg-amber-700"
            disabled={taskName.length === 0 ? true : false}
            onClick={hanldeSubmit}
          >
            <RiSendPlane2Fill className="sm:hidden text-white" />{" "}
            <span className="hidden sm:block">
              {editTaskId ? "Update" : "Add task"}
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskBox;
