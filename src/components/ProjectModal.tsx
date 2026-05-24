"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { statusLabel, type Project } from "@/data/projects";
import { iconMap } from "./Icons";

function FieldLabel({ children }: { children: ReactNode }) {
  return (
    <div className="font-mono text-xs uppercase tracking-[0.2em] text-bronze">
      {children}
    </div>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <p className="mt-2 leading-7 text-parchment/90">{children}</p>
    </div>
  );
}

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 0);

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;
      const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKey);
      previouslyFocused?.focus?.();
    };
  }, [project, onClose]);

  if (!project) return null;
  const Icon = iconMap[project.icon] ?? iconMap.compass;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" aria-hidden />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(event) => event.stopPropagation()}
        className="parchment animate-unfurl relative max-h-[86vh] w-full max-w-2xl overflow-y-auto rounded-2xl p-7 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)] ring-1 ring-gold/30 sm:p-9"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-gold/50 hover:text-gold"
        >
          ✕
        </button>

        <div className="flex items-center gap-3 pr-10">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
            <Icon className="h-6 w-6" />
          </span>
          <div>
            <div className="font-accent text-sm tracking-wide text-gold/80">
              {project.location}
            </div>
            <h3
              id="project-modal-title"
              className="font-display text-2xl font-semibold text-fg"
            >
              {project.name}
            </h3>
          </div>
        </div>

        <span className="mt-4 inline-block rounded-full border border-gold/30 bg-gold/10 px-3 py-1 font-mono text-xs uppercase tracking-wider text-gold">
          {statusLabel[project.status]}
        </span>

        <div className="gold-rule my-6" />

        <div className="space-y-5">
          <Field label="The problem">{project.problem}</Field>
          <Field label="What it does">{project.does}</Field>
          <div>
            <FieldLabel>Stack</FieldLabel>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-border bg-bg-soft/60 px-2.5 py-1 font-mono text-xs text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <Field label="What it shows">{project.demonstrates}</Field>
        </div>
      </div>
    </div>
  );
}
