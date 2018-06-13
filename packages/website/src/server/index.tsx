import * as React from 'react';
import 'react-universal-component/server';
import { flushChunkNames } from 'react-universal-component/server';
import { renderToString } from 'react-dom/server';
import flushChunks from 'webpack-flush-chunks';
import { StaticRouter, Route } from 'react-router-dom';
import { Request, Response, NextFunction } from 'express';
import configureStore from '../store';
import history from '../routes/history';
import { Provider } from 'react-redux';
import { Switch } from 'react-router';
import { pages } from '../routes';
import Helmet from 'react-helmet';
import { State } from '../reducers/types';
import * as serialize from 'serialize-javascript';
import { some } from 'lodash';

/**
 * Provides the server side rendered app. In development environment, this method is called by
 * `react-hot-server-middleware`.
 *
 * @param clientStats Parameter passed by hot server middleware
 */
export default ({ clientStats }: { clientStats: any }) => async (req: Request, res: Response, next: NextFunction) => {
  const preloadedState: State = {};

  const store = configureStore({}, history);

  const context: any = { store };

  // TODO: find a better way of filtering websocket hot reloading
  if (some(['sockjs', 'hot-update.json'], part => req.url.indexOf(part) > -1)) {
    next();
    return;
  }

  console.log('--------------------');
  console.log(req.url);
  console.log('--------------------');

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

  const { js, styles } = flushChunks(clientStats, {
    chunkNames: flushChunkNames()
  });

  const appString = renderToString(app);
  const { title } = Helmet.renderStatic();

  res.status(200).send(`
    <!doctype html>
    <html lang="en">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        ${styles}
        ${title}
      </head>
      <body>
        <div id="root">${appString}</div>
        <script>
          window.__PRELOADED_STATE__ = ${serialize(preloadedState)}
        </script>
        ${js}
      </body>
    </html>
`);
};
