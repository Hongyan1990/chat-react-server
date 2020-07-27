'use strict';

const Controller = require('egg').Controller;

class UserInfoController extends Controller {
  async index() {
    const {ctx} = this;
    const jsonData = this.request.body;
    
  }
}

module.exports = UserInfoController;

