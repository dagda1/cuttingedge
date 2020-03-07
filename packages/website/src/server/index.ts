import express from 'express';
import { Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import { HttpStatusCode, isProduction } from '@cutting/util';
import { render } from './render';
import path from 'path';
import favicon from 'serve-favicon';
import { Exception } from '../errors/Exception';
import { contentSecurityPolicy } from 'helmet';

const referrerPolicy = require('referrer-policy');

export const app = express();

const rootDir = process.cwd();

const publicDir = path.join(rootDir, isProduction ? 'dist/public' : 'public');

app.use(express.static(publicDir));

app.use(helmet());
app.use(helmet.noCache());

app.use(referrerPolicy({ policy: 'no-referrer' }));
app.use(helmet.hidePoweredBy());
app.use(express.static(process.env.CUTTING_ASSETS_MANIFEST as string));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (isProduction) {
  app.use(favicon(path.join(publicDir, 'favicon.ico')));
  app.use(
    contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'"],
        imgSrc: ["'self'", 'data:'],
        fontSrc: ["'self'", 'data:'],
        objectSrc: ["'self'", 'blob:'],
        frameSrc: ["'self'"],
      },
    }),
  );
}

app.get('/download', (req, res) => {
  const CVFile = 'paulcowan-cv.pdf';
  const pdfPath = ['', publicDir, 'assets', CVFile].join('/');

  res.status(HttpStatusCode.Ok).download(pdfPath, CVFile, err => {
    if (!err) {
      return;
    }

    console.log(err);
  });
});

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
