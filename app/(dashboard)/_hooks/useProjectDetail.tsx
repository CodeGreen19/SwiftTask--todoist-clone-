import { create } from "zustand";

type ProjectType = {
  name: string;
  id: string;
};

type Store = {
  selectedProjectSections: string[];
  setSelectedProjectSections: (text: string[]) => void;
  selectedProjectName: string;
  setSelectedProjectName: (text: string) => void;
  selectedProjectToHightlight: string;
  setSelectedProjectToHightlight: (text: string) => void;
  selectedProjectId: string;
  setSelectedProjectId: (text: string) => void;
  projects: ProjectType[]; // Adding projects state
  setProjects: (projects: ProjectType[]) => void; // Function to update projects
};

export const useProjectDetail = create<Store>()((set) => ({
  selectedProjectSections: [],
  setSelectedProjectSections: (value) =>
    set({ selectedProjectSections: value }),
  selectedProjectName: "inbox",
  setSelectedProjectName: (text) => set(() => ({ selectedProjectName: text })),
  selectedProjectId: "",
  setSelectedProjectId: (text) => set(() => ({ selectedProjectId: text })),
  selectedProjectToHightlight: "",
  setSelectedProjectToHightlight: (text) =>
    set(() => ({ selectedProjectToHightlight: text })),

  // Initialize projects as an empty array
  projects: [],

  // Function to set/update projects
  setProjects: (projects) => set(() => ({ projects })),
}));
