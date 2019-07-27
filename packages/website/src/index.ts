/* eslint-disable no-console */
import { app } from './server';
import http from 'http';

const server = http.createServer(app);

let currentApp = app;

server.listen(process.env.PORT, () => {
  console.log(`🚀 started on ${process.env.PORT}`);
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
