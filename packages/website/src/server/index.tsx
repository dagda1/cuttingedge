import * as React from 'react';
import { flushChunkNames } from 'react-universal-component/server';
import { renderToString } from 'react-dom/server';
import flushChunks from 'webpack-flush-chunks';
import { App } from '../shared/App/App';

console.log('***************');
try {
  console.log(__dirname);
  console.log(flushChunks);
  console.log(flushChunkNames);
  console.log(renderToString);
  console.log(require('webpack-flush-chunks'));
  console.log(require('react-dom').hydrate);
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
export default ({ clientStats }: { clientStats: any }) => async (req: any, res: any) => {
  const app = <App />;

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
