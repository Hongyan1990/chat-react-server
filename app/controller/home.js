'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const userList = await ctx.app.mysql.select('users');
    console.log('---------->', userList)
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
