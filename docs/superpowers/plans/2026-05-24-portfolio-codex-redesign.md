# Portfolio Codex Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the existing Next.js portfolio as an elegant illuminated-codex / RPG-world-map experience with accurate content, Salesforce removed, and a working resume download.

**Architecture:** Single-page App Router site. Server components compose the page; a few client components own interactivity (Nav scroll state, Reveal observer, the project map + modal). Data is centralized in `src/data/*`. Styling is Tailwind v4 `@theme` tokens + a small set of CSS utilities. Animations are CSS + IntersectionObserver (no Framer Motion).

**Tech Stack:** Next.js 16, React 19 (React Compiler on), TypeScript, Tailwind v4, `next/font/google` (Cinzel, Inter, JetBrains Mono, IM Fell English SC). No new runtime dependencies.

**Verification model (read this):** This is a visual redesign, not logic-heavy code, and the repo has no test runner. Per-task gates are: `npm run build` (compiles + typechecks), `npm run lint`, targeted `grep` assertions for content rules, and browser verification (screenshots, console, keyboard a11y) in the final phase. Real tests are added only where logic exists (data integrity, resume presence). Pixel-level styling is iterated visually during execution. Source of truth for all project copy is the spec at `docs/superpowers/specs/2026-05-24-portfolio-codex-redesign-design.md` §4; do not invent project facts.

**Commits:** Commit at the end of each phase, but only after the user gives the go-ahead (repo convention is "commit when asked"). Suggested messages are included per phase.

**Writing:** Every user-facing string must be run through the `humanizer` skill before finalizing (fix rule-of-three, "not X but Y", inflated symbolism, em-dash overuse). Phase 6 includes a dedicated humanizer pass.

---

## File map

**Rewrite**
- `src/app/globals.css` — codex theme tokens, fonts wiring, parchment/map textures, reveal variants, map/seal utilities.
- `src/components/Background.tsx` — parchment + faint cartography atmosphere (replaces neon grid).
- `src/components/Hero.tsx` — cinematic codex hero (map backdrop, compass/rune, title, subtitle, CTAs).
- `src/components/About.tsx` — manuscript page, wax seal, decorative border, QA↔builder bridging line.
- `src/components/Contact.tsx` — sealed-scroll / stamped-letter; email, GitHub, LinkedIn, Upwork (placeholder), location, availability.

**Create**
- `src/data/projects.ts` — `Project` type + `projects[]` (content from spec §4).
- `src/data/skills.ts` — arsenal groups (spec §6).
- `src/data/quests.ts` — quest items (current direction).
- `src/components/ProjectModalProvider.tsx` — client context: `openProject(id)` / `closeProject()`, renders `ProjectModal`.
- `src/components/ProjectModal.tsx` — project "scroll" dialog (focus trap, Esc, `aria-modal`).
- `src/components/ProjectCard.tsx` — featured card with status badge + "View Details".
- `src/components/FeaturedProjects.tsx` — grid of `ProjectCard` (replaces `Projects.tsx`).
- `src/components/ProjectMap.tsx` — cartographic canvas + markers + districts + fog-of-war; mobile vertical list.
- `src/components/Arsenal.tsx` — skills as artifacts/disciplines (replaces `Skills.tsx`).
- `src/components/AISystems.tsx` — "How I Use AI" cards.
- `src/components/Philosophy.tsx` — Engineering Philosophy panel.
- `src/components/QuestLog.tsx` — current-direction quest list.
- `src/components/Resume.tsx` — summary + Download Resume button.
- `public/Zeeshan-Amjad-Resume.pdf` — resume (Phase 5).

**Modify**
- `src/app/layout.tsx` — fonts, metadata, `themeColor`, body classes.
- `src/app/page.tsx` — new section order; wrap project sections in `ProjectModalProvider`.
- `src/data/portfolio.ts` — `profile`, `about`, `experience` (anonymized), `credentials`, `education`, `aiPractices`, `navLinks`; remove Salesforce + old `projects`/`skillGroups`/`domains`.
- `src/components/Nav.tsx` — codex nav + brand mark + new anchors.
- `src/components/Section.tsx` — codex heading (gold rule, eyebrow).
- `src/components/Icons.tsx` — add codex icons (compass, seal, forge, watchtower, scroll, anvil, grimoire, orb, shield, blade, cross, gate, scales, scope, sparkle).
- `src/components/Experience.tsx` — anonymized categories, codex styling.
- `src/components/Credentials.tsx` — codex styling.
- `src/components/Footer.tsx` — codex styling.
- `src/app/icon.svg` — optional: compass/rune mark.

**Delete**
- `src/components/Skills.tsx` (→ `Arsenal.tsx`), `src/components/Projects.tsx` (→ `FeaturedProjects.tsx`).

---

## Phase 0 — Foundations (theme, fonts, layout, primitives)

### Task 0.1: Theme tokens + utilities in `globals.css`

**Files:** Rewrite `src/app/globals.css`

- [ ] **Step 1:** Replace the file with codex tokens + utilities.

```css
@import "tailwindcss";

@theme inline {
  --color-bg: #0E0D0B;
  --color-bg-soft: #131009;
  --color-panel: #1A1712;
  --color-border: #2a2419;
  --color-parchment: #E8D8B0;
  --color-gold: #C9A646;
  --color-bronze: #8A6334;
  --color-emerald: #1F6F5B;
  --color-indigo: #2D2A6E;
  --color-crimson: #7A2E2E;
  --color-fg: #F4EAD2;
  --color-muted: #B9AA8B;
  --color-glow: #8EE6D1;

  --font-display: var(--font-cinzel);
  --font-sans: var(--font-inter);
  --font-mono: var(--font-jetbrains);
  --font-accent: var(--font-imfell);

  --animate-unfurl: unfurl 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
  --animate-flicker: flicker 5s ease-in-out infinite;
}

@keyframes unfurl { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
@keyframes flicker { 0%,100% { opacity: 1; } 50% { opacity: .82; } }

html { scroll-behavior: smooth; scroll-padding-top: 5rem; }
body {
  background: var(--color-bg);
  color: var(--color-fg);
  font-family: var(--font-sans), system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
}
::selection { background: color-mix(in oklab, var(--color-gold) 38%, transparent); color: #1a1712; }

/* Manuscript reveal */
.reveal { opacity: 0; transform: translateY(22px); transition: opacity .8s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1); will-change: opacity, transform; }
.reveal.is-visible { opacity: 1; transform: none; }

/* Parchment surface */
.parchment {
  background:
    radial-gradient(120% 120% at 0% 0%, color-mix(in oklab, var(--color-parchment) 8%, transparent), transparent 60%),
    linear-gradient(180deg, color-mix(in oklab, var(--color-panel) 92%, var(--color-gold) 4%), var(--color-panel));
  border: 1px solid color-mix(in oklab, var(--color-gold) 22%, var(--color-border));
}
.gold-rule { height: 1px; background: linear-gradient(90deg, transparent, color-mix(in oklab, var(--color-gold) 70%, transparent), transparent); }
.text-gilt {
  background: linear-gradient(100deg, var(--color-gold), color-mix(in oklab, var(--color-gold) 55%, var(--color-parchment)), var(--color-gold));
  -webkit-background-clip: text; background-clip: text; color: transparent;
}
.card-codex { transition: transform .3s ease, border-color .3s ease, box-shadow .3s ease; }
.card-codex:hover {
  transform: translateY(-4px);
  border-color: color-mix(in oklab, var(--color-gold) 50%, var(--color-border));
  box-shadow: 0 18px 50px -22px color-mix(in oklab, var(--color-gold) 45%, transparent);
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  .reveal { opacity: 1; transform: none; transition: none; }
  .animate-flicker { animation: none !important; }
}
```

- [ ] **Step 2:** Verify build. Run `npm run build`. Expected: compiles (Tailwind picks up tokens). Note: `bg-bg`/`text-fg` referenced in `layout.tsx` still resolve.

### Task 0.2: Fonts + metadata in `layout.tsx`

**Files:** Modify `src/app/layout.tsx`

- [ ] **Step 1:** Replace Geist fonts with the four codex fonts and update metadata.

```tsx
import type { Metadata, Viewport } from "next";
import { Cinzel, Inter, JetBrains_Mono, IM_Fell_English_SC } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/portfolio";

const cinzel = Cinzel({ variable: "--font-cinzel", subsets: ["latin"], weight: ["400","500","600","700"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"] });
const imfell = IM_Fell_English_SC({ variable: "--font-imfell", subsets: ["latin"], weight: "400" });

const description =
  "Zeeshan Amjad — Automation Engineer, systems builder, and AI-assisted architect. Builds automation frameworks, multi-tenant backends, AI-assisted workflows, and quality platforms.";

export const metadata: Metadata = {
  title: { default: `${profile.name} — ${profile.role}`, template: `%s · ${profile.name}` },
  description,
  keywords: ["Automation Engineer","SDET","Systems Builder","AI Engineering","Playwright","TypeScript","NestJS","FastAPI","Multi-tenant SaaS","Zeeshan Amjad","ForgeLoop","Sentinel"],
  authors: [{ name: profile.name, url: profile.github }],
  creator: profile.name,
  openGraph: { title: `${profile.name} — ${profile.role}`, description, type: "website", siteName: `${profile.name} · Portfolio` },
  twitter: { card: "summary_large_image", title: `${profile.name} — ${profile.role}`, description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#0E0D0B", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${inter.variable} ${jetbrains.variable} ${imfell.variable} antialiased`}>
      <body className="min-h-screen bg-bg text-fg">{children}</body>
    </html>
  );
}
```

- [ ] **Step 2:** Run `npm run build`. Expected: PASS (fonts fetched at build). If offline, note the failure and retry when network is available.

### Task 0.3: Background, Section, Reveal, Icons

**Files:** Rewrite `src/components/Background.tsx`; modify `src/components/Section.tsx`, `src/components/Icons.tsx`; keep `Reveal.tsx` (verify it toggles `.is-visible`).

- [ ] **Step 1:** `Background.tsx` — fixed, behind content: layered radial gradients (warm vignette), a faint dotted "longitude/latitude" grid masked to fade, optional grain via inline SVG `feTurbulence` at very low opacity. No neon.
- [ ] **Step 2:** `Section.tsx` — wrapper with `id`, a Cinzel heading, a JetBrains-mono eyebrow label, and a `.gold-rule` under the heading. Keep current props (`id`, `title`, `eyebrow`, `children`).
- [ ] **Step 3:** `Icons.tsx` — add stroke-based SVG icons used across sections: `Compass, WaxSeal, Forge, Watchtower, Scroll, Anvil, Grimoire, Orb, Shield, Blade, Cross, Gate, Scales, Scope, Sparkle, Download, GitHub, LinkedIn, Mail, MapPin`. Keep existing exports used elsewhere.
- [ ] **Step 4:** Confirm `Reveal.tsx` adds `is-visible` on intersect and respects existing behavior (no change needed if so).
- [ ] **Step 5:** Run `npm run build` + `npm run lint`. Expected: PASS.

### Phase 0 commit (on approval)
`feat(theme): codex palette, fonts, background, and section primitives`

---

## Phase 1 — Data layer

### Task 1.1: `Project` type + `projects.ts`

**Files:** Create `src/data/projects.ts`

- [ ] **Step 1:** Define the type and populate from spec §4. Coordinates lay out districts (Trade quarter lower-left, Quality bastion upper-right, etc.).

```ts
export type ProjectStatus = "flagship" | "complete" | "released" | "built" | "in-progress";

export type Project = {
  id: string;
  name: string;
  location: string;        // RPG map name, e.g. "The Forge of Loops"
  status: ProjectStatus;
  district: "quality" | "trade" | "clinic" | "guild" | "frontier";
  problem: string;
  does: string;
  stack: string[];
  demonstrates: string;
  tags: string[];
  featured?: boolean;
  map: { x: number; y: number }; // percentage coords on the map canvas
};

export const projects: Project[] = [ /* 7 shipped + 3 frontier, content per spec §4 */ ];

export const statusLabel: Record<ProjectStatus, string> = {
  flagship: "Flagship", complete: "Complete", released: "Released", built: "Built", "in-progress": "In Progress",
};
```

- [ ] **Step 2:** Fill all 10 entries (ForgeLoop, Sentinel, Dentaxis, WhatsApp Order-to-Cash Desk, COD Control Desk, Recovery Desk, Munafasah Desk; + frontier: Observatory of Markets, The Model Sanctum, The Registry Ruins) using exact problem/does/stack/demonstrates from spec §4. `featured: true` for ForgeLoop, Sentinel, Dentaxis, COD Control Desk, WhatsApp Order-to-Cash Desk.
- [ ] **Step 3:** Verify `npm run build` (types). Then assert no Salesforce + no client names leaked:
  Run: `grep -riE "salesforce|edx|xiangqi|litmustest|zuub" src/data/projects.ts ; echo "exit:$?"`
  Expected: no matches (grep exit 1).

### Task 1.2: `skills.ts` + `quests.ts`

**Files:** Create `src/data/skills.ts`, `src/data/quests.ts`

- [ ] **Step 1:** `skills.ts` — export `arsenal: { title: string; artifact: string; icon: string; skills: string[] }[]` with the 7 groups from spec §6 (no Salesforce group).
- [ ] **Step 2:** `quests.ts` — export `quests: { title: string; detail: string; state: "active" | "next" }[]` for current direction (Salesforce-free): AI-assisted SDLC/STLC depth (ForgeLoop), automation framework maturity (Sentinel), productized SaaS, local-first AI systems, scraping/reporting products, backend/system-design depth, moving toward architecture roles.
- [ ] **Step 3:** `npm run build`. Expected: PASS.

### Task 1.3: Rework `portfolio.ts` (profile, about, experience anonymized, credentials)

**Files:** Modify `src/data/portfolio.ts`

- [ ] **Step 1:** Update `profile.role` → `"Automation Engineer · Systems Builder"`, keep email `zeeshan04956@gmail.com`, github, linkedin; add `upwork: ""` placeholder, `availability` string, `yearsExperience: 4`.
- [ ] **Step 2:** Rewrite `about` (summary + bridging line + personal touch) per spec §1; humanize.
- [ ] **Step 3:** Rewrite `experience`: keep Arbisoft + Techlogix roles and all metrics, but replace `edX/Xiangqi/LitmusTest/Zuub` with categories ("a MOOC / online-learning platform", "an online multiplayer gaming platform", "an online assessment platform", "a US dental-insurance data-extraction product"). Remove the named `domains` array (or convert to unnamed `domainCategories`).
- [ ] **Step 4:** Add `aiPractices: { title: string; detail: string }[]` for the "How I Use AI" cards (spec §I / brief §7), humanized.
- [ ] **Step 5:** Update `navLinks` → About, Arsenal, World Map, Projects, AI, Experience, Contact (anchors `#about,#arsenal,#world-map,#projects,#ai,#experience,#contact`).
- [ ] **Step 6:** Remove old `projects`, `skillGroups`, `certifications`→keep as `credentials`, and any Salesforce strings.
- [ ] **Step 7:** Assert clean:
  Run: `grep -rniE "salesforce|edx|xiangqi|litmustest|zuub" src/data/portfolio.ts ; echo "exit:$?"` → expect no matches.
  Run: `grep -c "zeeshan04956@gmail.com" src/data/portfolio.ts` → expect ≥1.
- [ ] **Step 8:** `npm run build`. Expected: PASS (note: `Skills.tsx`/`Projects.tsx` will break until Phase 2/3 — acceptable mid-phase; if build must stay green, defer deleting old exports until their consumers are replaced. Order: keep old exports until Task 3.4/2.3 land, then remove).

> Sequencing note: to keep `npm run build` green between tasks, **keep** the old `projects`/`skillGroups` exports in `portfolio.ts` until `FeaturedProjects.tsx` (Task 3.4) and `Arsenal.tsx` (Task 2.3) replace their consumers, then delete in Task 3.5.

### Phase 1 commit (on approval)
`feat(data): codex project roster, arsenal, quests; anonymize experience; drop Salesforce`

---

## Phase 2 — Core content sections

### Task 2.1: Nav

**Files:** Modify `src/components/Nav.tsx`

- [ ] Brand mark (Compass icon + "Zeeshan Amjad" in Cinzel), anchor links from `navLinks`, mono labels, scroll-aware backdrop (reuse existing client scroll logic if present), mobile menu. Active-on-scroll optional. Gate: `npm run build` + `npm run lint`.

### Task 2.2: Hero

**Files:** Rewrite `src/components/Hero.tsx`

- [ ] Cinematic codex hero: map-toned backdrop + slow-flicker compass/rune (CSS `animate-flicker`, reduced-motion safe), Cinzel title **"Automation Engineer · Systems Builder · AI-Assisted Architect"**, humanized subtitle, CTAs: **View Projects** (`#projects`), **Explore My World** (`#world-map`), **Download Resume** (`/Zeeshan-Amjad-Resume.pdf`, `download`), **Contact** (`#contact`). Mono micro-stats row (4+ yrs · production systems · multi-tenant SaaS). Gate: `npm run build`.

### Task 2.3: About, Arsenal, Experience, Credentials, Footer

**Files:** Rewrite `About.tsx`; create `Arsenal.tsx`; modify `Experience.tsx`, `Credentials.tsx`, `Footer.tsx`

- [ ] **About** — `.parchment` panel, `WaxSeal` icon, decorative gold border, humanized bio + the QA↔builder bridging line.
- [ ] **Arsenal** — map `arsenal` groups to artifact cards (icon + artifact name + skill chips in mono). Replaces Skills.
- [ ] **Experience** — anonymized timeline from `portfolio.experience`, codex styling, current-role marker.
- [ ] **Credentials** — certs + education as "seals/marks earned", status chips.
- [ ] **Footer** — codex styling, contact mini-links, year.
- [ ] Gate: `npm run build` + `npm run lint`.

### Phase 2 commit (on approval)
`feat(sections): codex hero, about, arsenal, experience, credentials, nav, footer`

---

## Phase 3 — Projects experience (map + modal + featured)

### Task 3.1: `ProjectModalProvider` (client context)

**Files:** Create `src/components/ProjectModalProvider.tsx`

- [ ] Client component. Holds `selectedId` state; exposes context `{ openProject(id), closeProject() }` via `useProjectModal()`. Renders `<ProjectModal project={selected} onClose={closeProject} />`. Locks body scroll while open. Wrap children. Gate: build.

### Task 3.2: `ProjectModal`

**Files:** Create `src/components/ProjectModal.tsx`

- [ ] Dialog styled as an unrolled scroll: status badge, location name, problem / what it does / stack chips / what it demonstrates (fields from `Project`). Accessibility: `role="dialog"` `aria-modal="true"` `aria-labelledby`, focus moves to the dialog on open and is trapped, Esc closes, click-on-backdrop closes, focus returns to the invoking marker. Reduced-motion safe. Gate: build.

### Task 3.3: `ProjectMap`

**Files:** Create `src/components/ProjectMap.tsx`

- [ ] Client component. Desktop (`md+`): a positioned canvas (`.parchment`, aspect-box) with district labels and project markers absolutely placed via `project.map.{x,y}`. Each marker is a `<button>`: glyph + glowing label on hover/focus; shipped = solid, `in-progress` = dimmed with a "fog" ring + "Uncharted" tag. Click → `openProject(id)`.
- [ ] Mobile (`< md`): hide the canvas; render a vertical list of the same markers as full-width buttons grouped by district.
- [ ] A compass rose + legend (Shipped / In Progress). Section id `world-map`. Gate: build + lint.

### Task 3.4: `ProjectCard` + `FeaturedProjects`

**Files:** Create `src/components/ProjectCard.tsx`, `src/components/FeaturedProjects.tsx`; delete `src/components/Projects.tsx`

- [ ] `ProjectCard` — `.card-codex .parchment`, status badge, name + location, one-line `does`, stack chips, **View Details** → `openProject(id)`.
- [ ] `FeaturedProjects` — section id `projects`, grid of cards for `projects.filter(p => p.featured)`. Gate: build.

### Task 3.5: Wire into `page.tsx`; remove dead exports

**Files:** Modify `src/app/page.tsx`; modify `src/data/portfolio.ts`; delete `src/components/Skills.tsx`

- [ ] Update composition to spec §3 order. Wrap the map + featured sections in `ProjectModalProvider`.

```tsx
<ProjectModalProvider>
  <ProjectMap />
  <FeaturedProjects />
</ProjectModalProvider>
```

- [ ] Delete `Skills.tsx` and `Projects.tsx`; remove now-unused `projects`/`skillGroups` from `portfolio.ts`.
- [ ] Gate: `npm run build` (must be green now), `npm run lint`. Assert: `grep -rni salesforce src/ ; echo exit:$?` → no matches.

### Phase 3 commit (on approval)
`feat(projects): interactive world map, project scroll modal, featured cards`

---

## Phase 4 — Remaining sections

### Task 4.1: AISystems + Philosophy + QuestLog + Resume + Contact

**Files:** Create `AISystems.tsx`, `Philosophy.tsx`, `QuestLog.tsx`, `Resume.tsx`; rewrite `Contact.tsx`; add all to `page.tsx`.

- [ ] **AISystems** (`#ai`) — intro copy (humanized, from spec §I) + cards from `aiPractices` (architecture, coding, QA, product planning, local LLMs, cost-aware usage, human-supervised agents, prompt-driven workflows).
- [ ] **Philosophy** — single quiet panel, humanized engineering-philosophy copy.
- [ ] **QuestLog** — quest items from `quests.ts` styled as a quest log (active/next states).
- [ ] **Resume** — short summary + prominent **Download Resume PDF** button → `/Zeeshan-Amjad-Resume.pdf` (`download` attr).
- [ ] **Contact** (`#contact`) — sealed-scroll / stamped-letter: `WaxSeal`, email, GitHub, LinkedIn, Upwork (placeholder, hidden if empty), location (Pakistan · Remote-ready), availability line.
- [ ] Update `page.tsx` order; gate: `npm run build` + `npm run lint`.

### Phase 4 commit (on approval)
`feat(sections): how-i-use-ai, philosophy, quest log, resume, sealed contact`

---

## Phase 5 — Resume PDF

### Task 5.1: Produce `public/Zeeshan-Amjad-Resume.pdf`

**Files:** Create `public/Zeeshan-Amjad-Resume.pdf`

- [ ] **Step 1 (attempt faithful conversion):** try, in order, whichever is available:
  - Headless Chrome: `textutil -convert html -output /tmp/resume.html "<docx>"` then `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu --print-to-pdf=public/Zeeshan-Amjad-Resume.pdf /tmp/resume.html`
  - or `pandoc "<docx>" -o public/Zeeshan-Amjad-Resume.pdf` (only if a PDF engine exists).
- [ ] **Step 2 (verify):** confirm the file exists and is a valid PDF: `file public/Zeeshan-Amjad-Resume.pdf` (expect "PDF document"); open/screenshot page 1 and check it's the resume, not blank.
- [ ] **Step 3 (fallback):** if no tool produced a clean PDF, regenerate a clean ATS-style PDF from the resume text (captured in the design session) using the `pdf` skill. Content must match the resume exactly (title: QA Automation Engineer / SDET; 4 years; Arbisoft/Techlogix; certs; education).
- [ ] **Step 4:** Assert presence: `test -f public/Zeeshan-Amjad-Resume.pdf && echo OK`.

### Phase 5 commit (on approval)
`feat(resume): add downloadable resume PDF`

---

## Phase 6 — Verification, humanizer pass, polish

### Task 6.1: Humanizer pass on all copy

- [ ] Re-read every user-facing string (hero, about, ai, philosophy, quests, project `does`/`demonstrates`, contact). Invoke the `humanizer` skill; remove rule-of-three, "not X but Y", inflated symbolism, em-dash overuse, AI vocabulary. Apply edits. Gate: `npm run build`.

### Task 6.2: Build, lint, and browser verification

- [ ] **Step 1:** `npm run build` → PASS; `npm run lint` → clean.
- [ ] **Step 2:** Final content asserts: `grep -rni salesforce src/ public/ ; echo exit:$?` → none. `grep -rniE "edx|xiangqi|litmustest|zuub" src/ ; echo exit:$?` → none.
- [ ] **Step 3:** `npm run dev`; with the webapp-testing skill / Playwright MCP, load `http://localhost:3000` and:
  - Screenshot desktop (1440) + mobile (390); confirm codex look, readable contrast on parchment.
  - Confirm zero console errors.
  - World map: hover/focus a marker shows label; click opens modal; Tab reaches markers; Esc closes modal; focus returns.
  - Mobile: map renders as the vertical journey list.
  - Click **Download Resume** → `/Zeeshan-Amjad-Resume.pdf` resolves (200).
  - Toggle `prefers-reduced-motion` → reveals/flicker disabled.
- [ ] **Step 4:** Fix any issues found; re-run Step 1.

### Phase 6 commit (on approval)
`chore: humanize copy; verified build, a11y, and resume download`

---

## Self-review (completed by plan author)

- **Spec coverage:** positioning (0.2, 2.2), sections/IA (3.5, 4.1), project roster + statuses (1.1, 3.x), world map + a11y (3.1–3.3, 6.2), arsenal (1.2, 2.3), visual system (0.1–0.3), resume (5.1), Salesforce removal (1.1, 1.3, 3.5, 6.2), anonymization (1.3, 6.2), SEO/metadata (0.2), humanizer (1.3/2/4 inline + 6.1). All spec sections map to tasks.
- **Placeholder scan:** project copy intentionally references spec §4 (DRY, single source of truth) rather than duplicating; all code-bearing foundational steps (theme, fonts, types, wiring) contain real code. No "TBD/handle edge cases".
- **Type consistency:** `Project`/`ProjectStatus`/`statusLabel` (1.1) used by `ProjectMap`, `ProjectModal`, `ProjectCard`, `FeaturedProjects`; `useProjectModal().openProject(id)` consumed by markers + cards; `arsenal`/`quests`/`aiPractices` shapes consumed by their sections. Consistent.
- **Build-green sequencing:** Task 1.3 note keeps old exports until consumers are replaced (2.3/3.4), removed in 3.5.
