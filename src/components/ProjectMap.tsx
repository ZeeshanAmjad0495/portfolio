"use client";

import {
  projects,
  statusLabel,
  districtLabel,
  type District,
  type Project,
} from "@/data/projects";
import { iconMap, CompassIcon } from "./Icons";
import { useProjectModal } from "./ProjectModalProvider";
import Section from "./Section";
import Reveal from "./Reveal";

const districtOrder: District[] = [
  "quality",
  "trade",
  "clinic",
  "guild",
  "frontier",
];

const regionLabels: { d: District; x: number; y: number }[] = [
  { d: "quality", x: 30, y: 7 },
  { d: "clinic", x: 44, y: 46 },
  { d: "guild", x: 80, y: 30 },
  { d: "trade", x: 30, y: 95 },
  { d: "frontier", x: 88, y: 75 },
];

function Marker({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (project: Project) => void;
}) {
  const Icon = iconMap[project.icon] ?? iconMap.compass;
  const frontier = project.status === "in-progress";
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      aria-label={`${project.name}, ${project.location}. ${statusLabel[project.status]}.`}
      style={{ left: `${project.map.x}%`, top: `${project.map.y}%` }}
      className="group absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 outline-none"
    >
      <span
        className={`relative flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-300 group-hover:scale-110 group-focus-visible:ring-2 group-focus-visible:ring-gold group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-bg ${
          frontier
            ? "border-bronze/50 bg-bg/70 text-bronze"
            : "border-gold/60 bg-panel text-gold group-hover:border-gold group-hover:shadow-[0_0_26px_-2px_var(--color-gold)]"
        }`}
      >
        {frontier && (
          <span
            aria-hidden
            className="absolute -inset-1 rounded-full bg-bronze/15 blur-md"
          />
        )}
        <Icon className="h-5 w-5" />
      </span>
      <span
        className={`whitespace-nowrap rounded bg-bg/70 px-2 py-0.5 font-accent text-xs backdrop-blur-sm transition-opacity group-hover:opacity-100 ${
          frontier ? "text-bronze/90 opacity-80" : "text-parchment opacity-90"
        }`}
      >
        {project.location}
      </span>
      {frontier && (
        <span className="rounded bg-bronze/15 px-1.5 font-mono text-[0.55rem] uppercase tracking-wider text-bronze">
          Uncharted
        </span>
      )}
    </button>
  );
}

function MobileRow({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (project: Project) => void;
}) {
  const Icon = iconMap[project.icon] ?? iconMap.compass;
  const frontier = project.status === "in-progress";
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      className="card-codex flex w-full items-center gap-3 rounded-xl border border-border bg-panel/50 p-3 text-left"
    >
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border ${
          frontier
            ? "border-bronze/50 text-bronze"
            : "border-gold/40 bg-gold/10 text-gold"
        }`}
      >
        <Icon className="h-5 w-5" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="font-display block text-sm font-semibold text-fg">
          {project.name}
        </span>
        <span className="font-accent block text-xs text-gold/70">
          {project.location}
        </span>
      </span>
      <span
        className={`shrink-0 font-mono text-[0.6rem] uppercase tracking-wider ${
          frontier ? "text-bronze" : "text-glow"
        }`}
      >
        {statusLabel[project.status]}
      </span>
    </button>
  );
}

function Legend() {
  return (
    <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-muted">
      <span className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full border-2 border-gold/60 bg-panel" />
        Shipped
      </span>
      <span className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full border-2 border-bronze/50 bg-bg" />
        In progress (uncharted)
      </span>
      <span className="text-bronze">Open a location to read its scroll.</span>
    </div>
  );
}

export default function ProjectMap() {
  const { openProject } = useProjectModal();
  return (
    <Section
      id="world-map"
      index="03"
      title="The Realm of Systems"
      kicker="Each project, a place"
    >
      <Reveal>
        <div className="hidden md:block">
          <div className="map-surface relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.16]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, color-mix(in oklab, var(--color-gold) 26%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--color-gold) 26%, transparent) 1px, transparent 1px)",
                backgroundSize: "64px 64px",
                maskImage:
                  "radial-gradient(120% 100% at 50% 50%, #000 55%, transparent 92%)",
                WebkitMaskImage:
                  "radial-gradient(120% 100% at 50% 50%, #000 55%, transparent 92%)",
              }}
            />
            <CompassIcon className="absolute right-6 top-6 h-12 w-12 text-gold/25" />

            {regionLabels.map((region) => (
              <span
                key={region.d}
                aria-hidden
                style={{ left: `${region.x}%`, top: `${region.y}%` }}
                className="font-accent pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 text-xs uppercase tracking-[0.3em] text-gold/15"
              >
                {districtLabel[region.d]}
              </span>
            ))}

            {projects.map((project) => (
              <Marker key={project.id} project={project} onOpen={openProject} />
            ))}
          </div>
          <Legend />
        </div>
      </Reveal>

      <div className="space-y-7 md:hidden">
        {districtOrder.map((district) => {
          const items = projects.filter((p) => p.district === district);
          if (items.length === 0) return null;
          return (
            <Reveal key={district}>
              <div>
                <h3 className="font-accent text-sm uppercase tracking-[0.2em] text-gold/70">
                  {districtLabel[district]}
                </h3>
                <ul className="mt-3 space-y-2">
                  {items.map((project) => (
                    <li key={project.id}>
                      <MobileRow project={project} onOpen={openProject} />
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
        <Legend />
      </div>
    </Section>
  );
}
