import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetOverlay,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import UserMenu from "./UserMenu";

const MobileSideBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Sheet>
        <SheetOverlay className="bg-black/15" />
        <SheetTrigger>{children}</SheetTrigger>
        <SheetContent side={"left"} className="bg-amber-50">
          <SheetClose className="flex items-center justify-end w-full">
            <BsReverseLayoutTextSidebarReverse />
          </SheetClose>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              <UserMenu />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSideBar;
