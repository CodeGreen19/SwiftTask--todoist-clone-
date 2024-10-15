import { create } from "zustand";

type Store = {
  sectionName: string;
  setSectionName: (text: string) => void;
  taskCount: number;
  setTaskCount: (num: number) => void;
  open: boolean;
  setOpen: (value: boolean) => void;
};

export const useSectionAdd = create<Store>()((set) => ({
  sectionName: "",
  setSectionName: (value) => set(() => ({ sectionName: value })),
  taskCount: 0,
  setTaskCount: (num) => set({ taskCount: num }),
  open: false,
  setOpen: (value) => set({ open: value }),
}));
