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
import Helmet from 'react-helmet';

/**
 * Provides the server side rendered app. In development environment, this method is called by
 * `react-hot-server-middleware`.
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

  const chunkNames = flushChunkNames();
  const chunks = flushChunks(clientStats, { chunkNames });

  const { js, styles } = chunks;

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
        ${js}
      </body>
    </html>
`);
};
