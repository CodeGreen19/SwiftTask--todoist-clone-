import { create } from "zustand";
import { SettingOptionsType } from "../_components/data/types";

type Store = {
  SelectedSetting: SettingOptionsType;
  setSelectedSetting: (text: SettingOptionsType) => void;
};

export const useSettings = create<Store>()((set) => ({
  SelectedSetting: "Account",
  setSelectedSetting: (text) => set(() => ({ SelectedSetting: text })),
}));
