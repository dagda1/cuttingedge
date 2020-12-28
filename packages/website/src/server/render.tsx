import { Request, Response } from 'express';
import { renderToString } from 'react-dom/server';
import { ChunkExtractor } from '@loadable/server';
import { HttpStatusCode, isProduction } from '@cutting/util';
import { StaticRouter, StaticRouterContext } from 'react-router';
import { Routes } from '../routes';
import path from 'path';
import { Helmet } from 'react-helmet';
import { GATagManager } from 'src/components/ga-tagmanager';

const gaId = 'UA-146837410-1';

export interface RendererOptions {
  req: Request;
  res: Response;
}

const statsFile = path.resolve(process.cwd(), 'dist/loadable-stats.json');

export async function render({ req, res }: RendererOptions): Promise<void> {
  const extractor = new ChunkExtractor({
    entrypoints: ['client'],
    statsFile,
  });

  const context: StaticRouterContext = {};

  const helmet = Helmet.renderStatic();

  const app = (
    <html lang="en" {...helmet.htmlAttributes.toComponent()}>
      <head lang="en">
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0"
        />
        {helmet.meta.toComponent()}
        {helmet.link.toComponent()}
        {helmet.title.toComponent()}
        {extractor.getStyleElements()}
        {isProduction && <GATagManager gaId={gaId} />}
      </head>
      <body {...helmet.bodyAttributes.toComponent()}>
        <div id="root">
          <StaticRouter location={req.url} context={context}>
            <Routes />
          </StaticRouter>
        </div>
      </body>
      {extractor.getScriptElements()}
    </html>
  );

  const appString = renderToString(extractor.collectChunks(app));

  res.status(HttpStatusCode.Ok).send(`
    <!doctype html>
    ${appString}
  `);
}
