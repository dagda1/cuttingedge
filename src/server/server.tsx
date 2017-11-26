import * as path from 'path';
import * as http from 'http';
import * as Express from 'express';
import * as React from 'react';
import * as webppack from 'webpack';
import { StaticRouter } from 'react-router';
import { render } from './render';
import * as App from '../components/App/App';
import * as webpack from 'webpack';
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
const clientConfig = require('.../webpack/client.dev.js');
const serverConfig = require('../webpack/server.dev.js');

const publicPath = clientConfig.output.publicPath;

const app = Express();

let isBuilt = false;

const port = process.env.port || 3000;

const done = () =>
  !isBuilt &&
  http.createServer(app).listen(port, () => {
    isBuilt = true;
    console.log('BUILD COMPLETE -- Listening @ http://localhost:3000');
  });

const compiler = webpack([clientConfig, serverConfig]);
const clientCompiler = compiler.compilers[0];
const options = { publicPath, stats: { colors: true } };

app.use(webpackDevMiddleware(compiler, options));
app.use(webpackHotMiddleware(clientCompiler));
app.use(webpackHotServerMiddleware(compiler));

compiler.plugin('done', done);

app.get('/*', (req, res) => {
  const context = {};

  const appWithRouter: any = (
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );
});
