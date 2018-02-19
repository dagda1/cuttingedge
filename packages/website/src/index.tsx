import * as express from 'express';
import { join } from 'path';
import { log } from 'winston';
import * as path from 'path';

const configureDevelopment = (app: any) => {
  const clientConfig = require('../../../webpack/client').configure({
    entryPoint: path.join(process.cwd(), 'src/client/index')
  });

  const publicPath = clientConfig.output.publicPath;
  const outputPath = clientConfig.output.path;

  const serverConfig = require('../../../webpack/server').configure({
    entryPoint: path.join(process.cwd(), 'src/server/index'),
    filename: 'server.js'
  });

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

  app.set('views', join(process.cwd(), './public/views'));
};

const configureProduction = (app: any) => {
  const rootDir = path.join(process.cwd(), 'dist');
  const clientStatsPath = path.join(rootDir, 'stats.json');
  const serverRenderPath = path.join(rootDir, 'server.js');

  console.log('-------------------');
  console.log('process.cwd() = ${process.cwd()}');
  console.log(`rootDir = ${rootDir}`);
  console.log(`clientStatsPath = ${clientStatsPath}`);
  console.log(`serverRenderPath = ${serverRenderPath}`);
  console.log('-------------------');

  console.log('about to make it hererere');

  const clientStats = require(clientStatsPath);

  console.log('made it hererere');
  const serverRender = require(serverRenderPath).default;
  const publicPath = '/';
  const outputPath = join(__dirname, 'dist');

  app.use(publicPath, express.static(outputPath));
  app.use(
    serverRender({
      clientStats,
      outputPath
    })
  );

  app.set('views', join(__dirname, '../dist/  views'));
};

const app = express();

if (process.env.NODE_ENV === 'development') {
  configureDevelopment(app);
} else {
  configureProduction(app);
}

log('info', 'Configuring server engine...');
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => log('info', `Server listening on port ${app.get('port')}...`));
