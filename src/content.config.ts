import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { tools } from './data/tools';

const toolIds = new Set(tools.map(({ id }) => id));

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    toolId: z.string().refine((id) => toolIds.has(id), 'Choose a tool in the site registry.'),
    author: z.string(),
    heroImage: z.string().optional(),
    slug: z.string().optional()
  })
});

export const collections = { blog };
