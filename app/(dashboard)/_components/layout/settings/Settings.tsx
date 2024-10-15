import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SettingSidebar from "./SettingSidebar";
import SettingContent from "./SettingContent";

const Settings = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>{children}</DialogTrigger>
        <DialogContent className="h-[80vh] w-full max-w-5xl overflow-hidden rounded-md bg-slate-100 p-0">
          <DialogHeader>
            <DialogTitle className="mt-2 p-3 text-start">Settings</DialogTitle>
            <DialogDescription className="relative m-0 flex h-full bg-white p-0 dark:bg-neutral-600">
              <div className="">
                <SettingSidebar />
              </div>
              <div className="w-full">
                <SettingContent />
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Settings;
