# 06-notehub-nextjs

Next.js (App Router) refactor of NoteHub with SSR prefetch + CSR hydration via TanStack Query.

## Quick start
```bash
npm i
cp .env.example .env   # set NEXT_PUBLIC_NOTEHUB_TOKEN without quotes
npm run dev
```

Deploy on Vercel and add `NEXT_PUBLIC_NOTEHUB_TOKEN` (Production/Preview).

CSS modules are expected from https://github.com/goitacademy/react-notehub-styles/tree/hw-06 —
copy the `.module.css` files into matching folders.
