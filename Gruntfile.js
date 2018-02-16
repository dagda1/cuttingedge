const packages = [
  'packages/util/Gruntfile.js',
  'packages/react-gel/Gruntfile.js',
  'packages/component-library/Gruntfile.js',
  'packages/connected-components/Gruntfile.js',
  'packages/website/Gruntfile.js'
];

module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    hub: {
      build: {
        src: packages,
        tasks: ['build'],
        options: { concurrent: 1 }
      },
      watch: {
        src: packages,
        tasks: ['default']
      },
      test: {
        src: packages,
        tasks: ['test:ci']
      },
      start: {
        src: ['packages/applicant/Gruntfile.js'],
        tasks: ['webpack-dev-server']
      }
    }
  });

  grunt.loadNpmTasks('grunt-hub');

  grunt.registerTask('build', ['hub:build']);
  grunt.registerTask('build:ci', ['hub:build', 'hub:start']);
  grunt.registerTask('watch', ['hub:watch']);
  grunt.registerTask('test', ['hub:test']);
  grunt.registerTask('default', ['watch']);
};
