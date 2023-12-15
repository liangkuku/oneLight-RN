/* eslint-disable no-unused-vars */
// APP版本号
const appVersion = {
  major: 1,
  minor: 0,
  patch: 0,
};

// API版本号
const apiVersion = {
  major: 1,
  minor: 0,
  patch: 0,
};

enum PATH {
  MAINSCREEN = 'MAINSCREEN', // 主页底部导航栏路由BottomTabs
  WELCOMESCREEN = 'WELCOMESCREEN', //欢迎页
  LOGINSCREEN = 'LOGINSCREEN', // 登录页
  HOMESCREEN = 'HOMESCREEN', // 首页
  MARKETSCREEN = 'MARKETSCREEN', // 集市
  CIRCLESCREEN = 'CIRCLESCREEN', // 圈子
  MINESCREEN = 'MINESCREEN', // 我的
}

export { appVersion, apiVersion, PATH };
