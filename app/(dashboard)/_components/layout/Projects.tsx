"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { CiCircleChevDown, CiCirclePlus, CiHashtag } from "react-icons/ci";

import AddProjectModal from "./projects/AddProjectModal";
import { useQuery } from "@tanstack/react-query";
import { myProjects } from "@/actions/todo/project";
import { BsThreeDots } from "react-icons/bs";
import { useProject } from "../../_hooks/useProject";
import EditProject from "./projects/EditProject";
import ProjectOptions from "./projects/ProjectOptions";

const CalcHeight = (base: number, length: number, each: number) => {
  let num = base + length * each;
  let h = `${num}px`;
  return h;
};

const Projects = () => {
  const { setHashColor, setProjectName, setSelectedProjectId } = useProject();
  const [open, setOpen] = useState(true);

  //get data

  let { data, isPending } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      let data = await myProjects();
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
          ? { height: CalcHeight(40, data?.projects?.length!, 36) }
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
        {data?.projects?.map((item, i) => (
          <li
            key={i}
            className="p-[6px] group relative hover:bg-zinc-50 rounded-md"
          >
            <span className="flex items-center gap-2 justify-start">
              <CiHashtag className={item.hashColor ?? ""} />
              {item.projectName}
            </span>
            <span className=" group-hover:visible absolute invisible top-2 right-2 cursor-pointer p-1">
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
