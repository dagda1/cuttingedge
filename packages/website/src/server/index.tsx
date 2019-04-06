import React from 'react';
import express from 'express';
import { Request, Response, NextFunction } from 'express';
import { componentRoutes } from '../routes';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import { HttpStatusCode, isProduction } from '@cutting/util';
import { render } from './render';
import favicon from 'serve-favicon';
import path from 'path';
import { Assets } from 'assets-webpack-plugin';
import configureStore from '../store';
import { history } from '../routes/history';
import { LayoutProps } from './types';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import fs from 'fs';

const assets: Assets = require(process.env.CUTTING_ASSETS_MANIFEST as string) as Assets;

const referrerPolicy = require('referrer-policy');

export const app = express();

app.use(helmet());
app.use(helmet.noCache());

app.use(referrerPolicy({ policy: 'no-referrer' }));
app.use(helmet.hidePoweredBy());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const publidDir = path.join(process.cwd(), isProduction ? 'dist/public' : 'public');

app.use(express.static(publidDir));

if (isProduction) {
  app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

  app.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'"],
        imgSrc: ["'self'", 'data:']
      }
    })
  );
}

const createConnectedLayout = (store: Store): React.SFC<LayoutProps> => ({ location, children }) => (
  <Provider store={store}>{children}</Provider>
);

app.get('/cv', (req, res) => {
  const CVFile = 'paulcowan-cv.pdf';
  const pdfPath = path.join(process.cwd(), 'src', 'server', 'assets', CVFile);

  res.status(200).download(pdfPath, CVFile, (err) => {
    console.log(err);
  });
});

app.get('/*', async (req, res, next) => {
  const preloadedState = {};

  const store = configureStore(preloadedState, history);

  const html = await render({
    req,
    res,
    routes: componentRoutes,
    assets,
    Layout: createConnectedLayout(store)
  });

  res.send(html);
});

const errorHandler = (err: Error, _: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err);
  }

  console.error(err);

  res.status(HttpStatusCode.InternalServerError).send('Internal Error');
};

app.use(errorHandler);

process.on('unhandledRejection', (err) => {
  console.error(err);
  throw err;
});
