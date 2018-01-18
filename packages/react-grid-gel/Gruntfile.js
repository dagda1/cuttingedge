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
    devServer: true,
    isStaticBuild: true,
    publicDir: path.join(__dirname, './demo/public'),
    typescriptOptions: {
      rootDir: '.',
      declaration: false,
      configFileName: path.join(__dirname, './tsconfig.json')
    }
  });

  console.dir(webpack.module.rules[3]);

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
    }
  });

  grunt.registerTask('browser', () => {
    openBrowser(getUrlParts().urls.localUrlForBrowser);
  });

  grunt.registerTask('build', ['clean', 'webpack:dev']);
  grunt.registerTask('demo', ['clean', 'webpack:demo', 'webpack-dev-server', 'copy']);
  grunt.registerTask('start', ['demo']);
};
