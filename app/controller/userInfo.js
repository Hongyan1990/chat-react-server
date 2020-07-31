'use strict';

const Controller = require('egg').Controller;

class UserInfoController extends Controller {
  async index() {
    const { ctx } = this;
    const jsonData = ctx.request.body;
    const data1 = await ctx.service.userInfo.index(jsonData);
    const data2 = await ctx.service.userInfo.createJob(jsonData);
    const data3 = await ctx.service.userInfo.queryUser(jsonData.publisher_id);
    console.log(data3)
    if (data1.msg || data2.msg) {
      ctx.body = {
        code: -1,
        msg: data1.msg || data2.msg,
      };
    } else {
      ctx.body = {
        code: 0,
        msg: '添加成功',
        data: {
          role: data3.data ? data3.data.role : '',
        },
      };
    }
  }
  async list() {
    const { ctx } = this;
    const { id, role } = ctx.request.query;
    const body = await ctx.service.userInfo.queryJobs(id, role);
    ctx.body = body;
  }
}

module.exports = UserInfoController;

