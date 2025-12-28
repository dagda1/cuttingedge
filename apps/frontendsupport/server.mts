import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { assert } from '@cutting/assert';
import express, { urlencoded } from 'express';
import { mkdir, readFile, writeFile } from 'fs/promises';
import helmet, { contentSecurityPolicy } from 'helmet';
import noCache from 'nocache';
import puppeteer from 'puppeteer';
import referrerPolicy from 'referrer-policy';
import type { ViteDevServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const isTest = process.env.NODE_ENV === 'test' || !!process.env.VITE_TEST_BUILD;
const isProd = process.env.NODE_ENV === 'production';
const PORT = Number(process.env.PORT ?? 3001);

process.env.MY_CUSTOM_SECRET = 'API_KEY_qwertyuiop';

const root = process.cwd();

const defaultViewport = {
  height: 630,
  width: 1200,
};

export async function createServer(): Promise<{
  app: ReturnType<typeof express>;
  vite: ViteDevServer | undefined;
}> {
  const resolve = (p: string) => path.resolve(__dirname, p);

  const indexProd = isProd ? fs.readFileSync(resolve('client/index.html'), 'utf-8') : '';

  const app = express();

  let vite: ViteDevServer | undefined = undefined;
  if (!isProd) {
    vite = await (
      await import('vite')
    ).createServer({
      root,
      logLevel: isTest ? 'error' : 'info',
      server: {
        middlewareMode: true,
        watch: {
          // During tests we edit the files too fast and sometimes chokidar
          // misses change events, so enforce polling for consistency
          usePolling: true,
          interval: 10,
        },
      },
      appType: 'custom',
    });
    // use vite's connect instance as middleware
    app.use(vite.middlewares);
  } else {
    app.use((await import('compression')).default({ level: 1 }));
    app.use(
      (await import('serve-static')).default(resolve('client'), {
        index: false,
      }),
    );
  }

  if (isProd) {
    app.use(helmet({ crossOriginEmbedderPolicy: false }));
    app.use(noCache());
    app.use(referrerPolicy({ policy: 'no-referrer' }));
    app.use(helmet.hidePoweredBy());
    app.use(urlencoded({ extended: false }));
    app.use(
      contentSecurityPolicy({
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", 'https://plausible.io'],
          connectSrc: ["'self'", 'https://plausible.io', 'http://localhost', 'https://frontendrescue.scot'],
          styleSrc: ["'self'", "'unsafe-inline'", 'https://esm.sh', 'https://fonts.googleapis.com'],
          imgSrc: [
            "'self'",
            'data:',
            'https://plausible.io',
            'https://frontendrescue.scot',
            'https://res.cloudinary.com',
          ],
          fontSrc: ["'self'", 'data:', 'https://fonts.gstatic.com', 'https://fonts.googleapis.com'],
          objectSrc: ["'self'", 'blob:'],
          frameSrc: ["'self'", 'https://www.formlets.com'],
          manifestSrc: ['data:'],
        },
      }),
    );
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  app.get('/og-image', async (req, res) => {
    const isContainer = process.env.OS_ENV === 'container';
    const url = req.query.url;

    if (typeof url !== 'string') {
      return res.status(400).send('Missing URL parameter');
    }

    try {
      const slug = new URL(url).pathname.replace(/\//g, '') || 'home';

      const ogCache = path.join(process.cwd(), '.cache', 'ogimages');
      const imagePath = `${ogCache}/${slug}_ogimage.png`;
      const pptrCache = path.join(process.cwd(), '.cache', 'pptr');
      await Promise.all([
        mkdir(pptrCache, { recursive: true }).catch(() => {}),

        mkdir(ogCache, { recursive: true }).catch(() => {}),
      ]);

      const cachedImage = await readFile(imagePath).catch(() => {});

      if (cachedImage) {
        console.log('cached');
        res.setHeader('Content-Type', 'image/png');
        res.send(cachedImage);
        return;
      }

      const launchBrowser = puppeteer.launch({
        headless: true,
        args: [
          '--font-render-hinting=none',
          '--disable-dev-shm-usage',
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-extensions',
        ],
        userDataDir: pptrCache,
        ...(isContainer && { executablePath: 'google-chrome-stable' }),
      });
      const browser = await launchBrowser;
      const page = await browser.newPage();

      await page.setCacheEnabled(false);

      await page.setViewport(defaultViewport);

      await page.setUserAgent(
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.5735.198 Safari/537.36',
      );

      await page.setCacheEnabled(false);

      await page.goto(url as string, { waitUntil: 'networkidle0', timeout: 50000 });

      const element = await page.$('#root');

      if (!element) {
        res.status(500).send('Error occurred while generating OG image');
        return;
      }

      const boundingBox = await element.boundingBox();

      if (!boundingBox) {
        console.error("Could'nt get element.boundingBox");
        res.status(500).send('Error occurred while generating OG image');
        return;
      }

      const screenshot = await page.screenshot({
        type: 'png',
        clip: { ...boundingBox, height: boundingBox.height },
      });

      await element.dispose();
      await browser.close();

      // const final = await sharp(screenshot).resize({ width: 1200, height: 630 }).toBuffer();

      await writeFile(imagePath, screenshot);

      res.setHeader('Content-Type', 'image/png');
      res.send(screenshot);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error occurred while generating OG image');
    }
  });

  app.use('/{*splat}', async (req, res) => {
    try {
      const url = req.originalUrl;

      const baseUrl = `${req.protocol}://${req.get('host')}`;
      const ogUrl = `${baseUrl}${req.originalUrl}`;
      const ogImage = `${baseUrl}/og-image?url=${encodeURI(ogUrl)}`;

      let template, render;
      if (!isProd) {
        assert(!!vite, `no vite`);
        // always read fresh template in dev
        template = fs.readFileSync(resolve('index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;
      } else {
        template = indexProd;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        render = (await import('./server/entry-server.js')).render;
      }

      const context: { url?: string } = {};
      const appHtml = render(url, context);

      if (context.url) {
        // Somewhere a `<Redirect>` was rendered
        return res.redirect(301, context.url);
      }

      const html = template
        .replace(`<!--app-html-->`, appHtml)
        .replace(/\@url/g, ogUrl)
        .replace(/\@image/g, ogImage);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      if (e instanceof Error) {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        !isProd && vite?.ssrFixStacktrace(e);
        console.log(e.stack);
        res.status(500).end(e.stack);
      } else {
        console.error(e);
        res.status(500).end('Internal Server Error');
      }
    }
  });

  return { app, vite };
}

if (!isTest) {
  createServer().then(({ app }) =>
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    }),
  );
}
