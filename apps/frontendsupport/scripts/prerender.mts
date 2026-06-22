import { prerenderSite, type SiteMeta } from '@cutting/devtools/prerender.js';
import { readFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const clientDir = join(__dirname, '../dist/client');

const BASE_URL = 'https://frontendrescue.com';

const DEFAULT_META: SiteMeta = {
  title: 'Frontend Rescue',
  description: 'Performance-first frontend.',
};

type Post = { slug: string; title: string; description: string };

const list = JSON.parse(await readFile(join(clientDir, 'posts', 'posts-list.json'), 'utf-8')) as Post[];
const postMeta = new Map(list.map((post) => [post.slug, { title: post.title, description: post.description }]));

await prerenderSite({
  clientDir,
  baseUrl: BASE_URL,
  defaultMeta: DEFAULT_META,
  resolveMeta: (path) => {
    const match = path.match(/^\/posts\/(.+)$/);
    return match ? postMeta.get(match[1]) : undefined;
  },
});
