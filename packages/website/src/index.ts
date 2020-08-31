import { app } from './server';
import http from 'http';
import { assert } from '@cutting/util';

const server = http.createServer(app);

let currentApp = app;

console.log(process.env.PORT);

assert(process.env.PORT, 'NO port set');

server.listen(process.env.PORT, () => {
  console.log(`🚀 started on http://localhost:${process.env.PORT}`);
});

if (module.hot) {
  console.log('✅  Server-side HMR Enabled!');

  module.hot.accept('./server', () => {
    console.log('🔁  HMR Reloading `./server`...');
    server.removeListener('request', currentApp);
    const newApp = require('./server').app;
    server.on('request', newApp);
    currentApp = newApp;
  });
}
