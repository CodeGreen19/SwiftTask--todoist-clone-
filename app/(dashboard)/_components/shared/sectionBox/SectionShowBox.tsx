"use client";

import { useProjectDetail } from "@/app/(dashboard)/_hooks/useProjectDetail";

import { AddTaskType } from "@/types/todo";
import SectionEach from "./SectionEach";

const SectionShowBox = ({ tasks }: { tasks: AddTaskType[] }) => {
  const { selectedProjectSections } = useProjectDetail();

  return (
    <div>
      {selectedProjectSections.map((item, i) => (
        <SectionEach tasks={tasks} name={item} key={i} />
      ))}
    </div>
  );
};

export default SectionShowBox;
