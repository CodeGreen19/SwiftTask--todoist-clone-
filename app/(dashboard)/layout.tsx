"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import SideBar from "./_components/layout/SideBar";
import DashboardNav from "./_components/layout/DashboardNav";

const DashboardLaoyout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <div className="text-zinc-600">
      <div className="hidden lg:block">
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div
        className={cn(
          " mr-0 transition-all duration-500",
          isOpen ? "lg:ml-[280px]" : "mr-0"
        )}
      >
        <DashboardNav />
        <div className="p-4 max-w-3xl m-auto">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLaoyout;
