# Likhitha Gudalwar — Portfolio

A personal portfolio site built with React, TypeScript, and Vite. Content
(experience, projects, skills, education, contact links) lives in one typed
file, and the Projects section pulls your latest public repos live from the
GitHub API — no backend required.

## Before you deploy — 3 things to update

1. **Repo links.** Open `src/data.ts` and find the two `repoUrl` fields
   marked `// TODO`, under `featuredProjects`. Replace them with the actual
   GitHub URLs for ProcastiNot and Readopotamus.
2. **Résumé file.** `public/resume.pdf` is already included (converted from
   your latest resume). Replace it with a newer export any time by dropping
   a new `resume.pdf` into `public/` with the same filename.
3. **Phone number.** I deliberately left your phone number off this public
   site (only email + LinkedIn + GitHub are shown) to cut down on spam/scraping
   exposure. If you want it added anyway, put it in the `profile` object in
   `src/data.ts` and reference it in `src/components/Contact.tsx`.

## Local development

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`. Changes hot-reload automatically.

## Editing content

Everything text-based — your bio, experience bullets, project descriptions,
skills, education — lives in **`src/data.ts`**. You shouldn't need to touch
any component file for a content change; just edit the data and save.

Colors, fonts, and spacing are defined as CSS variables at the top of
**`src/index.css`** (`:root { ... }`) if you want to adjust the palette.

## Deploying to GitHub Pages

You already have a GitHub account — here's the fastest path, using GitHub
Actions (no extra local tooling needed):

1. **Create a new repository** on GitHub (e.g. `portfolio` or
   `likhitha-gudalwar.github.io` if you want it at the root of your GitHub
   Pages domain instead of a subpath).

2. **Push this project to it:**

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/Likhitha2502/YOUR-REPO-NAME.git
   git push -u origin main
   ```

3. **Enable GitHub Pages with Actions as the source:**
   In your new repo on GitHub, go to **Settings → Pages** → under
   "Build and deployment", set **Source** to **GitHub Actions**.

4. **That's it.** The included workflow at
   `.github/workflows/deploy.yml` runs automatically on every push to
   `main` — it builds the site and publishes it. Check the **Actions** tab
   for progress; your live URL will appear under **Settings → Pages** once
   the first run finishes (usually `https://likhitha2502.github.io/YOUR-REPO-NAME/`).

5. **Using a custom repo name?** No changes needed — `vite.config.ts` uses
   a relative base path (`base: './'`) so the build works at any subpath
   automatically.

### Updating the live site later

Any time you edit `src/data.ts` (or anything else) and push to `main`, the
Action re-runs and redeploys automatically — no manual build/deploy step.

## Tech notes

- **Live GitHub repos:** `src/hooks/useGithubRepos.ts` fetches
  `https://api.github.com/users/Likhitha2502/repos` directly from the
  browser at page load. This is GitHub's public REST API, which allows
  unauthenticated requests (60/hour per visitor IP) and sends CORS headers,
  so it works from a static site with no server or API key. If the rate
  limit is ever hit, the section shows a graceful fallback message instead
  of breaking.
- **Accessibility:** All interactive elements are keyboard-focusable with
  visible focus rings, and all scroll/pulse animations respect
  `prefers-reduced-motion`.
- **No analytics or tracking** are included. If you want visit counts later,
  a privacy-friendly option like Plausible or GoatCounter can be added with
  a single script tag in `index.html`.
