import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { createServer } from 'node:http';
import type { AddressInfo } from 'node:net';
import { dirname, join } from 'node:path';

export interface SiteMeta {
  title: string;
  description: string;
}

export interface PrerenderSiteOptions {
  clientDir: string;
  baseUrl: string;
  defaultMeta: SiteMeta;
  routes?: string[];
  exclude?: string[];
  resolveMeta?: (path: string) => Promise<Partial<SiteMeta> | undefined> | Partial<SiteMeta> | undefined;
  viewport?: { width: number; height: number };
}

export function parseConstants(source: string): Record<string, string> {
  const constants: Record<string, string> = {};
  for (const match of source.matchAll(/export\s+const\s+(\w+)\s*=\s*["'`]([^"'`]+)["'`]/g)) {
    constants[match[1]] = match[2];
  }
  return constants;
}

export function extractRoutePaths(source: string, constants: Record<string, string> = {}): string[] {
  const paths = new Set<string>();

  const add = (path: string): void => {
    if (path.startsWith('/') && !path.includes(':') && !path.includes('*')) {
      paths.add(path);
    }
  };

  for (const match of source.matchAll(/\bpath\s*[=:]\s*["'`]([^"'`]+)["'`]/g)) {
    add(match[1]);
  }
  for (const match of source.matchAll(/\bpath\s*[=:]\s*\{?\s*\w+\.(\w+)\s*\}?/g)) {
    const value = constants[match[1]];
    if (value) {
      add(value);
    }
  }

  return [...paths];
}

function slugForPath(path: string): string {
  const slug = path.replace(/^\/+|\/+$/g, '').replace(/\//g, '-');
  return slug || 'home';
}

function normalize(path: string): string {
  const [withoutHash] = path.split('#');
  const [clean] = withoutHash.split('?');
  if (clean.length > 1 && clean.endsWith('/')) {
    return clean.slice(0, -1);
  }
  return clean;
}

function setMeta(html: string, key: string, value: string): string {
  const re = new RegExp(`(="${key}" content=")[^"]*(")`);
  return html.replace(re, (_match, before: string, after: string) => `${before}${value}${after}`);
}

function outputPath(clientDir: string, path: string): string {
  const segment = path === '/' ? '' : path;
  return join(clientDir, segment, 'index.html');
}

export async function prerenderSite({
  clientDir,
  baseUrl,
  defaultMeta,
  routes = [],
  exclude = [],
  resolveMeta,
  viewport = { width: 1200, height: 630 },
}: PrerenderSiteOptions): Promise<void> {
  const excluded = new Set(exclude.map(normalize));
  const { default: express } = await import('express');
  const { default: serveStatic } = await import('serve-static');
  const { default: puppeteer } = await import('puppeteer');

  const template = await readFile(join(clientDir, 'index.html'), 'utf-8');
  const ogDir = join(clientDir, 'og');
  await mkdir(ogDir, { recursive: true });

  const app = express();
  app.use(serveStatic(clientDir, { index: ['index.html'] }));
  app.use((_req, res) => res.sendFile(join(clientDir, 'index.html')));
  const server = createServer(app);
  await new Promise<void>((resolve) => server.listen(0, resolve));
  const port = (server.address() as AddressInfo).port;
  const origin = `http://localhost:${port}`;

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--font-render-hinting=none'],
  });

  const seeds = ['/', ...routes].map(normalize).filter((path) => !excluded.has(path));
  const queue: string[] = [...new Set(seeds)];
  const seen = new Set<string>(queue);
  const prerendered: string[] = [];

  try {
    while (queue.length > 0) {
      const path = queue.shift() as string;
      const page = await browser.newPage();
      await page.setViewport(viewport);

      const response = await page.goto(`${origin}${path}`, { waitUntil: 'networkidle0', timeout: 50000 });
      const contentType = response?.headers()['content-type'] ?? '';

      if (!contentType.includes('text/html')) {
        await page.close();
        continue;
      }

      const slug = slugForPath(path);
      const screenshot = await page.screenshot({ type: 'png' });
      await writeFile(join(ogDir, `${slug}.png`), screenshot);

      const hrefs = await page.$$eval('a[href]', (els: Element[]) => els.map((el) => el.getAttribute('href') ?? ''));
      await page.close();

      for (const href of hrefs) {
        if (!href.startsWith('/') || href.startsWith('//')) {
          continue;
        }
        const next = normalize(href);
        if (!seen.has(next) && !excluded.has(next)) {
          seen.add(next);
          queue.push(next);
        }
      }

      const override = (await resolveMeta?.(path)) ?? {};
      const meta: SiteMeta = {
        title: override.title ?? defaultMeta.title,
        description: override.description ?? defaultMeta.description,
      };
      const image = `${baseUrl}/og/${slug}.png`;
      const url = `${baseUrl}${path}`;

      const values: Record<string, string> = {
        'og:url': url,
        'twitter:url': url,
        'og:title': meta.title,
        'og:image:alt': meta.title,
        'twitter:title': meta.title,
        'og:description': meta.description,
        'twitter:description': meta.description,
        'og:image': image,
        'twitter:image:src': image,
      };

      let html = template;
      for (const [key, value] of Object.entries(values)) {
        html = setMeta(html, key, value);
      }
      html = html.replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`);

      const target = outputPath(clientDir, path);
      await mkdir(dirname(target), { recursive: true });
      await writeFile(target, html, 'utf-8');
      prerendered.push(path);
    }

    console.log(`Prerendered ${prerendered.length} routes with OG images: ${prerendered.join(', ')}`);
  } finally {
    await browser.close();
    server.close();
  }
}
