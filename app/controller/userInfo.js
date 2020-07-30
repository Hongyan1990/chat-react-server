'use strict';

const Controller = require('egg').Controller;

class UserInfoController extends Controller {
  async index() {
    const { ctx } = this;
    const jsonData = ctx.request.body;
    const data1 = await ctx.service.userInfo.index(jsonData);
    const data2 = await ctx.service.userInfo.createJob(jsonData);
    if (data1.msg || data2.msg) {
      ctx.body = {
        code: -1,
        msg: data1.msg || data2.msg,
      };
    } else {
      ctx.body = {
        code: 0,
        msg: '添加成功',
        data: {},
      };
    }
  }
  async list() {
    const { ctx } = this;
    const { id } = ctx.request.query;

  }
}

module.exports = UserInfoController;

