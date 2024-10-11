import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useRef } from "react";

import { ProjectAction } from "@/actions/todo/project";
import { useProject } from "@/app/(dashboard)/_hooks/useProject";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ProjectType } from "@/types/todo";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CiHashtag } from "react-icons/ci";
import { projectHashColor } from "../../data";
import CustomBtn from "../../shared/loading/CustomBtn";

const AddProjectModal = ({ children }: { children: React.ReactNode }) => {
  const {
    hashColor,
    projectName,
    setHashColor,
    setProjectName,
    clearProjectInfo,
  } = useProject();
  const dialogTriggerRef = useRef<HTMLButtonElement | null>(null);
  const queryClient = useQueryClient();
  // create project

  const { isPending, mutate } = useMutation({
    mutationFn: ProjectAction,
    onSuccess: ({ message }) => {
      if (message) {
        clearProjectInfo();
        queryClient.invalidateQueries({ queryKey: ["projects"] });
        dialogTriggerRef.current?.click();
      }
    },
  });

  const handleCreate = () => {
    const data: ProjectType = {
      projectName,
      hashColor,
    };
    mutate(data);
  };

  const defaultColor = projectHashColor.find(
    (item) => item.colorCode === hashColor
  )!;

  return (
    <div>
      <Dialog>
        <DialogOverlay className="" />
        <DialogTrigger className="flex items-center">{children}</DialogTrigger>
        <DialogContent className="bg-white rounded-lg p-4 w-4/5 md:w-[400px] drop-shadow-lg">
          <DialogHeader>
            <DialogTitle className="text-start text-zinc-600">
              Create New Project
            </DialogTitle>
            <DialogDescription className="space-y-2 text-start">
              <div>
                <h1 className="my-2">Project Name</h1>
                <Input
                  className="focus-visible:ring-transparent"
                  type="text"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                />
              </div>
              <h1>Color</h1>
              <Select onValueChange={(value) => setHashColor(value)}>
                <SelectTrigger className="w-full">
                  <SelectValue
                    placeholder={
                      <div className={cn("flex items-center gap-2", hashColor)}>
                        <CiHashtag /> <span>{defaultColor.name}</span>
                      </div>
                    }
                    defaultValue={defaultColor.colorCode}
                  />
                </SelectTrigger>
                <SelectContent className="max-h-48">
                  {projectHashColor.map((item) => (
                    <SelectItem
                      className={cn(
                        `flex items-center w-full justify-start p-2 rounded-md hover:bg-amber-50 cursor-pointer  hover:${item.colorCode}`,
                        item.colorCode
                      )}
                      value={item.colorCode}
                      key={item.name}
                    >
                      <div className="flex items-center gap-2 ">
                        <item.icon /> <span>{item.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="flex items-center gap-1 justify-end ">
                <DialogTrigger ref={dialogTriggerRef}>
                  <div
                    className="p-4 py-2 rounded-md bg-zinc-100"
                    onClick={clearProjectInfo}
                  >
                    Cancel
                  </div>
                </DialogTrigger>
                <CustomBtn
                  isPending={isPending}
                  disable={projectName ? false : true}
                  onClick={handleCreate}
                  className="bg-amber-500 text-white hover:bg-amber-600"
                >
                  Add Project
                </CustomBtn>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddProjectModal;
