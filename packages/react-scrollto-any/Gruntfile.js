'use strict';

const webpack = require('webpack');
const path = require('path');
const common = require('../../webpack/common');
const { merge } = require('lodash');
const openBrowser = require('react-dev-utils/openBrowser');
const { configure, getUrlParts } = require('../../webpack/client');
const testConfig = require('../../tasks/test').config;

const { isDevelopment } = common;

module.exports = grunt => {
  if (!process.env.PORT) process.env.PORT = '3100';

  require('load-grunt-tasks')(grunt, {
    config: '../../package.json',
    scope: 'devDependencies',
    requireResolution: true
  });

  grunt.loadTasks('../../tasks');

  const isDevelopment = process.env.NODE_ENV === 'development';
  const isProduciton = process.env.NODE_ENV === 'production';

  const webpack = configure({
    entryPoint: path.join(__dirname, './demo'),
    devServer: true,
    isStaticBuild: true,
    publicDir: path.join(__dirname, './demo/public'),
    typescriptOptions: {
      configFileName: path.join(__dirname, './tsconfig.json'),
      rootDir: '.',
      declaration: false
    }
  });

  grunt.initConfig({
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
    ts: {
      default: {
        tsconfig: path.join(__dirname, 'tsconfig.json'),
        src: ['src/**/*.ts', 'src/**/*.tsx', '!node_modules/**'],
        options: {
          verbose: true,
          typeRoots: [path.join(__dirname, '../../node_modules/@types')],
          outDir: 'dist'
        }
      }
    },
    copy: {
      default: {
        expand: true,
        cwd: 'src',
        src: ['**/*.scss', '**/*.css', '**/*.png', '**/*.jpg', '**/*.md'],
        dest: 'dist'
      }
    },
    'webpack-dev-server': {
      start: {
        webpack,
        ...webpack.devServer
      }
    },
    test: testConfig
  });

  grunt.registerTask('browser', () => {
    openBrowser(getUrlParts().urls.localUrlForBrowser);
  });

  grunt.registerTask('build', ['clean', 'ts', 'copy']);
  grunt.registerTask('demo', ['clean', 'webpack', 'webpack-dev-server', 'copy']);
  grunt.registerTask('start', ['demo']);
};
