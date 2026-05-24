"use client";

import { statusLabel, type Project, type ProjectStatus } from "@/data/projects";
import { iconMap, ArrowIcon } from "./Icons";
import { useProjectModal } from "./ProjectModalProvider";

const statusStyle: Record<ProjectStatus, string> = {
  flagship: "border-gold/40 bg-gold/15 text-gold",
  complete: "border-emerald/50 bg-emerald/15 text-glow",
  released: "border-emerald/50 bg-emerald/15 text-glow",
  built: "border-emerald/50 bg-emerald/15 text-glow",
  "in-progress": "border-bronze/40 bg-bronze/15 text-bronze",
};

export default function ProjectCard({ project }: { project: Project }) {
  const { openProject } = useProjectModal();
  const Icon = iconMap[project.icon] ?? iconMap.compass;

  return (
    <div className="card-codex parchment flex h-full flex-col rounded-2xl p-6">
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
          <Icon className="h-5 w-5" />
        </span>
        <span
          className={`rounded-full border px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wider ${statusStyle[project.status]}`}
        >
          {statusLabel[project.status]}
        </span>
      </div>

      <div className="font-accent mt-4 text-sm tracking-wide text-gold/80">
        {project.location}
      </div>
      <h3 className="font-display text-xl font-semibold text-fg">
        {project.name}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-muted [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:4] overflow-hidden">
        {project.does}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded border border-border bg-bg-soft/60 px-2 py-0.5 font-mono text-[0.7rem] text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      <button
        type="button"
        onClick={() => openProject(project)}
        className="group mt-5 inline-flex items-center gap-2 self-start font-mono text-xs uppercase tracking-wider text-gold transition-colors hover:text-gold-soft"
      >
        View details
        <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  );
}
