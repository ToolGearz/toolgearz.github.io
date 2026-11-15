# Jutt AI

Jutt AI is a focused directory of free AI generators and browser-based utilities. The homepage and `/tools` link directly to each tool page, which is generated from the registry at [`src/data/tools.ts`](./src/data/tools.ts). The site uses Tailwind CSS, Astro server output, and the Cloudflare adapter.

## Local development

```sh
npm install
npm run dev
```

For local AI generation, create a root `.dev.vars` file (it is git-ignored) and add your Google AI Studio key. Cloudflare injects this binding through its runtime; the API also retains a legacy runtime-local and `import.meta.env` fallback:

```dotenv
GEMINI_API_KEY=your-key
```

Never commit API keys. For Cloudflare Pages, add `GEMINI_API_KEY` as an encrypted secret in the `jutt-ai-blog` Pages project’s **Settings → Variables and Secrets**.

## Adding a tool

Append a `Tool` object to [`src/data/tools.ts`](./src/data/tools.ts) with a unique `id`, title, description, category, and `type`.

- For Gemini-powered tools, set `type: 'ai'` and provide `systemPrompt`.
- For browser-only tools, set `type: 'client'` and select a supported `clientAction`. These tools run locally without API requests. Add a new `ClientAction` and handler in the tool page to support a new kind of utility.

The homepage search and category tabs, sitemap, and `/tools/<id>` route all use this registry. The API only accepts configured AI tool IDs.

## Tool guides

Markdown guides belong under `src/content/blog/` and must select a valid `toolId` from the tool registry. Keep each guide focused on explaining, demonstrating, or troubleshooting that tool. Posts unrelated to the site's own tools are not part of this collection.

AI tool usage has a client-side limit of 10 generations per device per UTC day. This is a convenience limit stored in browser local storage, not a server-enforced quota.

## Build and deploy

```sh
npm run build
npm run deploy
```

The Cloudflare adapter emits the Pages Functions worker (`dist/_worker.js`) and route manifest (`dist/_routes.json`) alongside the static assets. The deploy script publishes that output to the existing `jutt-ai-blog` Cloudflare Pages project; it does not create or deploy a separate Worker.
