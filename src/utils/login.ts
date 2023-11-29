import {STORAGE_KEYS} from '@/interfaces/commonEnum';
import {apiLogin} from '@/services/login';
import Storage from '@/storage';
import https from './https';
import {setAppRouter} from './setRouterTools';

/**
 * 登录方法
 */
const login = async (mobile: string, msgCode: string) => {
  const res = await apiLogin(mobile, msgCode);
  if (!res.success) return;
  const {Authorization, uid, isRight, message} = res.data;
  if (!isRight) {
    console.log('9898', message);
    return;
  }
  Storage.set(STORAGE_KEYS.TOKEN, Authorization);
  Storage.set(STORAGE_KEYS.UID, uid);
  Storage.set(STORAGE_KEYS.LOGIN_STATUS, true);
  Storage.set(STORAGE_KEYS.IS_LOADEDAPP, true);
  https.defaults.headers.common = {Authorization, uid};
  setAppRouter();
};

/**
 * 退出登录方法
 */
const logout = () => {
  console.log('9898退出登录');
  Storage.set(STORAGE_KEYS.LOGIN_STATUS, false);
  // Storage.set(STORAGE_KEYS.IS_LOADEDAPP, false);
  https.defaults.headers.common = {};
};

export {login, logout};
