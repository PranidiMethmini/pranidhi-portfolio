# Pranidhi Methmini Portfolio

Local foundation for a personal portfolio. The homepage is intentionally a minimal placeholder; the Stitch reference screenshots will guide the next implementation step.

## Setup status

Source configuration is prepared. Dependency installation in the initial development session was blocked by npm registry timeouts and network errors. Dependencies are declared in `package.json`, but installation, lockfile generation, lint, TypeScript checks, build, and runtime verification are pending. Run the commands below once registry access is available.

## Run locally

Requires Node.js 20.9 or newer and npm.

```sh
npm install
npm run dev
```

Open http://localhost:3000.

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

Run `npm start` after a successful production build. Google Fonts requires network access during the build; Next.js self-hosts the downloaded fonts.

## Structure

- `src/app`: App Router layout, homepage, global styles, and metadata.
- `src/components/ui`: reusable primitives such as Container.
- `src/components/layout`: future shared header/footer.
- `src/components/sections`: future homepage sections.
- `src/data`: confirmed project data (currently empty).
- `src/types`: shared TypeScript models.
- `src/assets`: assets imported into application code.
- `public/images`: public images served by URL.

Future routes: `src/app/projects/page.tsx` and `src/app/projects/[slug]/page.tsx`. These routes are not implemented in this step.

## Design foundation

Tailwind CSS v4 theme tokens live in `src/app/globals.css`, using its CSS-first configuration. Utilities include `bg-warm-ivory`, `bg-soft-peach`, `bg-blush-pink`, `bg-muted-rose`, and `text-dark-charcoal`. Use charcoal for readable text on the light palette; rose and pink are decorative accents.

Newsreader provides display typography and Plus Jakarta Sans provides body typography through `next/font/google`. Use `font-display` for display text and `font-sans` for body text. `Container` provides consistent responsive gutters and a 76rem maximum width; `py-section` provides fluid section spacing. The default Tailwind spacing scale handles smaller gaps.

Components are Server Components by default. Add `"use client"` only where interactive behavior requires it; Motion is installed for future animations via `motion/react`, with reduced-motion preferences respected. Lucide icons are available through `lucide-react`.

SEO contains only verified personal information. Add a canonical URL and social preview image when the deployment domain and assets are confirmed.
