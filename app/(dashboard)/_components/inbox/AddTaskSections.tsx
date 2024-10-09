"use client";
import React, { useState } from "react";
import AddTaskBox from "../shared/AddTaskBox";
import { GoPlus } from "react-icons/go";
import SectionList from "./addTaskSections/SectionList";
import { Separator } from "@/components/ui/separator";
import { AddTaskType } from "@/types/todo";
import { useEditTask } from "../../_hooks/useEditTask";
import { useAddTask } from "../../_hooks/useAddText";

const AddTaskSections = ({ tasks }: { tasks: AddTaskType[] }) => {
  const { editTaskId, setEditTaskId } = useEditTask();
  const { clearTaskInfo, addBoxOpen, setAddBoxOpen } = useAddTask();

  const closeTextBox = () => {
    setAddBoxOpen(false);
  };
  const closeEditTextBox = () => {
    clearTaskInfo();
    setEditTaskId("");
  };

  return (
    <div>
      <div>
        {tasks.map((item, i) =>
          item.id === editTaskId ? (
            <div className=" border  w-full mt-1 border-zinc-300 p-2 rounded-lg">
              <AddTaskBox close={closeEditTextBox} />
            </div>
          ) : (
            <SectionList {...item} key={i} />
          )
        )}
      </div>
      {!addBoxOpen ? (
        <div
          className="group p-2 hover:text-amber-500 flex items-center cursor-pointer gap-2 "
          onClick={() => setAddBoxOpen(true)}
        >
          <span className="p-[2px] text-amber-500 rounded-full group-hover:text-white group-hover:bg-amber-600">
            <GoPlus className="text-lg" />
          </span>{" "}
          Add Task
        </div>
      ) : (
        <div className=" border w-full mt-1 border-zinc-200 p-2 rounded-lg">
          <AddTaskBox close={closeTextBox} />
        </div>
      )}
    </div>
  );
};

export default AddTaskSections;
