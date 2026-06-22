import { generateOgImages, type OgImageTarget } from '@cutting/devtools/prerender.js';
import { readFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const clientDir = join(__dirname, '../dist/client');

type Post = { slug: string };

async function targets(): Promise<OgImageTarget[]> {
  const list = JSON.parse(await readFile(join(clientDir, 'posts', 'posts-list.json'), 'utf-8')) as Post[];
  return list.map((post) => ({ path: `/posts/${post.slug}/`, name: post.slug }));
}

await generateOgImages({ clientDir, targets: await targets() });
