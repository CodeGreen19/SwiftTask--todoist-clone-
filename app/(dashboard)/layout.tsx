"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import SideBar from "./_components/layout/SideBar";
import DashboardNav from "./_components/layout/DashboardNav";
import MobileSideBar from "./_components/layout/MobileSideBar";

const DashboardLaoyout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <div>
      <div className="hidden lg:block">
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className="lg:hidden">
        <MobileSideBar />
      </div>
      <div
        className={cn(
          " mr-0 transition-all",
          isOpen ? "lg:ml-[280px]" : "mr-0"
        )}
      >
        <DashboardNav />
        {children}
      </div>
    </div>
  );
};

export default DashboardLaoyout;
