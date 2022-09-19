import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import type { ViteDevServer } from 'vite';
import { assert } from 'assert-ts';
import { HttpStatusCode } from '@cutting/util';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const isTest = process.env.NODE_ENV === 'test' || !!process.env.VITE_TEST_BUILD;
const isProd = process.env.NODE_ENV === 'production';
const PORT = Number(process.env.PORT ?? 3000);

process.env.MY_CUSTOM_SECRET = 'API_KEY_qwertyuiop';

const root = process.cwd();

const publicDir = path.join(root, isProd ? 'dist/server' : 'public');

export async function createServer(hmrPort?: number): Promise<{
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
          interval: 100,
        },
        hmr: {
          port: hmrPort,
        },
      },
      appType: 'custom',
    });
    // use vite's connect instance as middleware
    app.use(vite.middlewares);
  } else {
    app.use((await import('compression')).default());
    app.use(
      (await import('serve-static')).default(resolve('client'), {
        index: false,
      }),
    );
  }

  app.get('/download-pdf', (_, res) => {
    const CVFile = 'paulcowan-cv.pdf';
    const pdfPath = ['', publicDir, 'assets', CVFile].join('/');

    res.status(HttpStatusCode.Ok).download(pdfPath, CVFile, (err) => {
      if (!err) {
        return;
      }

      console.log(err);
    });
  });

  app.get('/download-word-doc', (_, res) => {
    const WordDoc = 'paulcowan-cv.docx';
    const wordDocPath = ['', publicDir, 'assets', WordDoc].join('/');

    res.status(HttpStatusCode.Ok).download(wordDocPath, WordDoc, (err) => {
      if (!err) {
        return;
      }

      console.log(err);
    });
  });

  app.use('*', async (req, res) => {
    try {
      const url = req.originalUrl;

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

      const html = template.replace(`<!--app-html-->`, appHtml);

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
