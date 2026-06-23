module.exports = {
  testDir: 'tests',
  timeout: 30000,
  use: {
    baseURL: 'http://localhost:3001',
    headless: true,
    actionTimeout: 0,
    ignoreHTTPSErrors: true,
  },
};
