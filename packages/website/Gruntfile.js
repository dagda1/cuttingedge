'use strict';

const webpack = require('webpack');
const path = require('path');
const { merge } = require('lodash');
const tsconfig = require('./tsconfig.json').compilerOptions;

console.log(tsconfig);

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
        script: './dist/packages/website/src/server/index.js',
        options: {
          cwd: __dirname
        }
      }
    },
    copy: {
      main: {
        expand: true,
        src: ['./src/**/*.scss', './src/**/*.css', './src/**/*.png', './src/**/*.jpg', './src/**/*.md'],
        dest: 'dist/packages/website'
      }
    },
    ts: {
      node: {
        src: ['./src/server/**/*.ts', './src/server/**/*.tsx', '!../../node_modules/**'],
        dest: './dist',
        options: {
          moduleResolution: 'node',
          fast: 'never',
          target: 'es5',
          types: ['node'],
          module: 'commonjs',
          inlineSourceMap: true,
          jsx: 'react',
          strictNullChecks: true,
          noUnusedLocals: true,
          skipLibCheck: true,
          noImplicitAny: false,
          traceResolution: true,
          lib: ['es2016', 'dom'],
          inlineSources: true,
          rootDir: '../../',
          include: ['src/**/*.ts', 'src/**/*.tsx', '../../types/**/*.ts'],
          exclude: ['../../node_modues', './dist'],
          typeRoots: [path.join(__dirname, '../../node_modues/@types')]
        }
      }
    },
    clean: {
      node: './dist'
    },
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
  grunt.registerTask('server', ['clean:node', 'env:dev', 'ts:node', 'copy', 'nodemon:dev', 'watch:node']);
  grunt.registerTask('start', ['server']);
};
