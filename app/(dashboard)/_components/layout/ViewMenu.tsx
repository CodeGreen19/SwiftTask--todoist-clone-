"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LayoutSwitch from "./viewMenu/LayoutSwitch";
import ShowToolTip from "../shared/ShowToolTip";
import { FaQuestion } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { Switch } from "@/components/ui/switch";
import { SHOW_COMPLETED_TASK } from "../data";
import { useTheme } from "../../_hooks/useTheme";

const ViewMenu = ({ children }: { children: React.ReactNode }) => {
  const { setShowCompletedTask, showCompletedTask } = useTheme();
  const handleTaskCompleteToggle = () => {
    setShowCompletedTask(!showCompletedTask);
    if (!showCompletedTask) {
      localStorage.setItem(SHOW_COMPLETED_TASK, "show");
      setShowCompletedTask(true);
    } else {
      localStorage.removeItem(SHOW_COMPLETED_TASK);
      setShowCompletedTask(false);
    }
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none ring-transparent">
          {children}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mx-3 p-2">
          <div className="my-3 flex items-center justify-between">
            <h1 className="font-bold">View</h1>
            <ShowToolTip info="Layout is synced between teammates in shared projects.">
              <FaQuestion className="text-sm" />
            </ShowToolTip>
          </div>
          <LayoutSwitch />
          <div className="my-4 flex items-center justify-between text-zinc-500">
            <span className="flex items-center gap-1">
              <FiCheckCircle className="mr-1" />{" "}
              <span className="text-sm">Completed Task</span>
            </span>
            <Switch
              checked={showCompletedTask}
              onCheckedChange={handleTaskCompleteToggle}
              className="data-[state=checked]:bg-amber-500"
            />
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ViewMenu;
