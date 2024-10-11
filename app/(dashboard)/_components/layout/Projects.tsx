"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { CiCircleChevDown, CiCirclePlus, CiHashtag } from "react-icons/ci";

import { myProjects } from "@/actions/todo/project";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { BsThreeDots } from "react-icons/bs";
import { useAddTask } from "../../_hooks/useAddText";
import { useProject } from "../../_hooks/useProject";
import { useProjectDetail } from "../../_hooks/useProjectDetail";
import AddProjectModal from "./projects/AddProjectModal";
import EditProject from "./projects/EditProject";

const CalcHeight = (base: number, length: number, each: number) => {
  const num = base + length * each + 10;
  const h = `${num}px`;
  return h;
};

const Projects = () => {
  const router = useRouter();
  const [open, setOpen] = useState(true);
  // hooks
  const { setHashColor, setProjectName, setSelectedProjectId } = useProject();
  const { setAddBoxOpen } = useAddTask();
  const { selectedProjectToHightlight } = useProjectDetail();

  //get data

  const { data, isPending } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const data = await myProjects();
      return data;
    },
  });

  // data checking......
  if (isPending) {
    return <div>loading....</div>;
  }
  if (data?.error) {
    return <div>error occurs</div>;
  }

  return (
    <div
      style={
        open
          ? { height: CalcHeight(40, data?.projects?.length || 0, 36) }
          : { height: "40px" }
      }
      className={cn(" p-2 overflow-hidden transition-all")}
    >
      <div className="flex items-center justify-between p-2 hover:bg-zinc-50 cursor-pointer rounded-md">
        <h1 className="font-semibold">My projects</h1>
        <div className="flex items-center gap-2 text-xl">
          <AddProjectModal>
            <CiCirclePlus />
          </AddProjectModal>
          <CiCircleChevDown
            className={cn("transition-all", !open ? "-rotate-90" : "rotate-0")}
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>
      <ul>
        {data?.projects
          ?.filter((item) => item.projectName !== "inbox")
          .map((item, i) => (
            <li
              key={i}
              className={cn(
                "p-[6px] cursor-pointer group relative  rounded-md",
                selectedProjectToHightlight === item.projectName &&
                  "bg-amber-100"
              )}
            >
              <span
                onClick={() => {
                  setAddBoxOpen(null);
                  router.push(`/app/project/${item.projectName}-${item.id}`);
                }}
                className="flex items-center gap-2 justify-start mr-7 "
              >
                <CiHashtag className={item.hashColor ?? ""} />
                {item.projectName}
              </span>
              <span className="  group-hover:visible absolute invisible top-2 right-2 cursor-pointer p-1">
                <EditProject>
                  <span
                    onClick={() => {
                      setProjectName(item.projectName);
                      setHashColor(item.hashColor!);
                      setSelectedProjectId(item.id);
                    }}
                  >
                    <BsThreeDots />
                  </span>
                </EditProject>
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Projects;
