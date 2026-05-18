# Zeeshan Amjad — Portfolio

Personal portfolio site for **Zeeshan Amjad**, QA Automation Engineer / SDET.
Modern, dark, neon-accented single-page site showcasing skills, experience, and
projects — with **ForgeLoop Suite** featured as the headline project.

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and
**Tailwind CSS v4**.

## Tech stack

- Next.js 16 + React 19 (App Router, React Compiler)
- TypeScript
- Tailwind CSS v4
- Geist font (`next/font`)
- Scroll-reveal via `IntersectionObserver` (no animation libraries)

## Project structure

```
src/
  app/
    layout.tsx        # SEO metadata, fonts, root layout
    page.tsx          # Section composition
    globals.css       # Theme tokens + design system
    icon.svg          # "ZA" monogram favicon
    robots.ts
  components/          # Nav, Hero, About, Skills, Experience,
                       # Projects, Credentials, Contact, Footer, ...
  data/
    portfolio.ts       # All content lives here — edit this to update the site
```

> To update any content (skills, jobs, projects, links), edit
> `src/data/portfolio.ts`. No component changes needed.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & lint

```bash
npm run build
npm run lint
```

## Deploy to Vercel (free)

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and sign in with GitHub.
3. Import the repository — Vercel auto-detects Next.js (no config needed).
4. Click **Deploy**. Every push to `main` auto-deploys.

You get a free `*.vercel.app` URL; a custom domain can be added later in
Vercel project settings.
