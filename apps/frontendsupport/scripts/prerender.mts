import { mkdir, readFile, writeFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const clientDir = join(__dirname, '../dist/client');
const serverEntry = join(__dirname, '../dist/server/entry-server.js');

const BASE_URL = 'https://frontendrescue.scot';

const STATIC_ROUTES = ['/', '/about', '/contact', '/email/confirmation', '/posts', '/testimonials'];

async function postRoutes(): Promise<string[]> {
  const listPath = join(clientDir, 'posts', 'posts-list.json');
  const list = JSON.parse(await readFile(listPath, 'utf-8')) as Array<{ slug: string }>;
  return list.map((post) => `/posts/${post.slug}`);
}

function outputPath(route: string): string {
  const segment = route === '/' ? '' : route;
  return join(clientDir, segment, 'index.html');
}

async function prerender(): Promise<void> {
  const { render } = (await import(pathToFileURL(serverEntry).href)) as { render: (url: string) => string };
  const template = await readFile(join(clientDir, 'index.html'), 'utf-8');

  const routes = [...STATIC_ROUTES, ...(await postRoutes())];

  for (const route of routes) {
    const appHtml = render(route);
    const html = template.replace('<!--app-html-->', appHtml).replace(/@url/g, `${BASE_URL}${route}`);

    const target = outputPath(route);
    await mkdir(dirname(target), { recursive: true });
    await writeFile(target, html, 'utf-8');
  }

  console.log(`Pre-rendered ${routes.length} routes`);
}

prerender().catch((error) => {
  console.error(error);
  process.exit(1);
});
