import { Request, Response } from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ChunkExtractor } from '@loadable/server';
import { HttpStatusCode, isProduction } from '@cutting/util';
import { StaticRouter, StaticRouterContext } from 'react-router';
import { Routes } from '../routes';
import path from 'path';
import { Helmet } from 'react-helmet';

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

  const helmet = Helmet.renderStatic();

  const gaScript = isProduction
    ? `
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-146837410-1"></script>
  <script>
  window.dataLayer = window.dataLayer || [];
  gtag('js', new Date());
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-146837410-1');

  function insertCallback(parent, funcname, callback, ...args) {
    let oldFunc = parent[funcname] ? parent[funcname] : function () { }
    parent[funcname] = function () {
      oldFunc.apply(this, arguments)
      return callback(...args)
    }
  }

  function notify_analytics(l) {
    let newPage = l.pathname + l.hash
     // replace UA-146837410-1 into your id
     gtag('config', 'UA-146837410-1', { 'page_path': newPage }); 
   }

   insertCallback(window.history, "pushState", notify_analytics, location)
   insertCallback(window.history, "replaceState", notify_analytics, location)
  </script>
  `
    : '';

  res.status(HttpStatusCode.Ok).send(`
    <!doctype html>
    <html lang="en" ${helmet.htmlAttributes.toString()}>
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        ${gaScript}
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        ${extractor.getStyleTags()}   
      </head>
      <body ${helmet.bodyAttributes.toString()}>
        <div id="root">${html}</div>
        ${extractor.getScriptTags()}
      </body>
    </html>
  `);
}
