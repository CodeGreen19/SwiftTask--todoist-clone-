"use client";

import { useEffect, useRef, useCallback } from "react";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import NavMobileMenu from "./NavMobileMenu";
import { Button } from "@/components/ui/button";
import { useToggleNav } from "@/hooks/useToggleNav";
import { RxCross1, RxDropdownMenu } from "react-icons/rx";

const Navbar = () => {
  const { open, setOpen } = useToggleNav();
  const divElementRef = useRef<HTMLDivElement | null>(null);

  // Wrapping handleClickOutside in useCallback so it does not change on every render
  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (
        divElementRef.current &&
        !divElementRef.current.contains(e.target as HTMLElement)
      ) {
        setOpen();
      }
    },
    [setOpen]
  ); // useCallback will only recreate this function if setOpen changes

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, handleClickOutside]); // handleClickOutside is now stable

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
            <RxDropdownMenu className="text-3xl" />
          )}
        </Button>
      </div>
      {open && <NavMobileMenu />}{" "}
      {/* Display mobile menu only if 'open' is true */}
    </div>
  );
};

export default Navbar;
