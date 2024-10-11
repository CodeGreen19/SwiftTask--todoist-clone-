"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { FormEvent, Fragment, useState } from "react";
import CustomBtn from "../loading/CustomBtn";
import SectionLine from "../SectionLine";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addSection } from "@/actions/todo/section";
import { useProjectDetail } from "@/app/(dashboard)/_hooks/useProjectDetail";

const SectionAddBox = () => {
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const { selectedProjectId } = useProjectDetail();

  // create section
  const { mutate, isPending } = useMutation({
    mutationFn: addSection,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [selectedProjectId] });
      setIsOpen(false);
    },
  });

  const onsubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setName("");
    mutate({ name, projectId: selectedProjectId });
  };
  return (
    <Fragment>
      {!isOpen ? (
        <div onClick={() => setIsOpen(true)}>
          <SectionLine />
        </div>
      ) : (
        <form
          className="p-3 mt-2  rounded-md space-y-3 bg-slate-50"
          onSubmit={onsubmit}
        >
          <Input
            value={name}
            className="bg-white   focus-visible:ring-transparent placeholder:text-zinc-400 font-medium"
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name this section"
          />
          <div className="flex items-center justify-end gap-2">
            <Button
              type="button"
              variant={"secondary"}
              onClick={() => setIsOpen(false)}
            >
              cancel
            </Button>
            <CustomBtn
              type="submit"
              isPending={isPending}
              disable={name.length === 0 ? true : false}
              className="bg-signature hover:bg-amber-600"
            >
              Add Section
            </CustomBtn>
          </div>
        </form>
      )}
    </Fragment>
  );
};

export default SectionAddBox;
