import { create } from "zustand";

type Store = {
  open: boolean;
  setOpen: () => void;
  resourceOpen: boolean;
  setResourceOpen: () => void;
};

export const useToggleNav = create<Store>()((set) => ({
  open: false,
  resourceOpen: false,
  setOpen: () => set((state) => ({ open: !state.open })),
  setResourceOpen: () =>
    set((state) => ({ resourceOpen: !state.resourceOpen })),
}));
