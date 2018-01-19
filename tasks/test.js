const runTests = require('../scripts/runTests');

module.exports = grunt => {
  grunt.registerMultiTask('test', function() {
    const done = this.async();
    runTests(this.data).then(done, done);
  });
};

module.exports.config = {
  dev: ['--env=jsdom', '--watch'],
  updateSnapshots: ['--env=jsdom', '-u'],
  ci: ['--env=jsdom', '--ci', '--testResultsProcessor', '../../node_modules/jest-junit', '--coverage']
};
