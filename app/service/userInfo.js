'use strict';

const Service = require('egg').Service;

class UserInfoService extends Service {
  async index(data) {
    try {
      await this.app.mysql.update('user', data);
      return {
        code: 0,
        data: {
          id: data.id,
        },
      };
    } catch (err) {
      return {
        code: -1,
        msg: '更新用户信息失败',
      };
    }
  }
}

module.exports = UserInfoService;
