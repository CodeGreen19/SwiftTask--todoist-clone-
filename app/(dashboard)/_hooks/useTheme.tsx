import { create } from "zustand";

type ThemeColorType = "Dark" | "Light";
type Store = {
  showCompletedTask: boolean;
  setShowCompletedTask: (value: boolean) => void;
  themeColor: ThemeColorType;
  setThemeColor: (color: ThemeColorType) => void;
};

export const useTheme = create<Store>()((set) => ({
  showCompletedTask: false,
  setShowCompletedTask: (vlaue) => set(() => ({ showCompletedTask: vlaue })),
  themeColor: "Light",
  setThemeColor: (color) => set({ themeColor: color }),
}));
