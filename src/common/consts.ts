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
  WELCOMESCREEN = 'WELCOMESCREEN',
  LOGINSCREEN = 'LOGINSCREEN',
  HOMESCREEN = 'HOMESCREEN',
  MARKETSCREEN = 'MARKETSCREEN',
  CIRCLESCREEN = 'CIRCLESCREEN',
  MINESCREEN = 'MINESCREEN',
}

export { appVersion, apiVersion, PATH };
