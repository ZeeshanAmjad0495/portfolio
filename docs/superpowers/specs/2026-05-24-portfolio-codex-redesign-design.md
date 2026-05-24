# Portfolio Codex Redesign — Design Spec

Date: 2026-05-24
Status: Approved (pending optional redline)
Owner: Zeeshan Amjad

## 1. Goal & positioning

Rework the existing single-page Next.js portfolio from its current dark/neon look into an
**elegant illuminated-codex / RPG-world-map** experience, with richer, accurate content and
new features. Salesforce is removed entirely.

Positioning honors the evidence: a **quality engineer who builds production-grade systems**.
Professionally a QA Automation Engineer / SDET (Arbisoft, 4+ yrs); in independent work, a
builder of multi-tenant SaaS platforms and an AI-assisted systems architect.

- Hero title: **Automation Engineer · Systems Builder · AI-Assisted Architect**
- Hero subtitle (humanized from brief): automation frameworks, multi-tenant backends,
  AI-assisted workflows, and quality platforms — practical engineering with system-level thinking.
- One honest bridging line separating professional QA role from independent builds.

## 2. Resolved decisions

- Theme intensity: **Elegant illuminated codex** (mature, not gamey).
- World map: **Cartographic canvas + markers**, with mobile vertical-list fallback.
- Animations: **Keep lightweight CSS + IntersectionObserver** (extend existing `Reveal`). **No Framer Motion.**
- Scope/credibility: **All projects shown with explicit status badges.** Shipped projects are solid
  map markers; in-progress projects are dimmer "fog-of-war / Uncharted" markers.
- Scout's Route (automated scraping & reporting) **folded into Sentinel** (it is Sentinel e2e), not a separate node.
- Contact email: **zeeshan04956@gmail.com** (confirmed; account email is unrelated).
- Experience claim: **4+ years** (matches resume; brief's "5" not used).
- Arbisoft client names (edX, Xiangqi, LitmusTest, Zuub) **anonymized to categories**; Arbisoft kept as employer.

## 3. Information architecture (single page, in order)

Hero → About → Skills/Arsenal → **Project World Map** → Featured Projects → How I Use AI →
Engineering Philosophy → Quest Log → Experience (anonymized) → Credentials → Resume → Contact → Footer.

Nav anchors: About, Arsenal, World Map, Projects, AI, Experience, Contact.

## 4. Project roster — content source of truth

Each project card/modal exposes: name · map location · status · problem · what it does · stack · what it demonstrates.

### Shipped

**ForgeLoop — The Forge of Loops — `Flagship · Active`**
- Problem: AI coding agents generate code blindly, without supervision, gates, or evidence.
- Does: Project-aware, human-supervised agentic SDLC/STLC control plane — requirements intake,
  ticket generation, planning, implementation workflows, QA gates, CI feedback, testing evidence,
  audit artifacts, long-term project memory. Deterministic QA checks + human approval gates.
- Stack: Claude / Claude Code, OpenAI/ChatGPT, agentic workflows, deterministic gates, evidence trails.
- Demonstrates: AI orchestration under human control; quality-gated, evidence-based delivery.

**Sentinel — The Sentinel Watchtower — `Complete`**
- Problem: "AI testing" tools guess selectors and self-heal silently; teams stop trusting them. Suites rot.
- Does: Tool/platform-agnostic automation framework. Write flows once in domain language; run unchanged
  on web (Playwright) and mobile (Appium) via shared core contracts. Emits typed telemetry per action;
  an AI layer classifies each failure (real bug / infra flake / selector drift), explains runs in plain
  language, and proposes locator fixes as reviewable diffs/PRs (never silent). Runtime agent can drive
  from a natural-language goal and promote the path into a vetted flow. Includes automated scraping &
  reporting via its e2e examples.
- Stack: TypeScript (strict), npm-workspaces monorepo (core / driver-web-playwright / driver-mobile-appium /
  locator / reporting / ai / cli), Playwright, Appium, pluggable LLM provider, JSON-first reporting
  (HTML/JUnit/Slack), ESLint+Prettier+Husky+commitlint.
- Demonstrates: contract-driven architecture, resilient locators, telemetry-grounded AI, COM+FPM.

**Dentaxis — The Clinic of Precision — `Released v1.4`**
- Problem: clinics need full practice management without cloud dependence.
- Does: Self-hosted dental PMS (Novadontics parity), on-prem LAN-mode by default, cloud-ready.
  31 backend modules: patients, scheduling, charting/perio/endo, clinical notes (sign-lock),
  treatment plans (CDT codes), surgical implant/bone-graft logbooks, lab cases, billing/insurance/claims,
  payroll, engagement (SMS/email/WhatsApp), patient portal, kiosk check-in, reports, audit, opt-in AI assist.
- Stack: Python 3.12 + FastAPI, SQLAlchemy 2 async + Alembic, PostgreSQL/SQLite (cross-dialect CI),
  React 18 + Vite + TanStack Query + Tailwind, Docker Compose + Caddy (auto-TLS), DigitalOcean.
  RBAC (8 system roles + custom), audit-in-transaction, pluggable AiAdapter (DeepSeek/Mock).
- Demonstrates: large modular system, multi-tenancy, cross-dialect safety, 254 pytest + 103 Playwright e2e.

**WhatsApp Order-to-Cash Desk — The Counting House — `Complete`**
- Problem: WhatsApp-first traders take orders in chat, get paid by transfer/JazzCash/Easypaisa screenshots,
  and track who owes money in a notebook.
- Does: Full order-to-cash loop — customers/products (E.164 normalization, credit limits), order board with
  status allowlist, payment-proof upload (magic-byte sniff, SHA-256 dedup) with verify + concurrency-safe
  allocation, outstanding ledger with aging buckets, dispatch, follow-up tasks, 7 reports, audit log.
  Optional WhatsApp Cloud API, Claude Vision OCR (advisory), bank-statement import.
- Stack: Node 22 + TypeScript (strict), Fastify 5 + Zod, Prisma 6 + PostgreSQL 16 (Decimal money),
  argon2id + JWT cookie, Next.js 15 + React 19 + Tailwind v4 web, Vitest + Supertest + Testcontainers +
  Playwright (197 API + 16 web + 2 e2e), multi-stage Docker, GitHub Actions, Terraform (Cloud Run/SQL/GCS).
- Demonstrates: strict layering (routes→service→repository→Prisma), session-derived tenant isolation, money correctness.

**COD Control Desk — The Toll Gate — `Complete`**
- Problem: Pakistani COD e-commerce suffers high RTO (returns) and messy courier payout reconciliation.
- Does: (1) COD order verification — risk-scores orders, routes risky ones to a human call/SMS queue;
  (2) RTO control — deterministic risk engine flags likely-to-bounce orders; (3) payout reconciliation —
  ingests courier payout feeds, flags discrepancies (short-paid / missing / duplicate / unexplained / delayed).
  Inputs are three CSV/XLSX feeds; imports are previewable, committable, rollback-able, idempotent by content hash.
  API-only (Swagger).
- Stack: Node 22 + TypeScript (strict), NestJS 11, Prisma 6 + PostgreSQL 16, JWT access+refresh (tokenVersion),
  class-validator DTOs, pino (PII-redacted), Jest + Supertest, Docker, GitHub Actions, Fly.io.
  Postgres Row-Level Security (non-bypass role + AsyncLocalStorage org context), Decimal money,
  deterministic 10-signal risk engine (no LLM in decisions), audit-in-transaction, HMAC webhooks (SSRF guard + idempotency).
- Demonstrates: defense-in-depth multi-tenancy, deterministic risk, transactional audit, secure webhooks.

**Recovery Desk — The Salvage Stores — `Complete`**
- Problem: consumer brands lose money to stock expiry and retail stockouts, and can't quantify either.
- Does: Turns the weekly expiry/stockout Excel ritual into a deterministic 30/60/90-day risk dashboard,
  a costed stockout queue from field visits, and a recovery-action queue with approval gates — then
  measures recovered value ("we recovered Rs X"). CSV/XLSX importers (products, batches, snapshots,
  outlets, reps, movements) with in-product column help + sample files. Deliberately narrow (not an ERP).
- Stack: Next.js 15 + React 19, TypeScript 5 strict, PostgreSQL 16 + Prisma 5.22, Auth.js v5 +
  @node-rs/argon2 + TOTP 2FA, Zod, decimal.js (Decimal(18,4)), date-fns (tolerant PK date parser),
  papaparse + @e965/xlsx, @react-pdf/renderer, Pino, Vitest + Playwright, GitHub Actions (4 parallel jobs).
  Per-request CSP nonce, account lockout, soft-delete cascade. 172 unit / 86 integration / 11 e2e green.
- Demonstrates: deterministic financial core, approval workflows with separation-of-duties, import pipelines.

**Munafasah Desk / BidReady KSA — The Guild Board — `Built`**
- Problem: companies bidding on Saudi government/enterprise tenders must manage discovery → fit →
  compliance evidence → submission, while staying PDPL-compliant.
- Does: Two services — an Arabic-first admin portal (tenders & clients, versioned compliance matrices,
  document vault with sensitivity/expiry, LLM sector classifier, full PDPL surface: consent ledger,
  data-subject requests, retention with separation-of-duties, DPO registry, residency gate, 72h notification;
  billing with Stripe) and a separate ingestion pipeline (scrapes Saudi tender portals → dedup → LLM enrich
  (Zod-validated) → quality gate → sync curated tenders).
- Stack: NestJS 10 + Prisma 5 + PostgreSQL 16, Next.js 15 + React 19 (RTL, bilingual), MinIO/S3, Redis + BullMQ,
  DeepSeek (ILlmProvider abstraction, budget guard) + Ollama fallback. Ingestion: Fastify + Pino, undici +
  Cheerio + Playwright, pdf-parse, Zod. Jest 326 (admin) + Vitest 18 (web) + Jest 52 (ingestion).
  Local-first / cloud-ready behind provider interfaces.
- Demonstrates: regulated-domain modeling (PDPL), two-service architecture, scraping + LLM enrichment pipeline.

### In progress — fog-of-war markers (`In Progress`)

- **Observatory of Markets** — Business Relationship Intelligence platform (companies, suppliers,
  competitors, ownership, risk, market signals). In progress.
- **The Model Sanctum** — local & low-cost LLM / personal agent experiments (MLX, Ollama, Open WebUI,
  Qwen, OpenAI-compatible providers, context optimization, evaluation loops). In progress.
- **The Registry Ruins** — public business-registry scraper (Monaco-style): pagination, resume-after-crash,
  SQLite storage, dedup, Excel export, polite throttling. In progress.

## 5. World map behavior

- Stylized parchment map canvas; project markers positioned in loose "districts"
  (Trade quarter: the three Desks; Quality bastion: Sentinel + ForgeLoop; plus Clinic, Guild Board).
- Shipped = solid glowing markers. In-progress = dim, fog-shrouded markers labeled "Uncharted · In Progress."
- Hover/focus glows the location label. Click/Enter opens the **ProjectModal** scroll.
- Mobile (`< md`): render a vertical "journey" list of the same nodes (full-width tap targets), not a tiny map.
- Accessibility: markers are real `<button>`s, focusable, keyboard-activatable; modal traps focus, Esc closes,
  `aria-modal`, labelled by project name. Respect `prefers-reduced-motion`.

## 6. Skills / Arsenal

RPG "artifacts/disciplines" framing, backed by real project usage (no aspirational-only entries). Drop Salesforce.
Groups:
- **Automation & Quality** — Playwright, Cypress, Puppeteer, Selenium, Appium, Jest, Vitest, Supertest,
  Testcontainers, E2E/regression/integration/accessibility, COM·FPM·POM, fixtures, flaky-test investigation, test pyramids.
- **Backend & Systems** — TypeScript, Node, Python, NestJS, Fastify, FastAPI, Prisma, SQLAlchemy, PostgreSQL,
  SQLite, Redis, BullMQ, Zod, class-validator, REST design, multi-tenancy (Postgres RLS), repository pattern, local-first.
- **API & Backend Testing** — Postman, REST validation, contract checks, integration testing, test-data management.
- **Performance & Reliability** — k6, Locust, Grafana k6, load testing, root-cause analysis, test stability.
- **AI-Assisted Engineering** — Claude, Claude Code, OpenAI/ChatGPT, DeepSeek, local LLMs (MLX/Ollama/Open WebUI),
  OpenAI-compatible providers, agentic workflows, AI code review, AI-assisted QA, evaluation loops, context optimization,
  human-supervised agents.
- **DevOps & Quality Gates** — GitHub Actions, GoCD, Docker (multi-stage) + Compose, CI/CD, Fly.io, Cloud Run/Terraform,
  ESLint, Prettier, Husky, lint-staged, commitlint, coverage, security (helmet, HMAC, rate-limiting, RLS, CSP).
- **Data Extraction** — Playwright/Puppeteer scraping, Cheerio, Python pipelines, pagination, resume-after-crash,
  SHA-256 dedup, SQLite storage, Excel/CSV export, data cleaning, anti-fragile scrapers.

## 7. Visual system — elegant illuminated codex

- Palette (Tailwind v4 `@theme` tokens): bg `#0E0D0B`, panel `#1A1712`, parchment `#E8D8B0`, gold `#C9A646`,
  bronze `#8A6334`, emerald `#1F6F5B`, indigo `#2D2A6E`, crimson `#7A2E2E`, text `#F4EAD2`, muted `#B9AA8B`, glow `#8EE6D1`.
- Fonts via `next/font/google`: Cinzel (headings), Inter (body), JetBrains Mono (labels), IM Fell English SC (accents).
- Textures: parchment via CSS gradients + subtle inline SVG grain (no heavy raster images — keep fast). Gold hairline rules.
  Wax-seal motif (SVG/CSS) for About + Contact. Cartographic framing for the map.
- Motion: CSS reveals via `Reveal` + IntersectionObserver, with manuscript "unfurl / page-open" variants.
  `prefers-reduced-motion` disables transforms.

## 8. Component architecture

Reuse data-driven pattern, App Router, Tailwind v4 `@theme`, existing `Reveal`/`Section`.
- New: `ProjectMap`, `ProjectModal`, `AISystems`, `QuestLog`, `Philosophy`, `Resume`.
- Reskin: `Layout` (fonts/metadata/themeColor), `Background`, `Nav`, `Hero`, `About`, `Skills` (→ Arsenal),
  `FeaturedProjects` (from `Projects`, + status badges), `Experience` (anonymized), `Credentials`, `Contact` (sealed scroll), `Footer`, `Icons`.
- `page.tsx` composition updated to the new section order.

## 9. Data model / files

Split `src/data/portfolio.ts` into:
- `src/data/projects.ts` — `Project` type (name, location, status: `'flagship'|'complete'|'built'|'released'|'in-progress'`,
  problem, does, stack[], demonstrates, tags[], featured?, mapPosition {x%,y%}, district), plus `projects[]`.
- `src/data/skills.ts` — arsenal groups (title, artifact label, skills[]).
- `src/data/quests.ts` — current-direction quest items.
- Keep `src/data/portfolio.ts` for `profile`, `about`, `experience` (anonymized), `credentials`, `education`, `aiPractices`, `navLinks`.

## 10. Resume

Convert `~/Downloads/Zeeshan_Amjad_QA_Automation_Engineer_Resume_ATS_Revised_v3.docx` →
`public/Zeeshan-Amjad-Resume.pdf`. Verify the PDF opens and renders cleanly; if fidelity is poor, regenerate a
clean typeset PDF from the resume content. Wire the **Download Resume** button (Hero CTA + Resume section) to `/Zeeshan-Amjad-Resume.pdf`.

## 11. Removed (Salesforce)

Delete the Salesforce CSV/Metadata Validation Tool and Salesforce History Tracking projects, the Salesforce skill group,
and all Salesforce mentions in bio/positioning. No map location, no skill artifact, no copy references.

## 12. Writing & anonymization

- All user-facing copy passes through the **humanizer** skill; fix AI tells (rule-of-three, "not X but Y" negative
  parallelism, inflated symbolism, em-dash overuse).
- Arbisoft client names replaced with categories: MOOC/online-learning platform; online multiplayer gaming platform;
  online assessment platform; US dental-insurance data-extraction product. Keep metrics (50+ APIs, ~10% regression-time
  reduction, 50+ flaky tests stabilized, ~30 edX cases → "a MOOC platform", etc.) but tie them to categories, not names.

## 13. SEO / metadata / accessibility

- Update `metadata` (title/description/keywords/openGraph) to the new positioning; drop QA-only framing and ForgeLoop-only keyword bias; remove Salesforce.
- `viewport.themeColor` → `#0E0D0B`.
- Semantic landmarks, labelled sections, accessible buttons/links, color-contrast on parchment, focus styles, reduced-motion.

## 14. Non-goals / risks

- Non-goals: backend/CMS, blog, i18n, Framer Motion, real interactive game engine, live data from the SaaS projects.
- Risks: map readability with ~10 nodes (mitigate with districts + fog-of-war + mobile list); parchment contrast for
  accessibility (verify against text tokens); keeping bundle light without Framer Motion (use CSS); resume PDF conversion fidelity (verify, fallback to regenerate).
