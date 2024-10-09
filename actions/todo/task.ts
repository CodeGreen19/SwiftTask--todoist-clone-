"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/db/prisma";
import { AddTaskType } from "@/types/todo";

export const AddTask = async (taskInfo: AddTaskType) => {
  try {
    let user = await auth();
    let info = { ...taskInfo, userId: user?.user?.id! };
    delete info.id;
    const newTask = await prisma.todo.create({ data: info });
    return { message: "success", newTask };
  } catch (error) {
    return { error: "error " };
  }
};
export const getAllTasks = async () => {
  try {
    let user = await auth();
    let tasks = await prisma.todo.findMany({
      where: { userId: user?.user?.id },
    });

    return { tasks };
  } catch (error) {
    return { error: "error" };
  }
};
export const updateTask = async (info: AddTaskType) => {
  try {
    let task = await prisma.todo.findUnique({ where: { id: info.id } });
    if (!task) {
      return { error: "task not found" };
    }
    delete info.id;
    console.log(info);

    await prisma.todo.update({ where: { id: task.id }, data: info });

    return { message: "updated" };
  } catch (error) {
    return { error: "error" };
  }
};
export const deleteTask = async (taskId: string) => {
  try {
    await prisma.todo.delete({ where: { id: taskId } });
    return { message: "deleted" };
  } catch (error) {
    return { error: "error" };
  }
};
