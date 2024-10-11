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

const ViewMenu = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none ring-transparent">
          {children}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mx-3 p-2">
          <div className="flex items-center justify-between my-3">
            <h1 className="font-bold">View</h1>
            <ShowToolTip info="Layout is synced between teammates in shared projects.">
              <FaQuestion className="text-sm" />
            </ShowToolTip>
          </div>
          <LayoutSwitch />
          <div className="flex items-center justify-between my-4 text-zinc-500">
            <span className="flex items-center gap-1">
              <FiCheckCircle className="mr-1" />{" "}
              <span className="text-sm">Completed Task</span>
            </span>
            <Switch className=" data-[state=checked]:bg-amber-500" />
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ViewMenu;
