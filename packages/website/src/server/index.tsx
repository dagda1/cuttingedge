import * as React from 'react';
import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
import { routes } from '../routes';
import * as helmet from 'helmet';
import * as bodyParser from 'body-parser';
import { HttpStatusCode, isProduction, error } from '@cutting/util';
import { render } from './render';
/* import * as favicon from 'serve-favicon'; */
import * as path from 'path';
import { Assets } from 'assets-webpack-plugin';
import configureStore from '../store';
import { history } from '../routes/history';
import { LayoutProps } from './types';
import { Store } from 'redux';
import { Provider } from 'react-redux';

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
  /* app.use(favicon(path.join(__dirname, publidDir, 'favicon.ico'))); */

  app.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", 'data:']
      }
    })
  );
}

const createConnectedLayout = (store: Store): React.SFC<LayoutProps> => ({ location, children }) => (
  <Provider store={store}>{children}</Provider>
);

app.get('/*', async (req, res) => {
  const preloadedState = {};

  const store = configureStore(preloadedState, history);

  const html = await render({
    req,
    res,
    routes,
    assets,
    Layout: createConnectedLayout(store)
  });

  res.send(html);
});

const errorHandler = (err: Error, _: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err);
  }

  error(err);

  res.status(HttpStatusCode.InternalServerError).send('Internal Error');
};

app.use(errorHandler);

process.on('unhandledRejection', (err) => {
  error(err);
  throw err;
});
