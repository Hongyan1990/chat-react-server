/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1595408676170_9995';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  const mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '119.23.72.26',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'hong180991..',
      // 数据库名
      database: 'chat_react',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  const security = {
    csrf: {
      headerName: 'x-csrf-token', // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
    },
  };

  return {
    ...config,
    ...userConfig,
    mysql,
    security,
    // assets: {
    //   publicPath: '/public/',
    // },
  };
};
