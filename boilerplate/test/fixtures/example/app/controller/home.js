'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const data = await this.service.test.get('我是测试');
    this.ctx.body = data.name;
  }
}

module.exports = HomeController;
