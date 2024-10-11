"use client";
import { getAllTasksByProjectName } from "@/actions/todo/project";
import AddTaskSections from "@/app/(dashboard)/_components/inbox/AddTaskSections";
import Heading from "@/app/(dashboard)/_components/shared/Heading";
import SectionAddBox from "@/app/(dashboard)/_components/shared/sectionBox/SectionAddBox";
import SectionShowBox from "@/app/(dashboard)/_components/shared/sectionBox/SectionShowBox";
import { useProjectDetail } from "@/app/(dashboard)/_hooks/useProjectDetail";
import { useQuery } from "@tanstack/react-query";

const ProjectShowPage = ({ params }: { params: { id: string } }) => {
  // get params data
  const decode = decodeURIComponent(params.id);
  const info = decode.split("-");
  const projectName = info[0];
  const projectId = info[1];
  // hooks
  const {
    setSelectedProjectName,
    setProjects,
    setSelectedProjectId,
    setSelectedProjectToHightlight,
    setSelectedProjectSections,
  } = useProjectDetail();

  // query the data
  const { isPending, data } = useQuery({
    queryKey: [projectId],
    queryFn: async () => {
      setSelectedProjectName(projectName);
      setSelectedProjectId(projectId);
      setSelectedProjectToHightlight(projectName);
      const data = await getAllTasksByProjectName(projectName);
      // for selecting sections
      const projectSections = data.projects?.filter(
        (item) => item.id === projectId
      );
      if (projectSections) {
        setSelectedProjectSections(projectSections[0].sections);
      }
      // for nav
      const info = data?.projects?.map((item) => {
        return {
          name: item.projectName,
          id: item.id,
        };
      });
      setProjects(info!);
      return data;
    },
  });
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
