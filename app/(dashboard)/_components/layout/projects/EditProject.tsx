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
import React, { useRef, useState } from "react";

import { deleteProject, ProjectAction } from "@/actions/todo/project";
import { useProject } from "@/app/(dashboard)/_hooks/useProject";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ProjectType } from "@/types/todo";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CiHashtag } from "react-icons/ci";
import { projectHashColor } from "../../data";
import CustomBtn from "../../shared/loading/CustomBtn";
import { useRouter } from "next/navigation";

const EditProject = ({ children }: { children: React.ReactNode }) => {
  const {
    hashColor,
    projectName,
    setHashColor,
    setProjectName,
    clearProjectInfo,
    selectedProjectId,
  } = useProject();
  const dialogTriggerRef = useRef<HTMLButtonElement | null>(null);
  const queryClient = useQueryClient();
  // create project

  const router = useRouter();
  const [boxMessage, setBoxMessage] = useState<string>("");
  const { isPending, mutate } = useMutation({
    mutationFn: ProjectAction,
    onSuccess: ({ message, BoxMessage: b_message }) => {
      if (b_message) {
        setBoxMessage(b_message);
        setTimeout(() => {
          setBoxMessage("");
        }, 5000);

        return;
      }
      if (message) {
        clearProjectInfo();
        queryClient.invalidateQueries({ queryKey: ["projects"] });

        dialogTriggerRef.current?.click();
      }
    },
  });

  // delete project
  const { isPending: del_pending, mutate: del_mutate } = useMutation({
    mutationFn: deleteProject,
    onSuccess: ({ message }) => {
      if (message) {
        clearProjectInfo();
        router.push("/app/inbox");
        queryClient.invalidateQueries({ queryKey: ["projects"] });
        dialogTriggerRef.current?.click();
      }
    },
  });

  const hanldeUpdate = () => {
    const data: ProjectType = {
      projectName: projectName.trim(),
      hashColor,
      id: selectedProjectId,
    };
    mutate(data);
  };

  const defaultColor = projectHashColor.find(
    (item) => item.colorCode === hashColor,
  )!;

  return (
    <div>
      <Dialog>
        <DialogOverlay className="" />
        <DialogTrigger className="flex items-center">{children}</DialogTrigger>
        <DialogContent className="w-4/5 rounded-lg bg-white p-4 drop-shadow-lg md:w-[400px]">
          <DialogHeader>
            <DialogTitle className="text-start text-zinc-600">
              Update Project
            </DialogTitle>
            <DialogDescription className="space-y-2 text-start">
              {boxMessage && (
                <p className="my-1 text-xs text-red-500">{boxMessage}</p>
              )}
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
                        `flex w-full cursor-pointer items-center justify-start rounded-md p-2 hover:bg-amber-50 hover:${item.colorCode}`,
                        item.colorCode,
                      )}
                      value={item.colorCode}
                      key={item.name}
                    >
                      <div className="flex items-center gap-2">
                        <item.icon /> <span>{item.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="flex items-center justify-end gap-1">
                <DialogTrigger ref={dialogTriggerRef}>
                  <div
                    className="rounded-md bg-zinc-100 p-4 py-2"
                    onClick={clearProjectInfo}
                  >
                    Cancel
                  </div>
                </DialogTrigger>
                <CustomBtn
                  isPending={isPending}
                  disable={projectName ? false : true}
                  onClick={hanldeUpdate}
                  className="w-20 bg-purple-500 text-white hover:bg-purple-600"
                >
                  Update
                </CustomBtn>
                <CustomBtn
                  isPending={del_pending}
                  disable={del_pending}
                  onClick={() => del_mutate(selectedProjectId)}
                  className="w-20 bg-red-500 hover:bg-red-600"
                >
                  Delete Project
                </CustomBtn>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditProject;
