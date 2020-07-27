'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async index() {
    const { ctx } = this;
    const jsonData = ctx.request.body;
    const body = await ctx.service.login.index(jsonData);
    ctx.body = body;
  }
}

module.exports = LoginController;
