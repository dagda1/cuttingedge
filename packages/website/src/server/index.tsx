import * as React from 'react';
import 'react-universal-component/server';
import { flushChunkNames } from 'react-universal-component/server';
import { renderToString } from 'react-dom/server';
import flushChunks from 'webpack-flush-chunks';
import { StaticRouter, Route } from 'react-router-dom';
import { Request, Response } from 'express';
import configureStore from '../store';
import history from '../routes/history';

import { Provider } from 'react-redux';
import { Switch } from 'react-router';
import { pages } from '../routes';

/**
 * Provides the server side rendered app. In development environment, this method is called by
 * `react-hot-server-middleware`.
 *
 * This method renders the ejs template `public/views/index.ejs`.
 *
 * @param clientStats Parameter passed by hot server middleware
 */
export default ({ clientStats }: { clientStats: any }) => async (req: Request, res: Response) => {
  const store = configureStore({}, history);
  const context: any = { store };

  const app = (
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <Switch>
          <>
            {pages.map(page => (
              <Route key={page.path} path={page.path} component={page.component} exact={page.exact} />
            ))}
          </>
        </Switch>
      </StaticRouter>
    </Provider>
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
