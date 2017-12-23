import * as React from 'react';
import { renderToString } from 'react-dom/server';
import 'react-universal-component';
import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';

import { App } from '../shared/App/App';
import { Request, Response } from 'express-serve-static-core';

/**
 * Provides the server side rendered app. In development environment, this method is called by
 * `react-hot-server-middleware`.
 *
 * This method renders the ejs template `public/views/index.ejs`.
 *
 * @param clientStats Parameter passed by hot server middleware
 */
export default ({ clientStats }: { clientStats: any }) => async (req: Request, res: Response) => {
  const app = <App />;

  console.log('-----------');
  console.log(renderToString);
  console.log('-----------');

  const appString = renderToString(app);
  const chunkNames = flushChunkNames();
  const { js, styles, cssHash } = flushChunks(clientStats, { chunkNames });

  res.render('index', {
    appString,
    js,
    styles,
    cssHash
  });
};
