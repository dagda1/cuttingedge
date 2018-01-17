'use strict';

const webpack = require('webpack');
const path = require('path');
const common = require('../../webpack/common');
const { merge } = require('lodash');

const { isDevelopment, staticAssetName } = common;

module.exports = grunt => {
  require('load-grunt-tasks')(grunt, {
    config: '../../package.json',
    scope: 'devDependencies',
    requireResolution: true
  });

  const outputPath = path.join(__dirname, 'dist');

  const webpack = require('../../webpack/client').configure({
    entryPoint: path.join(__dirname, './demo'),
    outputPath,
    devServer: isDevelopment,
    publicDir: 'demo/public',
    typescriptOptions: {
      rootDir: '.',
      declaration: false,
      configFileName: path.join(__dirname, './tsconfig.json')
    }
  });

  grunt.initConfig({
    env: {
      dev: {
        NODE_ENV: 'development'
      },
      prod: {
        NODE_ENV: 'production'
      }
    },
    open: {
      dev: {
        path: 'http://localhost:3000'
      }
    },
    clean: {
      web: 'dist'
    },
    watch: {
      node: {
        files: ['./src/**/*.ts', './src/**/*.tsx', './src/index.ts'],
        options: { spawn: false },
        tasks: ['webpack']
      }
    },

    webpack,
    'webpack-dev-server': {
      start: {
        webpack,
        ...webpack.devServer
      }
    }
  });

  grunt.registerTask('build', ['clean', 'webpack:dev']);
  grunt.registerTask('demo', ['clean', 'env:dev', 'webpack-dev-server']);
  grunt.registerTask('start', ['demo']);
};
