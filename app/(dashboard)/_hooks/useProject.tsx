import { create } from "zustand";

type Store = {
  projectName: string;
  setProjectName: (text: string) => void;
  hashColor: string;
  setHashColor: (text: string) => void;
  clearProjectInfo: () => void;
  selectedProjectId: string;
  setSelectedProjectId: (id: string) => void;
};

export const useProject = create<Store>()((set) => ({
  projectName: "",
  setProjectName: (text) => set(() => ({ projectName: text })),
  hashColor: "text-gray-500",
  setHashColor: (text) => set(() => ({ hashColor: text })),
  clearProjectInfo: () => set({ projectName: "", hashColor: "text-gray-500" }),
  selectedProjectId: "",
  setSelectedProjectId: (id) => set(() => ({ selectedProjectId: id })),
}));
