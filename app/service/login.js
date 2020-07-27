'use strict';

const Service = require('egg').Service;
const utils = require('utility');

class LoginService extends Service {
  async index(data) {
    const { name, pwd } = data;
    const user = await this.app.mysql.get('users', { name, pwd: pwdMd5(pwd) });
    if (user) {
      this.ctx.cookies.set('userToken', user.id, {
        maxAge: 24 * 3600 * 1000,
        httpOnly: false,
      });
      return {
        code: 0,
        data: {
          id: user.id,
          name: user.name,
          role: user.role,
          avatar: user.avatar,
        },
      };
    };
    return {
      code: -1,
      msg: '用户名或密码错误',
    };
  }
}

function pwdMd5(pwd) {
  return utils.md5(utils.md5(pwd + '5568hxbc#*@&&fds'));
}

module.exports = LoginService;
