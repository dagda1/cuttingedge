import { createServer } from 'node:http';
import type { AddressInfo } from 'node:net';

import express from 'express';
import { mkdir, readFile, writeFile } from 'fs/promises';
import { dirname, join } from 'path';
import puppeteer from 'puppeteer';
import serveStatic from 'serve-static';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const clientDir = join(__dirname, '../dist/client');
const ogDir = join(clientDir, 'og');

const VIEWPORT = { width: 1200, height: 630 };

async function slugs(): Promise<string[]> {
  const list = JSON.parse(await readFile(join(clientDir, 'posts', 'posts-list.json'), 'utf-8')) as Array<{
    slug: string;
  }>;
  return list.map((post) => post.slug);
}

async function generate(): Promise<void> {
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
    await mkdir(ogDir, { recursive: true });
    const posts = await slugs();

    for (const slug of posts) {
      const page = await browser.newPage();
      await page.setViewport(VIEWPORT);
      await page.goto(`http://localhost:${port}/posts/${slug}/`, { waitUntil: 'networkidle0', timeout: 50000 });
      const screenshot = await page.screenshot({ type: 'png' });
      await writeFile(join(ogDir, `${slug}.png`), screenshot);
      await page.close();
    }

    console.log(`Generated ${posts.length} OG images`);
  } finally {
    await browser.close();
    server.close();
  }
}

generate().catch((error) => {
  console.error(error);
  process.exit(1);
});
