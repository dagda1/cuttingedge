'use strict';

const webpack = require('webpack');
const path = require('path');
const { merge } = require('lodash');

module.exports = grunt => {
  require('load-grunt-tasks')(grunt, {
    config: '../../package.json',
    scope: 'devDependencies',
    requireResolution: true
  });

  const outputPath = path.join(__dirname, 'dist');

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
    nodemon: {
      dev: {
        script: './dist/server.js',
        options: {
          cwd: __dirname
        }
      }
    },
    clean: {
      node: './dist'
    },
    watch: {
      node: {
        files: ['./src/**/*.ts', './src/**/*.tsx', './src/index.ts'],
        options: { spawn: false },
        tasks: ['webpack:server']
      }
    },
    webpack: {
      client: require('../../webpack/client').configure({
        entryPoint: path.join(__dirname, 'src/client/index'),
        outputPath
      }),
      server: require('../../webpack/server').configure({
        entryPoint: path.join(__dirname, 'src/index'),
        outputPath
      })
    }
  });

  grunt.registerTask('build', ['clean', 'webpack:dev']);
  grunt.registerTask('server', ['clean', 'env:dev', 'webpack:server', 'nodemon', 'open:dev']);
  grunt.registerTask('start', ['server']);
};
