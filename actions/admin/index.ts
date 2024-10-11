"use server";
import { auth } from "@/auth";
import { prisma } from "@/lib/db/prisma";

export const admin_createProject = async (projectName: string) => {
  try {
    let user = await auth();
    await prisma.project.create({
      data: {
        projectName,
        userId: user?.user?.id!,
        hashColor: "text-gray-500",
      },
    });
    return { message: "Project created" };
  } catch (error) {
    return { error: "error" };
  }
};
