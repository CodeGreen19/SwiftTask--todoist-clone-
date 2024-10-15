"use client";

import { useSettings } from "@/app/(dashboard)/_hooks/useSettings";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { SettingsOptions } from "../../data";

const SettingSidebar = () => {
  const { setSelectedSetting, SelectedSetting } = useSettings();
  const isLaptop = useMediaQuery({
    query: "(min-width: 768px)",
  });

  const [open, setOpen] = useState<boolean>(isLaptop ?? false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className={cn(
        "absolute left-0 top-0 h-full w-full bg-black/15 md:relative",
        open ? "w-full" : "w-0",
      )}
    >
      <ul
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={cn(
          "h-full w-[180px] border-r bg-white p-2 transition-all md:border-r-0",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex justify-end md:hidden">
          <MenuIcon
            onClick={() => setOpen(!open)}
            className={cn(
              "rounded bg-white text-xs transition-all",
              open ? "translate-x-0" : "translate-x-9",
            )}
          />
        </div>
        {SettingsOptions.map((item, i) => (
          <li
            key={i}
            onClick={() => setSelectedSetting(item.name)}
            className={cn(
              "flex w-full cursor-pointer items-center justify-start gap-2 rounded-md p-2 hover:bg-zinc-50",
              SelectedSetting === item.name &&
                "bg-amber-200 hover:bg-amber-200",
            )}
          >
            <item.icon />
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SettingSidebar;
