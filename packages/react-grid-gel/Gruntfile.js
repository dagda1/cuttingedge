'use strict';

const webpack = require('webpack');
const path = require('path');
const common = require('../../webpack/common');
const { merge } = require('lodash');
const openBrowser = require('react-dev-utils/openBrowser');
const { configure, getUrlParts } = require('../../webpack/client');

const { isDevelopment, staticAssetName } = common;

module.exports = grunt => {
  require('load-grunt-tasks')(grunt, {
    config: '../../package.json',
    scope: 'devDependencies',
    requireResolution: true
  });

  const outputPath = path.join(__dirname, 'dist');

  const webpack = configure({
    entryPoint: path.join(__dirname, './demo'),
    outputPath,
    devServer: isDevelopment,
    publicDir: path.join(__dirname, './demo/public'),
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

    webpack: {
      demo: webpack
    },
    'webpack-dev-server': {
      start: {
        webpack,
        ...webpack.devServer
      }
    }
  });

  grunt.registerTask('browser', () => {
    openBrowser(getUrlParts().urls.localUrlForBrowser);
  });

  grunt.registerTask('build', ['clean', 'webpack:dev']);
  grunt.registerTask('demo', ['clean', 'env:dev', 'webpack:demo', 'webpack-dev-server']);
  grunt.registerTask('start', ['demo']);
};
