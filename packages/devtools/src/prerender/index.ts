import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { createServer } from 'node:http';
import type { AddressInfo } from 'node:net';
import { dirname, join } from 'node:path';

export interface PrerenderRoute {
  path: string;
  title: string;
  description: string;
  image: string;
}

export interface PrerenderOptions {
  clientDir: string;
  baseUrl: string;
  routes: PrerenderRoute[];
}

export interface OgImageTarget {
  path: string;
  name: string;
}

export interface OgImagesOptions {
  clientDir: string;
  targets: OgImageTarget[];
  viewport?: { width: number; height: number };
}

function setMeta(html: string, key: string, value: string): string {
  const re = new RegExp(`(="${key}" content=")[^"]*(")`);
  return html.replace(re, (_match, before: string, after: string) => `${before}${value}${after}`);
}

function outputPath(clientDir: string, route: string): string {
  const segment = route === '/' ? '' : route;
  return join(clientDir, segment, 'index.html');
}

export async function prerender({ clientDir, baseUrl, routes }: PrerenderOptions): Promise<void> {
  const template = await readFile(join(clientDir, 'index.html'), 'utf-8');

  for (const route of routes) {
    const values: Record<string, string> = {
      'og:url': `${baseUrl}${route.path}`,
      'twitter:url': `${baseUrl}${route.path}`,
      'og:title': route.title,
      'og:image:alt': route.title,
      'twitter:title': route.title,
      'og:description': route.description,
      'twitter:description': route.description,
      'og:image': route.image,
      'twitter:image:src': route.image,
    };

    let html = template;
    for (const [key, value] of Object.entries(values)) {
      html = setMeta(html, key, value);
    }
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${route.title}</title>`);

    const target = outputPath(clientDir, route.path);
    await mkdir(dirname(target), { recursive: true });
    await writeFile(target, html, 'utf-8');
  }

  console.log(`Pre-rendered ${routes.length} routes (head meta only)`);
}

export async function generateOgImages({
  clientDir,
  targets,
  viewport = { width: 1200, height: 630 },
}: OgImagesOptions): Promise<void> {
  const { default: express } = await import('express');
  const { default: serveStatic } = await import('serve-static');
  const { default: puppeteer } = await import('puppeteer');

  const app = express();
  app.use(serveStatic(clientDir, { index: ['index.html'] }));
  app.use((_req, res) => res.sendFile(join(clientDir, 'index.html')));
  const server = createServer(app);
  await new Promise<void>((resolve) => server.listen(0, resolve));
  const port = (server.address() as AddressInfo).port;

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--font-render-hinting=none'],
  });

  try {
    const ogDir = join(clientDir, 'og');
    await mkdir(ogDir, { recursive: true });

    for (const target of targets) {
      const page = await browser.newPage();
      await page.setViewport(viewport);
      await page.goto(`http://localhost:${port}${target.path}`, { waitUntil: 'networkidle0', timeout: 50000 });
      const screenshot = await page.screenshot({ type: 'png' });
      await writeFile(join(ogDir, `${target.name}.png`), screenshot);
      await page.close();
    }

    console.log(`Generated ${targets.length} OG images`);
  } finally {
    await browser.close();
    server.close();
  }
}
