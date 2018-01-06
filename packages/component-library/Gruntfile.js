'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = grunt => {
  require('load-grunt-tasks')(grunt, {
    config: '../../package.json',
    scope: 'devDependencies',
    requireResolution: true
  });

  grunt.initConfig({
    ts: {
      options: require('./tsconfig.json').compilerOptions,
      default: ['src/client/**/*.ts', 'src/client/**/*.tsx', '!node_modules/**'],
      outDir: 'build'
    },
    clean: 'build',
    webpack: {
      dev: require('./webpack/client')
    },
    start: {}
  });

  grunt.registerTask('build', ['clean', 'webpack:dev']);
};
