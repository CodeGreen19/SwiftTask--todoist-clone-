"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import SideBar from "./_components/layout/SideBar";
import DashboardNav from "./_components/layout/DashboardNav";

const DashboardLaoyout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className={cn("text-zinc-600")}>
      <div className="hidden lg:block">
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div
        className={cn(
          "mr-0 transition-all duration-500",
          isOpen ? "lg:ml-[280px]" : "mr-0",
        )}
      >
        <DashboardNav />
        <div className="m-auto max-w-3xl p-4 dark:bg-neutral-800">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLaoyout;
