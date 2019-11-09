exports.config = {
  hostname: 'localhost',
  port: 4444,
  path: '/wd/hub',
  runner: 'local',
  specs: ['./test/specs/**/*.js'],
  exclude: [
    // 'path/to/excluded/files'
  ],
  maxInstances: 1,
  capabilities: [
    {
      maxInstances: 1,
      browserName: 'chrome',
      'goog:chromeOptions': {
        // to run chrome headless the following flags are required
        // (see https://developers.google.com/web/updates/2017/04/headless-chrome)
        args: ['--disable-gpu']
      }
    }
  ],
  logLevel: 'error',
  bail: 0,
  baseUrl: 'https://www.saucedemo.com',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    require: ['@babel/register'],
    timeout: 60000
  },
  before: function() {
    const chai = require('chai');
    global.expect = chai.expect;
  }
};
