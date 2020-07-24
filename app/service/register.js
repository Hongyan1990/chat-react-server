'use strict';

const Service = require('egg').Service;
const utils = require('utility');

class RegisterService extends Service {
  async index(data) {
    const { name, pwd, role } = data;
    const user = await this.app.mysql.get('users', { name });
    if (user) {
      return {
        code: 1,
        msg: '用户名已存在',
      };
    }
    let res;
    try {
      res = await this.app.mysql.insert('users', { name, pwd, role });
    } catch (err) {
      console.log(err)
      return {
        code: 1,
        msg: '服务出错了',
      };
    }
    console.log(res);
    this.ctx.cookies.set('userToken', res.insertId, {
      maxAge: 24 * 3600 * 1000,
      httpOnly: false,
    });
    return {
      code: 0,
      data: {
        name,
        role,
      },
    };
  }
}

// function pwdMd5(pwd) {}

module.exports = RegisterService;
