import { create } from "zustand";

type Store = {
  editTaskId: string;
  setEditTaskId: (text: string) => void;
};

export const useEditTask = create<Store>()((set) => ({
  editTaskId: "",
  setEditTaskId: (text) => set(() => ({ editTaskId: text })),
}));
