"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Project } from "@/data/projects";
import ProjectModal from "./ProjectModal";

type ProjectModalContextValue = {
  openProject: (project: Project) => void;
  closeProject: () => void;
};

const ProjectModalContext = createContext<ProjectModalContextValue | null>(null);

export function useProjectModal() {
  const ctx = useContext(ProjectModalContext);
  if (!ctx) {
    throw new Error("useProjectModal must be used within ProjectModalProvider");
  }
  return ctx;
}

export default function ProjectModalProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [selected, setSelected] = useState<Project | null>(null);

  const openProject = (project: Project) => setSelected(project);
  const closeProject = () => setSelected(null);

  useEffect(() => {
    if (!selected) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [selected]);

  return (
    <ProjectModalContext.Provider value={{ openProject, closeProject }}>
      {children}
      <ProjectModal project={selected} onClose={closeProject} />
    </ProjectModalContext.Provider>
  );
}
