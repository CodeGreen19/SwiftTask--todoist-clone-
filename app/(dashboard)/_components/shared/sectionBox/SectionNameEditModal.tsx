import React, { FormEvent, ReactNode, useRef } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CustomBtn from "../loading/CustomBtn";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSection } from "@/actions/todo/section";
import { useProjectDetail } from "@/app/(dashboard)/_hooks/useProjectDetail";
import { useSectionAdd } from "@/app/(dashboard)/_hooks/useSectionAdd";

const SectionNameEditModal = ({
  children,
  oldName,
}: {
  children: ReactNode;
  oldName: string;
}) => {
  const queryClient = useQueryClient();

  const { selectedProjectId } = useProjectDetail();
  const { sectionName, setSectionName } = useSectionAdd();
  // ref
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  // create section
  const { mutate, isPending } = useMutation({
    mutationFn: updateSection,
    onSuccess: () => {
      setSectionName("");

      queryClient.invalidateQueries({ queryKey: [selectedProjectId] });
      triggerRef.current?.click();
    },
  });

  const onsubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate({ newOne: sectionName, oldName, projectId: selectedProjectId });
  };
  return (
    <Dialog>
      <DialogTrigger className="w-full" ref={triggerRef}>
        {children}
      </DialogTrigger>
      <DialogContent className="border-none">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription className="rounded-md bg-white">
            <form
              className="mt-2 space-y-3 rounded-md bg-slate-50 p-3"
              onSubmit={onsubmit}
            >
              <Input
                value={sectionName}
                autoFocus
                className="bg-white font-medium placeholder:text-zinc-400 focus-visible:ring-transparent"
                onChange={(e) => setSectionName(e.target.value)}
                type="text"
                placeholder="Name this section"
              />
              <div className="flex items-center justify-end gap-2">
                <DialogTrigger>
                  <Button type="button" variant={"secondary"}>
                    cancel
                  </Button>
                </DialogTrigger>
                <CustomBtn
                  type="submit"
                  isPending={isPending}
                  disable={sectionName.length === 0 ? true : false}
                  className="bg-signature hover:bg-amber-600"
                >
                  update
                </CustomBtn>
              </div>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SectionNameEditModal;
