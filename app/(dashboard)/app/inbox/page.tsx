"use client";
import {
  getAllTasksByProjectName,
  getSingleProjectIdByName,
} from "@/actions/todo/project";
import AddTaskSections from "@/app/(dashboard)/_components/inbox/AddTaskSections";
import Heading from "@/app/(dashboard)/_components/shared/Heading";
import SectionAddBox from "@/app/(dashboard)/_components/shared/sectionBox/SectionAddBox";
import { useProjectDetail } from "@/app/(dashboard)/_hooks/useProjectDetail";
import { useQuery } from "@tanstack/react-query";
import SectionShowBox from "../../_components/shared/sectionBox/SectionShowBox";

const ProjectShowPage = () => {
  // get params data
  const projectName = "inbox";
  // hooks
  const {
    setSelectedProjectName,
    setProjects,
    setSelectedProjectId,
    setSelectedProjectToHightlight,
    setSelectedProjectSections,
  } = useProjectDetail();

  // query the id
  const { data: idData, isPending: IdPending } = useQuery({
    queryKey: ["inbox"],
    queryFn: async () => {
      const info = await getSingleProjectIdByName("inbox");
      return info;
    },
  });

  // query the data
  const { isPending, data } = useQuery({
    queryKey: [idData?.id || "projects-by-id"],
    queryFn: async () => {
      setSelectedProjectName(projectName);
      if (idData?.id) {
        setSelectedProjectId(idData.id);
      }
      setSelectedProjectToHightlight(projectName);
      const data = await getAllTasksByProjectName(projectName);
      // for showing sections
      const projectSections = data.projects?.filter(
        (item) => item.id === idData?.id,
      );
      if (projectSections) {
        setSelectedProjectSections(projectSections[0].sections);
      }
      // set projects
      const info = data?.projects?.map((item) => {
        return {
          name: item.projectName,
          id: item.id,
        };
      });
      setProjects(info!);
      return data;
    },
    enabled: idData?.id ? true : false,
  });

  if (IdPending) {
    return <div>loading...</div>;
  }

  if (!idData?.id) {
    return <div>no data !</div>;
  }
  if (isPending) {
    return <div>loading...</div>;
  }

  if (!data?.tasks) {
    return <div>no data !</div>;
  }

  return (
    <div>
      <Heading text={projectName} />
      <AddTaskSections sectionName="" tasks={data?.tasks} />
      <SectionShowBox tasks={data?.tasks} />
      <SectionAddBox />
    </div>
  );
};

export default ProjectShowPage;
