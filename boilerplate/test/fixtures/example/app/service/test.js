'use strict';

const Service = require('egg').Service;

class TestService extends Service {
  async get(val) {
    return await new Promise(resolve => {
      resolve({ name: val });
    });
  }
}

module.exports = TestService;
