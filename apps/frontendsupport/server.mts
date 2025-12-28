import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { assert } from '@cutting/assert';
import compression from 'compression';
import express from 'express';
import helmet from 'helmet';
import noCache from 'nocache';
import referrerPolicy from 'referrer-policy';
import serveStatic from 'serve-static';
import type { ViteDevServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const isTest = process.env.NODE_ENV === 'test' || !!process.env.VITE_TEST_BUILD;
const isProd = process.env.NODE_ENV === 'production';
const PORT = Number(process.env.PORT ?? 3001);

const root = process.cwd();

export async function createServer(): Promise<{
  app: ReturnType<typeof express>;
  vite: ViteDevServer | undefined;
}> {
  const resolve = (p: string) => path.resolve(__dirname, p);

  const indexProd = isProd ? fs.readFileSync(resolve('dist/client/index.html'), 'utf-8') : '';

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
          usePolling: true,
          interval: 100,
        },
      },
      appType: 'custom',
    });
    app.use(vite.middlewares);
  } else {
    app.use(compression({ level: 1 }));
    app.use(
      serveStatic(resolve('dist/client'), {
        index: false,
      }),
    );
  }

  if (isProd) {
    app.use(helmet({ crossOriginEmbedderPolicy: false }));
    app.use(noCache());
    app.use(referrerPolicy({ policy: 'no-referrer' }));
    app.use(helmet.hidePoweredBy());
  }

  app.use('*', async (req, res) => {
    try {
      const url = req.originalUrl;

      let template, render;
      if (!isProd) {
        assert(!!vite, 'no vite');
        template = fs.readFileSync(resolve('index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;
      } else {
        template = indexProd;
        render = (await import('./dist/server/entry-server.js')).render;
      }

      const appHtml = render(url);

      const html = template.replace('<!--app-html-->', appHtml);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      if (e instanceof Error) {
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
