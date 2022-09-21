import { preview } from 'vite';
import type { InlineConfig } from 'vite';
import path from 'path';

const Defaults: InlineConfig = {
  root: path.join()
}

export async function previewWeb() {
  const server = await preview({
    root,
    base: options.base,
    configFile: options.config,
    logLevel: options.logLevel,
    mode: options.mode,
    preview: {
      port: options.port,
      strictPort: options.strictPort,
      host: options.host,
      https: options.https,
      open: options.open
    }
  })
