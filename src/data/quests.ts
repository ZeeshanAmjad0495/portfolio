export type Quest = {
  title: string;
  detail: string;
  state: "active" | "next";
};

export const quests: Quest[] = [
  {
    title: "Deepen the agentic SDLC/STLC work",
    detail:
      "Push ForgeLoop further: better planning, sharper QA gates, and project memory that holds up over time.",
    state: "active",
  },
  {
    title: "Mature the automation framework",
    detail:
      "Grow Sentinel's driver coverage and its failure-analysis layer until it earns a team's trust.",
    state: "active",
  },
  {
    title: "Turn builds into products",
    detail:
      "Take the multi-tenant SaaS work from working software toward something sellable.",
    state: "active",
  },
  {
    title: "Run more of the stack locally",
    detail:
      "Keep exploring local-first AI so agent workflows do not depend on expensive cloud inference.",
    state: "next",
  },
  {
    title: "Ship scraping and reporting tools",
    detail:
      "Harden the extraction pipelines into reliable, production-grade reporting products.",
    state: "next",
  },
  {
    title: "Grow toward architecture",
    detail:
      "Go deeper on backend and system design, and move toward technical architecture work.",
    state: "next",
  },
];
