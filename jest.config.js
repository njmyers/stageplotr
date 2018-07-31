module.exports = {
  testURL: 'http://localhost',
  testPathIgnorePatterns: [
    '/node_modules/',
    '/build/*',
    '/dist/*',
    '/helpers/*',
  ],
  setupTestFrameworkScriptFile: '<rootDir>/jest.enzyme.js',
};
