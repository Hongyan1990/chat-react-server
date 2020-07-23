'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/api/home', controller.home.index);
  router.post('/api/register', controller.register.index);
};
