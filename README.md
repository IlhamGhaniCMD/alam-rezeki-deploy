# Alam Rezeki

Landing page for Alam Rezeki, built with Next.js 16 (App Router, Cache Components), Tailwind CSS v4 and shadcn/ui.

## Getting started

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | What it does |
| --- | --- |
| `bun dev` | Start the dev server |
| `bun run build` | Production build |
| `bun run lint` | Biome format and lint check |
| `bun run format` | Format with Biome |

Run `bun run lint` and `bun run build` before opening a PR.

## Structure

- `app/`: routes, the root layout and `globals.css` (theme colors and fonts are CSS variables here)
- `components/`: site components such as the header and footer
- `components/ui/`: shadcn components, added with `bunx shadcn@latest add <name>`
- `content/`: all site copy, contact details, navigation and product data. Keep text here instead of hardcoding it in components, so it can be translated later.
- `public/images/`: brand, product and operations photos

## Workflow

Branch from `dev` and open the PR against `dev`. Commit messages follow `feat: ...` or `fix: ...` with the issue number, for example `feat: add product detail page (#1)`.
