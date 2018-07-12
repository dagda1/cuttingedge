import * as express from 'express';
import { Express } from 'express';
import { join } from 'path';
import { log } from 'winston';
import * as path from 'path';
import * as helmet from 'helmet';
import * as shrinkRay from 'shrink-ray';

const webPackClient = require('@cutting/devtools/webpack/client');
const webPackServer = require('@cutting/devtools/webpack/server');

const configureDevelopment = (app: any) => {
  const clientConfig = webPackClient.configure({
    entries: path.join(process.cwd(), 'src/client/index')
  });

  const publicPath = clientConfig.output.publicPath;
  const outputPath = clientConfig.output.path;

  const serverConfig = webPackServer.configure({
    entries: path.join(process.cwd(), 'src/server/index'),
    filename: 'server.js'
  });

  const multiCompiler = require('webpack')([clientConfig, serverConfig]);
  const clientCompiler = multiCompiler.compilers.find((compiler: any) => compiler.name === 'client');

  app.use(require('webpack-hot-middleware')(clientCompiler));
  app.use(require('webpack-dev-middleware')(multiCompiler, { serverSideRender: true }));

  app.use(publicPath, express.static(outputPath));

  app.use(
    require('webpack-hot-server-middleware')(multiCompiler, {
      serverRendererOptions: { outputPath }
    })
  );

  app.set('views', join(process.cwd(), './public/views'));
};

const configureProduction = (app: Express) => {
  const clientStats = require('./stats.json');
  const serverRender = require('./server.js').default;
  const publicPath = '/';
  const outputPath = join(process.cwd(), '.');

  app.use(publicPath, express.static(outputPath));
  app.use(
    serverRender({
      clientStats,
      outputPath
    })
  );

  app.set('views', join(process.cwd(), './views'));
};

const app = express();

app.disable('x-powered-by');

const isDevelopment = process.env.NODE_ENV === 'development';

log('info', `Configuring server for environment: ${process.env.NODE_ENV}...`);
app.use(helmet());
app.use(
  shrinkRay({
    filter: () => !isDevelopment
  })
);

app.disable('x-powered-by');

if (isDevelopment) {
  configureDevelopment(app);
} else {
  configureProduction(app);
}

log('info', 'Configuring server engine...');
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');

app.listen(app.get('port'), () => log('info', `Server listening on port ${app.get('port')}...`));
