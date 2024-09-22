"use client";

import React, { Fragment, useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import { cn } from "@/lib/utils";
import NavMobileMenu from "./NavMobileMenu";

import { RxDropdownMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { Button } from "@/components/ui/button";
import { useToggleNav } from "@/hooks/useToggleNav";

const Navbar = () => {
  const { open, setOpen } = useToggleNav();
  const divElementRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (
      divElementRef.current &&
      !divElementRef.current.contains(e.target as HTMLElement)
    ) {
      setOpen();
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);
  return (
    <div className="sticky z-50 top-0 left-0" ref={divElementRef}>
      <div className="flex items-center justify-between px-3 lg:px-16 h-16 lg:h-20 border-b lg:border-b-transparent border-zinc-200 bg-white z-50">
        <Logo />
        <div className="lg:block hidden">
          <NavMenu />
        </div>
        <Button
          className="lg:hidden"
          variant={"ghost"}
          onClick={() => setOpen()}
        >
          {open ? (
            <RxCross1 className="text-xl" />
          ) : (
            <RxDropdownMenu
              className="text-3xl
          "
            />
          )}
        </Button>
      </div>
      <div>
        <NavMobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
