import { apiVersion, appVersion } from '@/common/consts';
import axios from 'axios';
import { Platform } from 'react-native';
import { getUniqueId } from 'react-native-device-info';

const ClientTypes = {
  ios: 1,
  android: 2,
  web: 3,
};
const ClientType: number = ClientTypes[Platform.OS as 'ios' | 'android' | 'web'];

const baseURL = Platform.OS === 'android' ? 'http://10.0.2.2:3000' : 'http://localhost:3000';
// 创建 Axios 实例
const https = axios.create({
  baseURL: baseURL, // 设置基础URL，用于所有请求
  timeout: 5000, // 设置请求超时时间，单位是毫秒
  headers: {
    'Content-Type': 'application/json', // 设置请求头
    'User-Agent': 'oneLight-APP', // 设置
    'Ol-Client-Type': ClientType ?? '-1', // 客户端系统OS
    'Ol-Client-Version': Platform.Version ?? '', // 客户端系统版本号
    'Ol-App-Version': `${appVersion.major}.${appVersion.minor}.${appVersion.patch}`, // oneLight应用APP版本号
    'Ol-Api-Version': `${apiVersion.major}.${apiVersion.minor}.${apiVersion.patch}`, // oneLight应用API版本号
  },
});

// 使用拦截器（interceptor）配置请求和响应
https.interceptors.request.use(
  config => {
    // 在发送请求之前做一些处理
    // 例如，添加认证信息、设置请求头等
    return config;
  },
  error => {
    // 对请求错误做一些处理
    return Promise.reject(error);
  },
);

https.interceptors.response.use(
  response => {
    // 对响应数据做一些处理
    return response.data;
  },
  error => {
    const errorData = error.response.data ?? {};
    const { code, data, message, path, success, time } = errorData;
    // 对响应错误做一些处理
    Toast.show(message);
    return {
      success,
      code,
      data,
      message,
      path,
      time,
    };
  },
);

// 设置https请求头，添加设备ID
(async () => {
  const deviceId = (await getUniqueId()) ?? '';
  https.defaults.headers['deviceId'] = deviceId;
})();

export default https; // 导出 Axios 实例
