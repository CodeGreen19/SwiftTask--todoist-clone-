import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import UserMenu from "./UserMenu";
import { BsLayoutTextSidebar } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";

const SideBar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={cn(
        "w-[280px] transition-all fixed top-0 left-0 h-screen bg-amber-50/70",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex items-center justify-between p-3">
        <UserMenu />
        <div className="flex gap-2">
          <span className="p-2 text-lg rounded-md hover:bg-zinc-200">
            <IoNotificationsOutline />
          </span>
          <span
            className={cn(
              "transition-all p-2 cursor-pointer text-lg rounded-md hover:bg-zinc-200",
              isOpen ? "translate-x-0" : "translate-x-14"
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            <BsLayoutTextSidebar />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
