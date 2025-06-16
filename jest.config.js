/** @type {import('jest').Config} */
const config = {
  verbose: true,
  testMatch: ['**/tests/unit/**/*-test.js'],
  collectCoverageFrom: ['lang/**/*', 'unitTestingTask.js'],
};

module.exports = config;
