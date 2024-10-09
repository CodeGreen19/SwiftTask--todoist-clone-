export type PriorityType = "P1" | "P2" | "P3" | "P4";
export type AddTaskType = {
  id?: string;
  task: string;
  desc: string | null;
  dueDate: Date | null;
  priority: PriorityType;
  userId?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type ProjectType = {
  id?: string;
  projectName: string;
  hashColor?: string;
  sections?: string[];
  createdAt?: Date;
};
