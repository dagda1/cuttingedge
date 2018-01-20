'use strict';

const webpack = require('webpack');
const path = require('path');
const common = require('../../webpack/common');
const { merge } = require('lodash');
const openBrowser = require('react-dev-utils/openBrowser');
const { configure, getUrlParts } = require('../../webpack/client');
const testConfig = require('../../tasks/test').config;

const { isDevelopment, staticAssetName } = common;

module.exports = grunt => {
  if (!process.env.PORT) process.env.PORT = '8080';

  require('load-grunt-tasks')(grunt, {
    config: '../../package.json',
    scope: 'devDependencies',
    requireResolution: true
  });

  grunt.loadTasks('../../tasks');

  const outputPath = path.join(__dirname, 'dist');

  const isDevelopment = process.env.NODE_ENV === 'development';
  const isProduciton = process.env.NODE_ENV === 'production';

  const webpack = configure({
    entryPoint: isDevelopment ? path.join(__dirname, './demo') : path.join(__dirname, './src'),
    outputPath,
    devServer: isDevelopment,
    isStaticBuild: true,
    minify: false,
    publicDir: path.join(__dirname, './demo/public'),
    typescriptOptions: {
      rootDir: '.',
      declaration: false,
      configFileName: path.join(__dirname, './tsconfig.json')
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

  grunt.registerTask('build', ['clean', 'webpack', 'copy']);
  grunt.registerTask('demo', ['clean', 'webpack:demo', 'webpack-dev-server', 'copy']);
  grunt.registerTask('start', ['demo']);
};
