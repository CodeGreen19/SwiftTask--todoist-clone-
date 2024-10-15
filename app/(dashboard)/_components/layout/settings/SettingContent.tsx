"use client";

import { useSettings } from "@/app/(dashboard)/_hooks/useSettings";
import React from "react";
import Account from "./settingContent/Account";
import General from "./settingContent/General";
import Subscription from "./settingContent/Subscription";
import Theme from "./settingContent/Theme";

const SettingContent = () => {
  const { SelectedSetting } = useSettings();
  return (
    <div className="h-full w-full border p-2">
      {SelectedSetting === "Account" ? (
        <Account />
      ) : SelectedSetting === "General" ? (
        <General />
      ) : SelectedSetting === "Subscription" ? (
        <Subscription />
      ) : SelectedSetting === "Theme" ? (
        <Theme />
      ) : (
        ""
      )}
    </div>
  );
};

export default SettingContent;
