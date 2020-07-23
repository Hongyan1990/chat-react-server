'use strict';

const Controller = require('egg').Controller;

class RegisterController extends Controller {
  async index() {
    const { ctx } = this;
    const jsonData = ctx.request.body;
    const body = await ctx.service.register.index(jsonData);
    ctx.body = body;
  }
}

module.exports = RegisterController;
