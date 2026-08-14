# Portfolio-iotous

This repository is the Vite + React portfolio site for Mouad Wahidi.
## Scripts

- `npm run dev` — start dev server
- `npm run build` — produce production build (output in `dist`)
- `npm run preview` — locally preview the built site
- `npm run start` — same as preview (for local testing)

## GitHub Pages

This project is configured to deploy to GitHub Pages automatically via the workflow at `.github/workflows/deploy-gh-pages.yml`.

To manually deploy:

```bash
npm ci
npm run build
npx gh-pages -d dist
```

Replace the repo and homepage fields in `package.json` with your GitHub repo if different.
