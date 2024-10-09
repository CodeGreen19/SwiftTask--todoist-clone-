import { create } from "zustand";

type Store = {
  showNavText: string;
  setShowNavText: (text: string) => void;
};

export const useScrollStore = create<Store>()((set) => ({
  showNavText: "",
  setShowNavText: (text) => set(() => ({ showNavText: text })),
}));
