"use client";

import React, { useRef } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { deleteSection } from "@/actions/todo/section";
import { useProjectDetail } from "@/app/(dashboard)/_hooks/useProjectDetail";
import { useSectionAdd } from "@/app/(dashboard)/_hooks/useSectionAdd";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import CustomBtn from "../../loading/CustomBtn";

const ConfirmDeleteSection = ({
  children,
  sectionName,
}: {
  children: React.ReactNode;
  sectionName: string;
}) => {
  const { taskCount } = useSectionAdd();
  const { selectedProjectId } = useProjectDetail();
  const queryClient = useQueryClient();
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const { mutate, isPending } = useMutation({
    mutationFn: deleteSection,
    onSuccess: ({ message }) => {
      if (message) {
        triggerRef.current?.click();
      }
      queryClient.invalidateQueries({ queryKey: [selectedProjectId] });
    },
  });

  return (
    <div>
      <Dialog>
        <DialogTrigger ref={triggerRef}>{children}</DialogTrigger>
        <DialogContent className="rounded-lg bg-white">
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription className="flex flex-col items-center justify-center gap-2">
              <h1 className="my-3 text-center">
                {`if you delete, you will lose ${taskCount} tasks !`}{" "}
              </h1>
              <div className="">
                <CustomBtn
                  isPending={isPending}
                  onClick={() => {
                    mutate({ sectionName, projectId: selectedProjectId });
                  }}
                  className="bg-red-500 text-white hover:bg-red-600"
                >
                  Delete
                </CustomBtn>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ConfirmDeleteSection;
