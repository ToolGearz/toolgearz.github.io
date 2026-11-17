# Jutt AI

Jutt AI is a focused directory of free AI generators and browser-based utilities. The homepage and `/tools` link directly to each tool page, which is generated from the registry at [`src/data/tools.ts`](./src/data/tools.ts). The site uses Tailwind CSS and Astro static output, deployed to GitHub Pages.

## Local development

```sh
npm install
npm run dev
```

AI generators that previously relied on a server-side Gemini endpoint are disabled on GitHub Pages because it only serves static files. Browser-based utilities continue to run locally.

## Adding a tool

Append a `Tool` object to [`src/data/tools.ts`](./src/data/tools.ts) with a unique `id`, title, description, category, and `type`.

- For AI-powered tools, set `type: 'ai'` and provide `systemPrompt`. Generation is currently disabled on GitHub Pages; a secure server-side API must be configured before enabling it.
- For browser-only tools, set `type: 'client'` and select a supported `clientAction`. These tools run locally without API requests. Add a new `ClientAction` and handler in the tool page to support a new kind of utility.

The homepage search and category tabs, sitemap, and `/tools/<id>` route all use this registry. The API only accepts configured AI tool IDs.

## Tool guides

Markdown guides belong under `src/content/blog/` and must select a valid `toolId` from the tool registry. Keep each guide focused on explaining, demonstrating, or troubleshooting that tool. Posts unrelated to the site's own tools are not part of this collection.

AI tool usage has a client-side limit of 10 generations per device per UTC day. This is a convenience limit stored in browser local storage, not a server-enforced quota.

## Build and deploy

```sh
npm run build
```

Push to `main` to build and deploy the static site to GitHub Pages using the workflow in `.github/workflows/deploy.yml`. Ensure GitHub Pages is configured to use GitHub Actions in the repository settings.
