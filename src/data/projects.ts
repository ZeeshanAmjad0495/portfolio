export type ProjectStatus =
  | "flagship"
  | "complete"
  | "released"
  | "built"
  | "in-progress";

export type District = "quality" | "trade" | "clinic" | "guild" | "frontier";

export type Project = {
  id: string;
  name: string;
  location: string;
  icon: string;
  status: ProjectStatus;
  district: District;
  problem: string;
  does: string;
  stack: string[];
  demonstrates: string;
  tags: string[];
  featured: boolean;
  map: { x: number; y: number };
};

export const statusLabel: Record<ProjectStatus, string> = {
  flagship: "Flagship",
  complete: "Complete",
  released: "Released",
  built: "Built",
  "in-progress": "In Progress",
};

export const districtLabel: Record<District, string> = {
  quality: "The Quality Bastion",
  trade: "The Trade Quarter",
  clinic: "The Healer's Ward",
  guild: "The Guild Reach",
  frontier: "The Uncharted Frontier",
};

export const projects: Project[] = [
  {
    id: "forgeloop",
    name: "ForgeLoop",
    location: "The Forge of Loops",
    icon: "forge",
    status: "flagship",
    district: "quality",
    problem:
      "AI agents will write code all day. Left unsupervised, they cut corners and leave no record of why a change was made.",
    does: "A project-aware control plane that runs the loop from requirement to merge. It drafts tickets and plans, carries out implementation under project rules, holds every change behind deterministic QA checks and a human approval gate, and keeps the evidence: test runs, reviews, audit artifacts, and a memory of earlier decisions.",
    stack: [
      "Claude / Claude Code",
      "OpenAI / ChatGPT",
      "Agentic workflows",
      "Deterministic QA gates",
      "Audit + evidence trails",
    ],
    demonstrates:
      "Putting AI agents to work without handing them the final say.",
    tags: ["AI agents", "SDLC/STLC", "Quality gates"],
    featured: true,
    map: { x: 20, y: 27 },
  },
  {
    id: "sentinel",
    name: "Sentinel",
    location: "The Sentinel Watchtower",
    icon: "watchtower",
    status: "complete",
    district: "quality",
    problem:
      "Most AI testing tools guess at selectors and quietly heal themselves, so teams stop trusting them and the suite slowly rots.",
    does: "A tool-agnostic automation framework. You write a flow once in the language of your product and it runs unchanged on web (Playwright) and mobile (Appium) through shared core contracts. Every step emits typed telemetry, and an AI layer reads that signal to tell you whether a failure is a real bug, an infra flake, or selector drift, then proposes locator fixes as diffs you review instead of changing your tests behind your back. Its end-to-end examples also cover scraping and reporting.",
    stack: [
      "TypeScript",
      "Playwright",
      "Appium",
      "npm workspaces monorepo",
      "Pluggable LLM provider",
    ],
    demonstrates:
      "Contract-driven architecture and telemetry the AI can actually reason over.",
    tags: ["Framework design", "Web + mobile", "AI failure analysis"],
    featured: true,
    map: { x: 41, y: 17 },
  },
  {
    id: "dentaxis",
    name: "Dentaxis",
    location: "The Clinic of Precision",
    icon: "tooth",
    status: "released",
    district: "clinic",
    problem:
      "Dental clinics want full practice management without depending on someone else's cloud.",
    does: "A self-hosted dental practice management system that runs on a clinic's own network by default and is ready for the cloud when needed. Thirty-one modules cover patients, scheduling, charting, clinical notes, treatment plans, surgical logbooks, billing and insurance, payroll, messaging, a patient portal, and an opt-in AI assistant that stays out of clinical decisions.",
    stack: [
      "Python · FastAPI",
      "SQLAlchemy · PostgreSQL / SQLite",
      "React · Vite",
      "Docker · Caddy",
      "DeepSeek (opt-in)",
    ],
    demonstrates:
      "A large modular system with multi-tenancy, audit trails, and 254 API tests plus 103 end-to-end specs that run on two databases.",
    tags: ["Practice management", "Local-first", "31 modules"],
    featured: true,
    map: { x: 30, y: 51 },
  },
  {
    id: "whatsapp-otc",
    name: "WhatsApp Order-to-Cash Desk",
    location: "The Counting House",
    icon: "coins",
    status: "complete",
    district: "trade",
    problem:
      "Traders who sell over WhatsApp take orders in chat, get paid by bank or wallet screenshots, and track who still owes them in a paper notebook.",
    does: "A multi-tenant SaaS that runs the whole order-to-cash loop. It keeps customers and products, an order board with a strict status flow, payment-proof uploads that staff verify and allocate against open orders, an outstanding ledger with aging buckets, dispatch tracking, follow-up tasks, and reports. WhatsApp Cloud API, screenshot OCR, and bank-statement import are there but switched off by default.",
    stack: [
      "Node · Fastify · Zod",
      "Prisma · PostgreSQL",
      "Next.js · React",
      "Vitest · Testcontainers · Playwright",
    ],
    demonstrates:
      "Strict routes to service to repository layering, tenant isolation from the session, and money handled as decimals end to end.",
    tags: ["Order-to-cash", "Multi-tenant", "Payments"],
    featured: true,
    map: { x: 15, y: 74 },
  },
  {
    id: "cod-control",
    name: "COD Control Desk",
    location: "The Toll Gate",
    icon: "gate",
    status: "complete",
    district: "trade",
    problem:
      "Pakistani cash-on-delivery commerce bleeds money two ways: parcels that get refused at the door and bounce back, and courier payouts that arrive late and short.",
    does: "A multi-tenant API that scores incoming COD orders and routes the risky ones to a human verification queue, flags likely returns before a brand pays shipping both ways, and reconciles courier payout feeds to surface short payments, missing remittances, and unexplained deductions. It takes three CSV feeds and makes imports previewable and reversible.",
    stack: [
      "Node · NestJS",
      "Prisma · PostgreSQL (Row-Level Security)",
      "JWT · pino",
      "Jest · Supertest · Fly.io",
    ],
    demonstrates:
      "Defense-in-depth multi-tenancy, a deterministic ten-signal risk engine, audit written inside the transaction, and HMAC-verified webhooks.",
    tags: ["COD / RTO", "Risk engine", "Reconciliation"],
    featured: true,
    map: { x: 35, y: 83 },
  },
  {
    id: "recovery-desk",
    name: "Recovery Desk",
    location: "The Salvage Stores",
    icon: "crate",
    status: "complete",
    district: "trade",
    problem:
      "Consumer brands lose money to stock that expires before it sells and to products that go out of stock at the shelf, and nobody can put a number on either loss.",
    does: "A deliberately narrow SaaS that turns the weekly expiry-and-stockout spreadsheet into a 30/60/90-day risk dashboard, a costed stockout queue from field visits, and a recovery-action queue with approval gates. At the end of the week it reports the value actually recovered.",
    stack: [
      "Next.js · React · TypeScript",
      "Prisma · PostgreSQL",
      "Auth.js · TOTP 2FA",
      "decimal.js · @react-pdf/renderer",
    ],
    demonstrates:
      "A deterministic financial core, separation-of-duties approvals, and idempotent import pipelines.",
    tags: ["Expiry + stockout", "Approval workflows", "Reporting"],
    featured: true,
    map: { x: 53, y: 71 },
  },
  {
    id: "munafasah",
    name: "Munafasah Desk · BidReady KSA",
    location: "The Guild Board",
    icon: "board",
    status: "built",
    district: "guild",
    problem:
      "Companies bidding on Saudi government and enterprise tenders have to manage discovery, fit, compliance evidence, and submission, all while staying inside the kingdom's data-protection law.",
    does: "Two services working together. An Arabic-first admin portal handles tenders and clients, versioned compliance matrices, a document vault, an LLM sector classifier, and the full PDPL surface: consent ledger, data-subject requests, retention with separation of duties, and a residency gate. A separate ingestion pipeline scrapes tender portals, deduplicates, enriches with an LLM, and syncs curated tenders into the portal.",
    stack: [
      "NestJS · Prisma · PostgreSQL",
      "Next.js (RTL, bilingual)",
      "MinIO · Redis · BullMQ",
      "DeepSeek · Ollama fallback",
    ],
    demonstrates:
      "Modeling a regulated domain, a two-service architecture, and a scraping plus enrichment pipeline behind provider interfaces.",
    tags: ["Tenders", "PDPL compliance", "Ingestion pipeline"],
    featured: true,
    map: { x: 71, y: 39 },
  },
  {
    id: "observatory",
    name: "Relationship Intelligence",
    location: "The Observatory of Markets",
    icon: "scope",
    status: "in-progress",
    district: "frontier",
    problem:
      "Understanding a market means seeing how companies connect: suppliers, competitors, owners, and the risk that travels along those edges.",
    does: "A platform for mapping business ecosystems: company profiles, relationship graphs, supplier and competitor networks, ownership structures, and risk signals, with search, dashboards, and exportable intelligence records.",
    stack: ["Graph data model", "Entity resolution", "Ingestion pipelines"],
    demonstrates: "Designing for entity resolution and graph-shaped data.",
    tags: ["Market intelligence", "Graphs", "Research"],
    featured: false,
    map: { x: 79, y: 19 },
  },
  {
    id: "model-sanctum",
    name: "Local LLM & Agent Lab",
    location: "The Model Sanctum",
    icon: "flask",
    status: "in-progress",
    district: "frontier",
    problem:
      "Agentic workflows get expensive fast when every token runs through a frontier model in the cloud.",
    does: "Ongoing experiments with local and low-cost models for agent work: MLX on Apple Silicon, Ollama and Open WebUI, Qwen-class models, and OpenAI-compatible providers, with attention to context budgets and evaluation loops.",
    stack: ["MLX", "Ollama · Open WebUI", "OpenAI-compatible APIs"],
    demonstrates: "Building agent systems that do not assume a blank check.",
    tags: ["Local LLMs", "Cost-aware AI", "Research"],
    featured: false,
    map: { x: 87, y: 55 },
  },
  {
    id: "registry-ruins",
    name: "Public Registry Scraper",
    location: "The Registry Ruins",
    icon: "ruins",
    status: "in-progress",
    district: "frontier",
    problem:
      "Public business registries hold useful data behind paginated pages that time out, change layout, and punish anything that scrapes too fast.",
    does: "A scraping pipeline that walks paginated public registries, survives crashes and resumes where it stopped, stores records in SQLite, deduplicates them, and exports clean Excel, with polite throttling throughout.",
    stack: ["Playwright", "SQLite", "Excel export"],
    demonstrates: "Scrapers that fail gracefully and pick up where they left off.",
    tags: ["Scraping", "Resume-after-crash", "Research"],
    featured: false,
    map: { x: 64, y: 86 },
  },
];
