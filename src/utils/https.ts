import axios from 'axios';
import { Platform } from 'react-native';

const baseURL = Platform.OS === 'android' ? 'http://10.0.2.2:3000' : 'http://localhost:3000';
// 创建 Axios 实例
const https = axios.create({
    baseURL: baseURL, // 设置基础URL，用于所有请求
    timeout: 5000, // 设置请求超时时间，单位是毫秒
    headers: {
        'Content-Type': 'application/json', // 设置请求头
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
    }
);

https.interceptors.response.use(
    response => {
        // 对响应数据做一些处理
        return response.data;
    },
    error => {
        // 对响应错误做一些处理
        return {
            success: false,
            code: error.response?.status ?? 614,
            data: error.message ?? '',
            path: error.config?.url ?? ''
        };
    }
);

export default https; // 导出 Axios 实例
