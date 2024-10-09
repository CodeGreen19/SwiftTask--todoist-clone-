"use client";
import React from "react";
import { dashboardNavArr } from "../../data";
import Link from "next/link";
import { cn } from "@/lib/utils";
import SearchModal from "./SearchModal";
import { useScrollStore } from "@/hooks/useScrollStore";

const SideBarLists = ({ pathName }: { pathName: string }) => {
  const { setShowNavText } = useScrollStore();
  return (
    <ul className="">
      {dashboardNavArr.map((item) =>
        item.tag === "Search" ? (
          <SearchModal key={item.tag}>
            <li className="flex p-2 w-full hover:bg-slate-50 rounded-md items-center justify-start gap-2">
              <span>
                <item.icon />
              </span>{" "}
              {item.tag}
            </li>
          </SearchModal>
        ) : (
          <Link
            key={item.tag}
            href={item.link}
            onClick={() => setShowNavText("")}
          >
            <li
              className={cn(
                "flex p-2 hover:bg-slate-50 rounded-md  items-center justify-start gap-2",
                pathName === item.link &&
                  "bg-amber-100 hover:bg-amber-100 text-amber-600"
              )}
            >
              <span>
                <item.icon
                  className={cn(pathName === item.link && "text-amber-800")}
                />
              </span>{" "}
              {item.tag}
            </li>
          </Link>
        )
      )}
    </ul>
  );
};

export default SideBarLists;
