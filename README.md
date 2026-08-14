# zaliorax — Minecraft Network Website

Modern, premium website for the **zaliorax** Minecraft server.

## Stack

- React 19 + Vite
- Tailwind CSS v4
- React Router (HashRouter — works on static hosting like Replit)
- lucide-react (icons)

## Pages

- **Home** — hero with animated particles, live stats, "Why zaliorax", store preview
- **Store** — rank cards with a polished "under maintenance" purchase modal
- **Rules** — scannable rule categories
- **Status** — service status cards (Minecraft, Website, Store, Discord)
- **FAQ** — animated accordion

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deploy on Replit

1. Create a new Replit with **Node.js** and import this repo.
2. The start command is `npm run dev`.
3. On Replit, use the **Run** button — the Vite dev server exposes its port automatically.

> HashRouter is used so deep links (`#/store`, `#/rules`, …) work on any static host with no server rewrite rules.

## Notes

- Store purchases are intentionally disabled (maintenance modal) — no real payments wired.
- Server stats are demo/placeholder values.
- Replace the placeholder social links in `src/data/site.js` with real ones.
