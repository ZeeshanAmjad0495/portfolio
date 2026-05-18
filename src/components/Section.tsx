import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionProps = {
  id: string;
  index: string;
  title: string;
  kicker?: string;
  children: ReactNode;
};

export default function Section({
  id,
  index,
  title,
  kicker,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-20 sm:py-28"
    >
      <Reveal>
        <div className="mb-12 flex flex-col gap-3">
          <span className="font-mono text-sm text-accent">
            {index} <span className="text-muted">/</span> {kicker ?? title}
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            {title}
          </h2>
          <div className="h-px w-full max-w-xs bg-gradient-to-r from-accent/60 to-transparent" />
        </div>
      </Reveal>
      {children}
    </section>
  );
}
