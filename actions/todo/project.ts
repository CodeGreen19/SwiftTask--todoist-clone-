"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/db/prisma";
import { ProjectType } from "@/types/todo";

export const ProjectAction = async (projectInfo: ProjectType) => {
  try {
    let user = await auth();
    let info = { ...projectInfo, userId: user?.user?.id! };
    if (!projectInfo.id) {
      // create project
      delete info.id;
      await prisma.project.create({ data: info });
      return { message: "New Project Created" };
    } else {
      // update project
      await prisma.project.update({ where: { id: info.id }, data: info });
      return { message: "Project Updated" };
    }
  } catch (error) {
    return { error: "error" };
  }
};
export const myProjects = async () => {
  try {
    let user = await auth();
    let projects = await prisma.project.findMany({
      where: { userId: user?.user?.id },
    });
    return { projects };
  } catch (error) {
    return { error: "error" };
  }
};
export const deleteProject = async (id: string) => {
  try {
    await prisma.project.delete({ where: { id } });
    return { message: "deleted" };
  } catch (error) {
    return { error: "error" };
  }
};
