import { prerender, type PrerenderRoute } from '@cutting/devtools/prerender.js';
import { readFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const clientDir = join(__dirname, '../dist/client');

const BASE_URL = 'https://frontendrescue.com';

const DEFAULT_META = {
  title: 'Frontend Rescue',
  description: 'Performance-first frontend.',
  image:
    'https://res.cloudinary.com/ddospxsc8/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1767264044/rescue_dieu8h.png',
};

const STATIC_ROUTES = ['/', '/about', '/contact', '/email/confirmation', '/posts', '/testimonials'];

type Post = { slug: string; title: string; description: string };

async function routes(): Promise<PrerenderRoute[]> {
  const list = JSON.parse(await readFile(join(clientDir, 'posts', 'posts-list.json'), 'utf-8')) as Post[];

  const staticRoutes: PrerenderRoute[] = STATIC_ROUTES.map((path) => ({ path, ...DEFAULT_META }));
  const postRoutes: PrerenderRoute[] = list.map((post) => ({
    path: `/posts/${post.slug}`,
    title: post.title,
    description: post.description || DEFAULT_META.description,
    image: `${BASE_URL}/og/${post.slug}.png`,
  }));

  return [...staticRoutes, ...postRoutes];
}

await prerender({ clientDir, baseUrl: BASE_URL, routes: await routes() });
