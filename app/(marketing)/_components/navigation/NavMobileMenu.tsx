import { useToggleNav } from "@/hooks/useToggleNav";
import { cn } from "@/lib/utils";
import React, { Fragment, useState } from "react";
import { navItems } from "../data";
import Link from "next/link";
import { IoChevronUp, IoChevronDown } from "react-icons/io5";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const NavMobileMenu = () => {
  const { open, setResourceOpen, resourceOpen } = useToggleNav();

  return (
    <div
      className={cn(
        "px-6  shadow-[inset_0_0_20px_gray] lg:hidden bg-white transition-all duration-300  overflow-hidden",
        open && !resourceOpen
          ? "h-72 "
          : open && resourceOpen
          ? "h-[91vh]"
          : "h-0"
      )}
    >
      <ul className="mt-4">
        {navItems.map((item, i) =>
          item.title ? (
            <Link key={i} href={item.link}>
              <li className="p-2 hover:bg-slate-100 rounded-md">
                {item.title}
              </li>
            </Link>
          ) : (
            <Fragment key={i}>
              <li
                onClick={setResourceOpen}
                className="flex p-2 hover:bg-slate-100 rounded-md items-center justify-between cursor-pointer"
              >
                <span>{item.mainTitle}</span>
                <span className="mr-2">
                  {resourceOpen ? <IoChevronDown /> : <IoChevronUp />}
                </span>
              </li>
              <ul
                className={cn(
                  "overflow-hidden transition-all duration-300 h-0",
                  resourceOpen ? "h-52" : ""
                )}
              >
                {item.data?.map((info) => (
                  <Link key={info.title} href={info.link}>
                    <li className="p-2 ml-4 hover:bg-slate-100 rounded-md ">
                      {info.title}
                    </li>
                  </Link>
                ))}
              </ul>
            </Fragment>
          )
        )}
      </ul>
      <Separator className="my-4" />
      <div className="grid grid-cols-2 gap-2 ">
        <Button className="py-6" variant={"secondary"}>
          Log in
        </Button>
        <Button className="p-6 hover:bg-signature bg-signature text-bl">
          Start for free{" "}
        </Button>
      </div>
    </div>
  );
};

export default NavMobileMenu;
