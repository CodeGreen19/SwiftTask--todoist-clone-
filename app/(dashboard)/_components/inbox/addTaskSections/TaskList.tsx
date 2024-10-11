"use client";

import { deleteTask, taskDoneAndUndone } from "@/actions/todo/task";
import { useAddTask } from "@/app/(dashboard)/_hooks/useAddText";
import { useEditTask } from "@/app/(dashboard)/_hooks/useEditTask";
import { useProjectDetail } from "@/app/(dashboard)/_hooks/useProjectDetail";
import { cn } from "@/lib/utils";
import { AddTaskType } from "@/types/todo";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { format } from "date-fns";
import { CiEdit } from "react-icons/ci";
import { LiaCircleSolid } from "react-icons/lia";
import { PiCheckCircleThin, PiDotsThreeOutlineThin } from "react-icons/pi";
import TaskOptions from "./TaskOptions";
const TaskList = ({
  id,
  task,
  desc,
  priority,
  dueDate,
  isDone,
  projectName,
  sectionName,
}: AddTaskType) => {
  const { setEditTaskId } = useEditTask();
  const {
    setTaskName,
    setTaskDescription,
    setPriority,
    setAddBoxOpen,
    setDueDate,
  } = useAddTask();
  const { selectedProjectId } = useProjectDetail();

  const queryClient = useQueryClient();
  // update task
  const { mutate: update_mutate, isPending: update_pending } = useMutation({
    mutationFn: taskDoneAndUndone,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [selectedProjectId] });
    },
  });
  // delete task
  const { mutate } = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [selectedProjectId] });
    },
  });

  const handleEdit = () => {
    setAddBoxOpen(null);
    setTaskName(task);
    setDueDate(dueDate);
    setTaskDescription(desc ?? "");
    setPriority(priority);
    setEditTaskId(id!);
  };
  const handleRemove = () => {
    mutate(id!);
  };

  const hanldeDoneAndUndone = () => {
    if (!update_pending) {
      update_mutate({ id: id!, checked: isDone ? false : true });
    }
  };
  return (
    <div>
      <div className="group flex items-start justify-between border-b border-b-zinc-100">
        <div className="flex p-2 items-start justify-start gap-1">
          <span
            className="mt-[1px] relative rounded-full"
            onClick={hanldeDoneAndUndone}
          >
            <PiCheckCircleThin
              className={cn(
                "text-2xl  absolute opacity-0 hover:opacity-85 transition-all cursor-pointer top-0 left-0",
                isDone ? "opacity-100 text-gray-500 rounded-full" : ""
              )}
            />
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
            {isDone ? (
              <del className={cn("font-normal decoration-slate-500 ")}>
                {task}
              </del>
            ) : (
              <p className={cn("font-normal")}>{task}</p>
            )}
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
            {!isDone && (
              <CiEdit className="cursor-pointer" onClick={handleEdit} />
            )}
            <TaskOptions
              id={id}
              task={task}
              desc={desc}
              isDone={isDone!}
              projectName={projectName}
              sectionName={sectionName}
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

export default TaskList;
