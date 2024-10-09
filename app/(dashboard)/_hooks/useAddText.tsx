import { PriorityType } from "@/types/todo";
import { create } from "zustand";

type Store = {
  addBoxOpen: boolean;
  setAddBoxOpen: (value: boolean) => void;
  taskName: string;
  setTaskName: (text: string) => void;
  taskDescription: string;
  setTaskDescription: (text: string | "") => void;
  dueDate: Date | null;
  setDueDate: (text: Date | null) => void;
  priority: PriorityType;
  setPriority: (p: PriorityType) => void;
  clearTaskInfo: () => void;
};

export const useAddTask = create<Store>()((set) => ({
  addBoxOpen: false,
  setAddBoxOpen: (value) => set({ addBoxOpen: value }),

  taskName: "",
  setTaskName: (text) => set(() => ({ taskName: text })),
  taskDescription: "",
  setTaskDescription: (text) => set(() => ({ taskDescription: text })),
  dueDate: null,
  setDueDate: (text) => set(() => ({ dueDate: text })),
  priority: "P4",
  setPriority: (text) => set(() => ({ priority: text })),
  clearTaskInfo: () =>
    set(() => ({
      taskName: "",
      taskDescription: "",
      dueDate: null,
      priority: "P4",
    })),
}));
