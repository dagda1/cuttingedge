import * as express from 'express';
import { join } from 'path';
import { log } from 'winston';
import * as path from 'path';

const configureDevelopment = (app: any) => {
  const clientConfig = require('../../../webpack/client').configure({
    entryPoint: path.join(process.cwd(), 'src/client/index')
  });
  const serverConfig = require('../../../webpack/server').configure();
  const publicPath = clientConfig.output.publicPath;
  const outputPath = clientConfig.output.path;

  const multiCompiler = require('webpack')([clientConfig, serverConfig]);
  const clientCompiler = multiCompiler.compilers.find((compiler: any) => compiler.name === 'client');

  app.use(require('webpack-dev-middleware')(multiCompiler, { serverSideRender: true }));
  app.use(require('webpack-hot-middleware')(clientCompiler));

  app.use(publicPath, express.static(outputPath));

  app.use(
    require('webpack-hot-server-middleware')(multiCompiler, {
      serverRendererOptions: { outputPath }
    })
  );

  app.set('views', join(__dirname, '../public/views'));
};

const configureProduction = (app: any) => {
  const clientStats = require('./assets/stats.json');
  const serverRender = require('./assets/app.server').default;
  const publicPath = '/';
  const outputPath = join(__dirname, 'assets');

  app.use(publicPath, express.static(outputPath));
  app.use(
    serverRender({
      clientStats,
      outputPath
    })
  );

  app.set('views', join(__dirname, 'views'));
};

const app = express();

log('info', `Configuring server for environment: ${process.env.NODE_ENV}...`);

if (process.env.NODE_ENV === 'development') {
  configureDevelopment(app);
} else {
  configureProduction(app);
}

log('info', 'Configuring server engine...');
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => log('info', `Server listening on port ${app.get('port')}...`));
