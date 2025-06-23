/** @type {import('jest').Config} */
const config = {
  verbose: true,
  testMatch: ['**/tests/unit/**/*-test.js'],
  collectCoverageFrom: ['lang/**/*', 'unitTestingTask.js'],
  globalSetup: "./global-setup.js"
};

module.exports = config;
