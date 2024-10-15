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
  const [open, setOpen] = useState<boolean>(false);
  const [boxMessage, setBoxMessage] = useState<string>("");
  const [sectionName, setSectionName] = useState("");

  const { selectedProjectId } = useProjectDetail();

  // create section
  const { mutate, isPending } = useMutation({
    mutationFn: addSection,
    onSuccess: ({ BoxMessage: message }) => {
      if (message) {
        setBoxMessage(message);
        setTimeout(() => {
          setBoxMessage("");
        }, 5000);
        return;
      }
      queryClient.invalidateQueries({ queryKey: [selectedProjectId] });
      setOpen(false);
    },
  });

  const onsubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSectionName("");
    mutate({ name: sectionName, projectId: selectedProjectId });
  };
  return (
    <Fragment>
      {!open ? (
        <div onClick={() => setOpen(true)}>
          <SectionLine />
        </div>
      ) : (
        <form
          className="mt-2 space-y-3 rounded-md bg-slate-50 p-3"
          onSubmit={onsubmit}
        >
          {boxMessage && <h1 className="text-xs text-red-700">{boxMessage}</h1>}
          <Input
            value={sectionName}
            autoFocus
            className="bg-white font-medium placeholder:text-zinc-400 focus-visible:ring-transparent"
            onChange={(e) => setSectionName(e.target.value)}
            type="text"
            placeholder="Name this section"
          />
          <div className="flex items-center justify-end gap-2">
            <Button
              type="button"
              variant={"secondary"}
              onClick={() => {
                setOpen(false);
                setSectionName("");
              }}
            >
              cancel
            </Button>
            <CustomBtn
              type="submit"
              isPending={isPending}
              disable={sectionName.length === 0 ? true : false}
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
