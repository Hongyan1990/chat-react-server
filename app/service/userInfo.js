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
  async queryJobs(id, role) {
    try {
      let jobs = [];
      if (id) {
        jobs = await this.app.mysql.query('select jobs.*, users.name, users.role, users.avatar from users, jobs where users.id=jobs.publisher_id and users.id=? order by created_at desc ', [ id ]);
      } else if (role) {
        jobs = await this.app.mysql.query('select jobs.*, users.name, users.role, users.avatar from users, jobs where users.id=jobs.publisher_id and users.role=?  order by created_at desc', [ role ]);
      }
      return {
        code: 0,
        data: jobs,
      };
    } catch (err) {
      console.log(err);
      return {
        code: -1,
        msg: '服务出错了',
      };
    }
  }
  async queryUser(id) {
    try {
      const user = await this.app.mysql.get('users', { id });
      return {
        code: 0,
        data: user,
      };
    } catch (e) {
      console.log(e);
      return {
        code: -1,
        msg: '服务出错了',
      };
    }
  }
}

module.exports = UserInfoService;
