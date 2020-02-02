import { Request, Response } from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerLocation } from '@reach/router';
import { App } from '../containers/App';
import { HttpStatusCode } from '@cutting/util';

const assets = require(process.env.CUTTING_ASSETS_MANIFEST as string);

export interface RendererOptions {
  req: Request;
  res: Response;
}

export async function render(options: RendererOptions): Promise<void> {
  const { req, res } = options;

  const context: { url?: string } = {};

  const ServerApp: React.ReactElement = (
    <ServerLocation url={req.url}>
      <App />
    </ServerLocation>
  );

  if (context.url) {
    res.writeHead(301, {
      Location: context.url,
    });

    res.end();

    return;
  }

  const appString = renderToString(ServerApp);

  const scriptTags = ['vendor', 'client']
    .filter(k => !!assets[k]?.js)
    .map(k => `<script src="${assets[k].js}" defer crossorigin></script>`)
    .join('\n');

  res.status(HttpStatusCode.Ok).send(`
    <!doctype html>
    <html lang="en">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        ${`<link rel="stylesheet" href="${assets.client.css}">`}
        <title>Payments</title>
      </head>
      <body>
        <div id="root">${appString}</div>
        ${scriptTags}
      </body>
    </html>
`);
}
