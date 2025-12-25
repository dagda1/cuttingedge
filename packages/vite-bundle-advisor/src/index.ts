import type { Plugin } from 'vite';

export default function bundleInspector(): Plugin {
  const plugin: Plugin = {
    name: 'vite-bundle-inspector',
    apply: 'build',
    generateBundle(_options, bundle) {
      // analyze bundle graph here
      void bundle;
    },
  };

  return plugin;
}
