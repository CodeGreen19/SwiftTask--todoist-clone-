"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetOverlay,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import React from "react";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
import Projects from "./Projects";
import UserMenu from "./UserMenu";
import AddTaskBtn from "./sidebar/AddTaskBtn";
import SideBarLists from "./sidebar/SideBarLists";

const MobileSideBar = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  return (
    <div>
      <Sheet>
        <SheetOverlay className="bg-black/15" />
        <SheetTrigger>{children}</SheetTrigger>
        <SheetContent side={"left"} className="bg-amber-50 p-3 ">
          <div className="flex items-center justify-between">
            <UserMenu />
            <div className="flex items-center justify-center text-gray-700 mr-2">
              <span className="p-1 mr-4 rounded-md hover:bg-slate-100">
                <IoNotificationsOutline className="text-lg" />
              </span>
              <SheetClose className="flex items-center justify-end w-full">
                <span>
                  <BsReverseLayoutTextSidebarReverse />
                </span>
              </SheetClose>
            </div>
          </div>
          <SheetTitle></SheetTitle>
          <AddTaskBtn />
          <SideBarLists pathName={pathName} />
          <div>
            <Projects />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSideBar;
