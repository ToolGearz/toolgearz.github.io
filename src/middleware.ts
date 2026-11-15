import { defineMiddleware } from 'astro:middleware';
import { removedPostSlugs } from './data/removed-posts';

const removedPostSlugSet = new Set<string>(removedPostSlugs);

export const onRequest = defineMiddleware((context, next) => {
  const { pathname, search } = new URL(context.request.url);
  if (pathname === '/blog' || pathname === '/blog/') {
    return new Response('The blog archive has been removed.', { status: 410 });
  }
  if (!pathname.startsWith('/blog/')) return next();

  const canonicalPath = pathname.replace(/\/+$/, '') || '/';
  let slug: string;
  try {
    slug = decodeURIComponent(canonicalPath.slice('/blog/'.length));
  } catch {
    return next();
  }

  if (removedPostSlugSet.has(slug)) {
    return new Response('This blog post has been permanently removed.', {
      status: 410,
      headers: { 'Cache-Control': 'public, max-age=86400' },
    });
  }

  if (!pathname.endsWith('/')) return next();
  return context.redirect(`${canonicalPath}${search}`, 301);
});
