'use strict';

const Service = require('egg').Service;

class UserInfoService extends Service {
  async index(data) {
    try {
      await this.app.mysql.update('users', {id: data.publisher_id, avatar: data.avatar});
      return {
        id: data.id,
      };
    } catch (err) {
      console.log(err)
      return {
        msg: '更新用户信息失败',
      };
    }
  }
  async createJob(data) {
    const { publisher_id, title, salary, description, work_place } = data;
    try {
      const res = await this.app.mysql.insert('jobs', { publisher_id, title, salary, description, work_place });
      console.log(res);
    } catch (err) {
      console.log(err)
      return {
        msg: '服务出错了',
      };
    }
    return {};
  }
}

module.exports = UserInfoService;
