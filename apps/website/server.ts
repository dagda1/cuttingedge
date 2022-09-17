import type { Request, Response, NextFunction } from 'express';
import fs from 'fs/promises';
import path from 'path';
import express from 'express';
import compression from 'compression';
import serveStatic from 'serve-static';
import { createServer as createViteServer } from 'vite';
import { fileURLToPath } from 'url';
import { HttpStatusCode } from '@cutting/util';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isTest = process.env.NODE_ENV === 'test' || !!process.env.VITE_TEST_BUILD;
const isProduction = process.env.NODE_ENV === 'production';

const rootDir = process.cwd();

const publicDir = path.join(rootDir, isProduction ? 'dist/public' : 'public');

const resolve = (p: string) => path.resolve(__dirname, p);

const getStyleSheets = async () => {
  const assetpath = resolve('dist/assets');
  const files = await fs.readdir(assetpath);
  const cssAssets = files.filter((l) => l.endsWith('.css'));
  const allContent: string[] = [];
  for (const asset of cssAssets) {
    const content = await fs.readFile(path.join(assetpath, asset), 'utf-8');
    allContent.push(`<style type="text/css">${content}</style>`);
  }
  return allContent.join('\n');
};

const PORT = Number(process.env.PORT ?? 3000);

async function createServer(isProd = process.env.NODE_ENV === 'production') {
  const app = express();
  const vite = await createViteServer({
    server: { middlewareMode: true, port: PORT },
    appType: 'custom',
    logLevel: isTest ? 'error' : 'info',
  });

  app.use(vite.middlewares);
  const requestHandler = express.static(resolve('assets'));
  app.use(requestHandler);
  app.use('/assets', requestHandler);

  if (isProd) {
    app.use(compression());
    app.use(
      serveStatic(resolve('dist/client'), {
        index: false,
      }),
    );
  }
  const stylesheets = getStyleSheets();

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

  app.use('*', async (req: Request, res: Response, next: NextFunction) => {
    const url = req.originalUrl;

    try {
      let template = await fs.readFile(isProd ? resolve('dist/client/index.html') : resolve('index.html'), 'utf-8');

      template = await vite.transformIndexHtml(url, template);

      const productionBuildPath = path.join(__dirname, './dist/server/entry-server.mjs');
      const devBuildPath = path.join(__dirname, './src/client/entry-server.tsx');
      const { render } = await vite.ssrLoadModule(isProd ? productionBuildPath : devBuildPath);

      const appHtml = await render(url);
      const cssAssets = isProd ? '' : await stylesheets;

      const html = template.replace(`<!--app-html-->`, appHtml).replace(`<!--head-->`, cssAssets);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      if (e instanceof Error) {
        !isProd && vite.ssrFixStacktrace(e);
        console.log(e.stack);
        // If an error is caught, let Vite fix the stack trace so it maps back to
        // your actual source code.
        vite.ssrFixStacktrace(e);
      }

      next(e);
    }
  });
  const port = process.env.PORT || 7456;
  app.listen(Number(port), '0.0.0.0', () => {
    console.log(`App is listening on http://localhost:${port}`);
  });
}

createServer();
