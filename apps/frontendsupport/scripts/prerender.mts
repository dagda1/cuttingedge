import { mkdir, readFile, writeFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const clientDir = join(root, 'dist/client');

const BASE_URL = 'https://frontendrescue.scot';

const DEFAULT_META = {
  title: 'Frontend Rescue',
  description: 'Performance-first frontend.',
  image:
    'https://res.cloudinary.com/ddospxsc8/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1767264044/rescue_dieu8h.png',
};

type Meta = { title: string; description: string; image: string };
type Post = { slug: string; title: string; description: string };

const STATIC_ROUTES = ['/', '/about', '/contact', '/email/confirmation', '/posts', '/testimonials'];

async function posts(): Promise<Post[]> {
  const listPath = join(clientDir, 'posts', 'posts-list.json');
  return JSON.parse(await readFile(listPath, 'utf-8')) as Post[];
}

function outputPath(route: string): string {
  const segment = route === '/' ? '' : route;
  return join(clientDir, segment, 'index.html');
}

function setMeta(html: string, key: string, value: string): string {
  const re = new RegExp(`(="${key}" content=")[^"]*(")`);
  return html.replace(re, (_match, before: string, after: string) => `${before}${value}${after}`);
}

async function prerender(): Promise<void> {
  const vite = await createServer({ root, appType: 'custom', server: { middlewareMode: true } });

  try {
    const { render } = (await vite.ssrLoadModule('/src/entry-server.tsx')) as { render: (url: string) => string };
    const template = await readFile(join(clientDir, 'index.html'), 'utf-8');

    const routeMeta = new Map<string, Meta>(STATIC_ROUTES.map((route) => [route, DEFAULT_META]));
    for (const post of await posts()) {
      routeMeta.set(`/posts/${post.slug}`, {
        title: post.title,
        description: post.description || DEFAULT_META.description,
        image: `${BASE_URL}/og/${post.slug}.png`,
      });
    }

    for (const [route, meta] of routeMeta) {
      const appHtml = render(route);
      const values: Record<string, string> = {
        'og:url': `${BASE_URL}${route}`,
        'twitter:url': `${BASE_URL}${route}`,
        'og:title': meta.title,
        'og:image:alt': meta.title,
        'twitter:title': meta.title,
        'og:description': meta.description,
        'twitter:description': meta.description,
        'og:image': meta.image,
        'twitter:image:src': meta.image,
      };

      let html = template;
      for (const [key, value] of Object.entries(values)) {
        html = setMeta(html, key, value);
      }
      html = html
        .replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`)
        .replace('<!--app-html-->', appHtml);

      const target = outputPath(route);
      await mkdir(dirname(target), { recursive: true });
      await writeFile(target, html, 'utf-8');
    }

    console.log(`Pre-rendered ${routeMeta.size} routes`);
  } finally {
    await vite.close();
  }
}

prerender().catch((error) => {
  console.error(error);
  process.exit(1);
});
