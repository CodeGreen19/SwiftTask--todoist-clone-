import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const SearchModal = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogOverlay className="bg-transparent" />
      <DialogTrigger className="w-full">{children}</DialogTrigger>
      <DialogContent className="bg-white rounded-md  w-5/6 md:w-[500px] ">
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SearchModal;
