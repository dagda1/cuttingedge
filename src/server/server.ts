import * as zlib from 'zlib';
import * as path from 'path';
import { Server } from 'http';
import * as Express from 'express';
import * as React from 'react';

process.on('unhandledRejection', error => console.error(error));

const app = Express();
const server = new Server(app);

app.get('/*', (req, res) => {
  res.send('hello world');
});

const port = process.env.port || 3000;

app.listen(port);

console.log(`Server running on port ${port}`);
