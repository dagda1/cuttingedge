import { app } from './server';
import http from 'http';
import { assert } from 'assert-ts';

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
    import('./server').then((m) => {
      server.once('request', m.app);
      currentApp = m.app;
    });
  });
}
