import { Express } from 'express';
import http from 'http';
import proxy from 'http-proxy-middleware';
import { info } from '@ds/node-util';
import { config } from '../../config';
import { environments } from '@ds/util';
import chalk from 'chalk';

const env = process.env.NODE_ENV || environments.development;

export const filter = (pathname: string, req: http.IncomingMessage): bool => {
  const accept = req.headers.accept;

  if (!accept) {
    return false;
  }

  return accept.indexOf('application/json') > -1;
};

// set up proxying for all requests that are not text/html
export const prepareProxy = (app: Express): void => {
  Object.keys(config[env].api).forEach(key => {
    const apiEndpoint = config[env].api[key];

    info(chalk.cyan(`configuring proxy for ${key}`));

    const apiProxy = proxy(filter, { ...apiEndpoint });

    app.use(key, apiProxy);
  });
};
