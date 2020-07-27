'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/api/home', controller.home.index);
  router.get('/api/user', controller.home.queryUserById);
  router.post('/api/register', controller.register.index);
  router.post('/api/login', controller.login.index);
  router.post('/api/userinfo', controller.userInfo.index);
};
