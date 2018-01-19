const runTests = require('../scripts/runTests');
const path = require('path');

module.exports = grunt => {
  grunt.registerMultiTask('test', function() {
    const done = this.async();
    runTests(this.data).then(done, done);
  });
};

module.exports.config = {
  dev: [
    '--env=jsdom',
    '--watch',
    `--config=${path.join(__dirname, '../jest/jest.config.js')}`,
    `--rootDir=${process.cwd()}`
  ],
  updateSnapshots: ['--env=jsdom', '-u'],
  ci: ['--env=jsdom', '--ci', '--testResultsProcessor', '../node_modules/jest-junit', '--coverage']
};
