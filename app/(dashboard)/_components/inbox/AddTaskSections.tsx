"use client";
import { GoPlus } from "react-icons/go";
import AddTaskBox from "../shared/AddTaskBox";

import { AddTaskType } from "@/types/todo";
import { useAddTask } from "../../_hooks/useAddText";
import { useEditTask } from "../../_hooks/useEditTask";
import TaskList from "./addTaskSections/TaskList";

const AddTaskSections = ({
  tasks,
  sectionName,
}: {
  tasks: AddTaskType[];
  sectionName: string;
}) => {
  const { editTaskId, setEditTaskId } = useEditTask();
  const { clearTaskInfo, addBoxOpen, setAddBoxOpen } = useAddTask();

  const closeTextBox = () => {
    setAddBoxOpen(null);
  };
  const closeEditTextBox = () => {
    clearTaskInfo();
    setEditTaskId("");
  };

  const filteredTasks = tasks.filter(
    (item) => item.sectionName === sectionName
  );

  return (
    <div>
      <div>
        {filteredTasks
          .filter((item) => item.isDone === false)
          .map((item, i) =>
            item.id === editTaskId ? (
              <div
                key={i}
                className=" border  w-full mt-1 border-zinc-300 p-2 rounded-lg"
              >
                <AddTaskBox
                  sectionName={sectionName}
                  close={closeEditTextBox}
                />
              </div>
            ) : (
              <TaskList {...item} key={i} />
            )
          )}
      </div>
      {addBoxOpen !== sectionName ? (
        <div
          className="group p-2 hover:text-amber-500 flex items-center cursor-pointer gap-2 "
          onClick={() => setAddBoxOpen(sectionName)}
        >
          <span className="p-[2px] text-amber-500 rounded-full group-hover:text-white group-hover:bg-amber-600">
            <GoPlus className="text-lg" />
          </span>{" "}
          Add Task
        </div>
      ) : (
        <div className=" border w-full mt-1 border-zinc-200 p-2 rounded-lg">
          <AddTaskBox sectionName={sectionName} close={closeTextBox} />
        </div>
      )}
      <div className="mt-4">
        {filteredTasks
          .filter((item) => item.isDone === true)
          .map((item, i) => (
            <TaskList {...item} key={i} />
          ))}
      </div>
    </div>
  );
};

export default AddTaskSections;
