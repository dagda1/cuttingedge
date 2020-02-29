import { Request, Response } from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server';
import { HttpStatusCode } from '@cutting/util';
import { StaticRouter, StaticRouterContext } from 'react-router';
import { Routes } from '../routes';
import path from 'path';

export interface RendererOptions {
  req: Request;
  res: Response;
}

const rootDir = process.cwd();

export async function render({ req, res }: RendererOptions): Promise<void> {
  const extractor = new ChunkExtractor({
    entrypoints: ['client'],
    statsFile: path.resolve(rootDir, 'dist/loadable-stats.json'),
  });

  const context: StaticRouterContext = {};

  const html = renderToString(
    <ChunkExtractorManager extractor={extractor}>
      <StaticRouter location={req.url} context={context}>
        <Routes />
      </StaticRouter>
    </ChunkExtractorManager>,
  );

  res.status(HttpStatusCode.Ok).send(`
    <!doctype html>
    <html lang="en">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        ${extractor.getLinkTags()}
        ${extractor.getStyleTags()}   
      </head>
      <body>
        <div id="root">${html}</div>
        ${extractor.getScriptTags()}
      </body>
    </html>
`);
}
