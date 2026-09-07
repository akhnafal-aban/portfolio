# portfolio

20 portfolio design directions in one repo. A landing page links to each variant, all deployed from a single GitHub Pages site.

## Structure

```
index.html              landing page (links to each variant)
variants/
  aurora/               full Vite + React + TS source
  brutalist/
  glass/
  ...                   20 variants total
.github/workflows/
  deploy.yml            builds all variants → gh-pages
```

## Deploy

GitHub Action builds all 20 variants and deploys to `gh-pages` on every push to `main`.

Live: https://akhnafal-aban.github.io/portfolio/

Each variant: https://akhnafal-aban.github.io/portfolio/variants/<name>/

## Tech

Vite, React, TypeScript, Tailwind CSS.
