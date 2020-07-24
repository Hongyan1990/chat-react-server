'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = Date.now();
  }
  async queryUserById() {
    const { ctx } = this;
    const { id } = ctx.query;
    const user = await this.app.mysql.get('users', { id });
    if (!user) {
      ctx.body = {
        code: 1,
        msg: '用户不存在',
      };
    } else {
      ctx.body = {
        code: 0,
        data: {
          userName: user.name,
        },
      };
    }
  }
}

module.exports = HomeController;
