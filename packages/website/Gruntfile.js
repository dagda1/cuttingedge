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
        script: './src/index.tsx',
        options: {
          ext: 'ts,tsx',
          wtach: ['src/server/**/*', 'src/shared/**/*'],
          cwd: __dirname,
          exec: '../../node_modules/.bin/ts-node'
        }
      }
    },
    ts: {
      node: {
        src: ['src/server/**/*.ts', 'src/server/**/*.tsx', '!node_modules/**'],
        options: {
          fast: 'never'
        }
      }
    },
    clean: 'build',
    watch: {
      node: {
        files: ['./src/server/**/*.ts', './src/server/**/*.tsx'],
        options: { spawn: false },
        tasks: ['ts:node']
      }
    }
    /*     
    , webpack: {
      dev: require('../../webpack/client').configure({
        entryPoint: path.join(process.cwd(), 'src/client/index')
      }),
      server: require('../../webpack/server').configure()
    }, */
  });

  grunt.registerTask('build', ['clean', 'webpack:dev']);
  grunt.registerTask('server', ['env:dev', 'nodemon:dev', 'open:dev']);
  grunt.registerTask('start', ['server']);
};
