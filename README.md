# POV: Hiring Yang

**A React portfolio that gives visitors a direct path from introduction to project context and résumé.**

This repository contains a section-based portfolio for Yang Luo, a Software Engineer and Computer Science student at Western University. It brings an animated introduction, project narratives, working principles, and an in-page résumé into a single frontend application.

[Current portfolio](https://povhiringyang.vercel.app/) · [GitHub profile](https://github.com/yanglluo)

> **Version context:** the current portfolio link opens YangOS, a separate desktop-style experience. This repository contains the earlier React/Vite portfolio; cloning it reproduces the section-based implementation described below.

## What this project demonstrates

- **Component composition:** introduction, background, projects, working principles, and footer are separate sections composed in `App.tsx`.
- **Interaction design:** résumé actions in the hero and footer open the same modal through shared React state.
- **Motion:** Framer Motion variants coordinate entrance/scroll animations; the hero cycles through focus areas with a cleaned-up interval.
- **Responsive styling:** Tailwind CSS breakpoints, fluid type sizes, and shared CSS establish the layout across screen sizes.
- **Frontend delivery:** Vite handles development and bundling, TypeScript checks the project during builds, and ESLint provides a separate code-quality check.

## Architecture

```text
main.tsx → App.tsx
           ├─ Hero
           ├─ WhyMeSection
           ├─ ProjectsSection
           ├─ HowIThinkSection
           ├─ FooterSection
           └─ ResumeModal ← shared open/close state
```

The frontend keeps its content and interactions local to the component tree. No backend or API credentials are required to run it.

### Start with these files

| File | What to look for |
| --- | --- |
| [App.tsx](src/App.tsx) | Page composition and shared résumé-modal state |
| [Hero.tsx](src/components/Hero.tsx) | Animated focus-area carousel, motion variants, and responsive header grid |
| [ProjectsSection.tsx](src/components/ProjectsSection.tsx) | Data-driven project cards organized around the problem, implementation, and decisions |
| [ResumeModal.tsx](src/components/ResumeModal.tsx) | Conditional modal rendering, close behavior, and résumé presentation |
| [index.css](src/index.css) | Shared styles, fonts, and Tailwind entry point |

## Stack

React 19 · TypeScript 5.9 · Vite 7 · Tailwind CSS 4 · Framer Motion 12

## Run locally

Use npm and a Node.js version compatible with Vite 7: `20.19+` or `22.12+`, as documented in the [Vite 7 migration guide](https://v7.vite.dev/guide/migration.html).

```bash
git clone https://github.com/yanglluo/PovHiringYang.git
cd PovHiringYang
npm install
npm run dev
```

Open the URL printed by Vite, normally `http://localhost:5173`.

```bash
npm run lint      # ESLint
npm run build     # TypeScript project build, then Vite production bundle
npm run preview   # Serve the built dist/ directory locally
```

## Design decisions

**Keep the visitor's path short.** Project context and résumé access are available within one page, with no account or backend dependency.

**Share state at the smallest useful boundary.** `App.tsx` owns whether the résumé is open, while individual sections own their presentation. Both entry points use the same modal.

**Keep content close to its layout.** Project cards are generated from structured data inside the projects component. This keeps the implementation small; a CMS or content-file boundary would be more useful if updates became frequent.

## Current scope and next steps

This is an earlier portfolio iteration. Its project descriptions, résumé copy, and external destinations may differ from current projects; consult the [current portfolio](https://povhiringyang.vercel.app/) for the latest presentation. In particular, prose inside a portfolio card is not a substitute for checking the linked project's current implementation.

The repository has lint/build scripts but no automated UI test suite. Useful next checks include keyboard and focus behavior in the résumé modal, reduced-motion preferences, small-screen layouts, and external-link freshness. No accessibility or performance score is claimed here.
