import { Request, Response } from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ChunkExtractor } from '@loadable/server';
import { HttpStatusCode } from '@cutting/util';
import { StaticRouter, StaticRouterContext } from 'react-router';
import { Routes } from '../routes';
import path from 'path';

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

  const html = renderToString(
    extractor.collectChunks(
      <StaticRouter location={req.url} context={context}>
        <Routes />
      </StaticRouter>,
    ),
  );

  res.status(HttpStatusCode.Ok).send(`
    <!doctype html>
    <html lang="en">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        ${extractor.getStyleTags()}   
      </head>
      <body>
        <div id="root">${html}</div>
        ${extractor.getScriptTags()}
      </body>
    </html>
  `);
}
