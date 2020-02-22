import express from 'express';
import { Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import { HttpStatusCode, isProduction } from '@cutting/util';
import { render } from './render';
import path from 'path';
import favicon from 'serve-favicon';
import { Exception } from '../errors/Exception';

const referrerPolicy = require('referrer-policy');

export const app = express();

app.use(helmet());
app.use(helmet.noCache());

app.use(referrerPolicy({ policy: 'no-referrer' }));
app.use(helmet.hidePoweredBy());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const publicDir = 'public';

app.use(express.static(path.join(process.cwd(), publicDir)));

if (isProduction) {
  app.use(favicon(path.join(__dirname, 'favicon.ico')));

  app.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'"],
        imgSrc: ["'self'", 'data:'],
        fontSrc: ["'self'", 'data:'],
      },
      browserSniff: false,
    }),
  );
}

app.get('/*', async (req, res) => {
  await render({
    req,
    res,
  });
});

const errorHandler = (err: Exception, req: Request, res: Response, next: NextFunction): void => {
  if (res.headersSent) {
    return next(err);
  }

  console.error(err);

  res.status(err.status || HttpStatusCode.InternalServerError).send(err.message || 'Internal Error');
};

app.use(errorHandler);

process.on('unhandledRejection', err => {
  if (!err) {
    return;
  }

  console.error(err);
  throw err;
});
