import { IconType } from "react-icons/lib";

export type SettingOptionsType =
  | "Account"
  | "General"
  | "Subscription"
  | "Theme";
export type SettingArrType = {
  name: SettingOptionsType;
  icon: IconType;
};
