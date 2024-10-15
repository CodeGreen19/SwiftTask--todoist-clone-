"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/db/prisma";

export const addSection = async ({
  name,
  projectId,
}: {
  projectId: string;
  name: string;
}) => {
  try {
    const project = await prisma.project.findUnique({
      where: { id: projectId },
    });
    if (!project) {
      return { error: "project not found" };
    }
    let isExist = project.sections.includes(name.trim());

    if (isExist) {
      return { BoxMessage: `${name} is already exist, try different one !` };
    }
    await prisma.project.update({
      where: { id: projectId },
      data: {
        sections: {
          push: [name.trim()],
        },
      },
    });
    return { message: "created" };
  } catch (error) {
    return { error: "error" };
  }
};
export const updateSection = async ({
  newOne,
  oldName,
  projectId,
}: {
  projectId: string;
  oldName: string;
  newOne: string;
}) => {
  try {
    const user = await auth();
    const project = await prisma.project.findUnique({
      where: { id: projectId },
    });
    if (!project) {
      return { error: "project not found" };
    }
    if (oldName === newOne.trim()) {
      return { message: "nothing has been changed !" };
    }

    // update project name
    const secIndex = project.sections.indexOf(oldName.trim());
    let filtered = project.sections;
    project.sections.splice(secIndex, 1, newOne.trim());

    await prisma.project.update({
      where: { id: projectId },
      data: {
        sections: filtered,
      },
    });

    // update task section name
    await prisma.todo.updateMany({
      where: {
        userId: user?.user?.id,
        projectName: project.projectName,
        sectionName: oldName,
      },
      data: {
        sectionName: newOne,
      },
    });
    return { message: "updated" };
  } catch (error) {
    return { error: "error" };
  }
};
export const deleteSection = async ({
  sectionName,
  projectId,
}: {
  sectionName: string;
  projectId: string;
}) => {
  try {
    let user = await auth();

    const project = await prisma.project.findUnique({
      where: { id: projectId },
    });
    if (!project) {
      return { error: "project not found" };
    }

    // update project name
    const filtered = project.sections.filter((item) => item !== sectionName);

    await prisma.project.update({
      where: { id: projectId },
      data: {
        sections: filtered,
      },
    });

    // update task section name
    await prisma.todo.deleteMany({
      where: {
        userId: user?.user?.id,
        projectName: project.projectName,
        sectionName: sectionName,
      },
    });
    return { message: "updated" };
  } catch (error) {
    return { error: "error" };
  }
};
