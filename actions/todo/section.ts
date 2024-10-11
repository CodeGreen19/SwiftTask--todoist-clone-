"use server";

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
    await prisma.project.update({
      where: { id: projectId },
      data: {
        sections: {
          push: [name],
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
    const project = await prisma.project.findUnique({
      where: { id: projectId },
    });
    if (!project) {
      return { error: "project not found" };
    }
    const secIndex = project.sections.indexOf(oldName);
    const filtered = project.sections.splice(secIndex, 1, newOne);

    await prisma.project.update({
      where: { id: projectId },
      data: {
        sections: {
          push: filtered,
        },
      },
    });
    return { message: "updated" };
  } catch (error) {
    return { error: "error" };
  }
};
