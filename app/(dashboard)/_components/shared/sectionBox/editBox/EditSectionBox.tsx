"use client";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import SectionNameEditModal from "../SectionNameEditModal";
import { useSectionAdd } from "@/app/(dashboard)/_hooks/useSectionAdd";
import ConfirmDeleteSection from "./ConfirmDeleteSection";

const EditSectionBox = ({
  children,
  oldName,
}: {
  children: React.ReactNode;
  oldName: string;
}) => {
  const { setSectionName } = useSectionAdd();
  return (
    <div>
      <Popover>
        <PopoverTrigger>{children}</PopoverTrigger>
        <PopoverContent className="flex w-auto flex-col items-center justify-center gap-1">
          <SectionNameEditModal oldName={oldName}>
            <Button
              onClick={() => setSectionName(oldName)}
              className="w-full text-gray-500"
              variant={"secondary"}
            >
              Edit{" "}
            </Button>
          </SectionNameEditModal>
          <ConfirmDeleteSection sectionName={oldName}>
            <Button variant={"secondary"} className="text-red-500">
              Delete
            </Button>
          </ConfirmDeleteSection>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default EditSectionBox;
