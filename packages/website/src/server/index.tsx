import * as React from 'react';
import 'react-universal-component/server';
import { flushChunkNames } from 'react-universal-component/server';
import { renderToString } from 'react-dom/server';
import flushChunks from 'webpack-flush-chunks';
import { App } from '../shared/components/App/App';
import { StaticRouter } from 'react-router-dom';
import { Request, Response } from 'express';
import configureStore from '../store';
import selectedHistory from '../shared/history';

console.log('***************');
try {
  console.log(__dirname);
  console.log(flushChunks);
  console.log(flushChunkNames);
  console.log(renderToString);
} catch (e) {
  console.log(e);
}

console.log('***************');

/**
 * Provides the server side rendered app. In development environment, this method is called by
 * `react-hot-server-middleware`.
 *
 * This method renders the ejs template `public/views/index.ejs`.
 *
 * @param clientStats Parameter passed by hot server middleware
 */
export default ({ clientStats }: { clientStats: any }) => async (req: Request, res: Response) => {
  const store = configureStore({}, selectedHistory());
  const context = {};

  const app = (
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  const appString = renderToString(app);
  const chunkNames = flushChunkNames();
  const { js, styles, cssHash } = flushChunks(clientStats, { chunkNames });

  res.status(200);

  res.render('index', {
    appString,
    js,
    styles,
    cssHash
  });
};
