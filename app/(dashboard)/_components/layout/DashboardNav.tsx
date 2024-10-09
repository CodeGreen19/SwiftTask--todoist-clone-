"use client";

import React from "react";
import { IoOptionsOutline } from "react-icons/io5";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import MobileSideBar from "./MobileSideBar";
import { CiCircleList } from "react-icons/ci";
import ViewMenu from "./ViewMenu";
import { useScrollStore } from "@/hooks/useScrollStore";
import { cn } from "@/lib/utils";

const DashboardNav = () => {
  const { showNavText } = useScrollStore();
  return (
    <div className="w-full sticky top-0 left-0 z-20 bg-white h-14 flex items-center justify-between border-b border-b-zinc-100  md:border-b-transparent lg:justify-end px-4">
      <MobileSideBar>
        <span className="lg:hidden">
          <BsReverseLayoutTextSidebarReverse />
        </span>
      </MobileSideBar>
      {/* todo: show section name later  */}
      <div
        className={cn(
          "absolute top-3 text-lg font-semibold left-[44%] transition-all ",
          showNavText
            ? "visible scale-100 translate-y-0"
            : "invisible scale-50 translate-y-8"
        )}
      >
        {showNavText}
      </div>
      <ViewMenu>
        <span className="flex items-center gap-2">
          <CiCircleList /> <span className="hidden lg:block">View</span>
        </span>
      </ViewMenu>
    </div>
  );
};

export default DashboardNav;
