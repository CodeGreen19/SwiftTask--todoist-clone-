"use client";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React from "react";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import Projects from "./Projects";
import AddTaskBtn from "./sidebar/AddTaskBtn";
import SideBarLists from "./sidebar/SideBarLists";
import UserMenu from "./UserMenu";

const SideBar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathName = usePathname();
  return (
    <div
      className={cn(
        "fixed left-0 top-0 h-screen w-[280px] bg-amber-50/70 transition-all duration-500",
        isOpen ? "translate-x-0" : "-translate-x-full",
      )}
    >
      <div className="flex items-center justify-between p-3">
        <UserMenu />
        <div className="mr-2 flex items-center justify-center gap-2">
          <span className="rounded-md p-2 text-lg hover:bg-zinc-100">
            <IoIosNotificationsOutline className="" />
          </span>
          <span
            className={cn(
              "cursor-pointer rounded-md p-2 text-lg transition-all duration-500 hover:bg-zinc-100",
              isOpen ? "translate-x-0" : "translate-x-14",
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            <BsReverseLayoutTextSidebarReverse />
          </span>
        </div>
      </div>
      <div className="p-3">
        <AddTaskBtn />
        <SideBarLists pathName={pathName} />
      </div>
      <div>
        <Projects />
      </div>
    </div>
  );
};

export default SideBar;
