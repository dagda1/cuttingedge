import express, { json, urlencoded } from 'express';
import type { Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import { HttpStatusCode, isProduction } from '@cutting/util';
import { render } from './render';
import path from 'path';
import favicon from 'serve-favicon';
import type { Exception } from '../errors/Exception';
import { contentSecurityPolicy } from 'helmet';
import noCache from 'nocache';
import referrerPolicy from 'referrer-policy';
import { DownloadPdf, DownloadWordDoc } from 'src/urls';
import { nonce } from './nonce';

export const app = express();

const rootDir = process.cwd();

const publicDir = path.join(rootDir, isProduction ? 'dist/public' : 'public');

app.use(express.static(publicDir));

if (isProduction) {
  app.use(helmet({ crossOriginEmbedderPolicy: false }));
  app.use(noCache());
  app.use(referrerPolicy({ policy: 'no-referrer' }));
  app.use(helmet.hidePoweredBy());
  app.use(urlencoded({ extended: false }));
  app.use(json());
  app.use(favicon(path.join(publicDir, 'favicon.ico')));
  app.use(
    contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'", 'https://covidapi.info/'],
        scriptSrc: [
          "'self'",
          "'unsafe-inline'",
          "'unsafe-eval'",
          'https://www.googletagmanager.com/',
          'https://www.formlets.com',
          'https://www.google-analytics.com',
          'https://www.trustlogo.com',
          'https://secure.trust-provider.com/',
          nonce,
        ],
        connectSrc: ['https://www.google-analytics.com', 'www.google-analytics.com', 'https://www.formlets.com'],
        styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
        imgSrc: [
          "'self'",
          'data:',
          'https://www.google-analytics.com',
          'https://www.googletagmanager.com/',
          'https://www.trustlogo.com',
          'https://secure.trust-provider.com/',
          'https://cutting.scot',
        ],
        fontSrc: ["'self'", 'data:', 'https://fonts.gstatic.com', 'https://fonts.googleapis.com'],
        objectSrc: ["'self'", 'blob:'],
        frameSrc: ["'self'", 'https://www.formlets.com'],
      },
    }),
  );
}

app.get(DownloadPdf, (_, res) => {
  const CVFile = 'paulcowan-cv.pdf';
  const pdfPath = ['', publicDir, 'assets', CVFile].join('/');

  res.status(HttpStatusCode.Ok).download(pdfPath, CVFile, (err) => {
    if (!err) {
      return;
    }

    console.log(err);
  });
});

app.get(DownloadWordDoc, (_, res) => {
  const WordDoc = 'paulcowan-cv.docx';
  const wordDocPath = ['', publicDir, 'assets', WordDoc].join('/');

  res.status(HttpStatusCode.Ok).download(wordDocPath, WordDoc, (err) => {
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

process.on('unhandledRejection', (err) => {
  if (!err) {
    return;
  }

  console.error(err);
  throw err;
});
