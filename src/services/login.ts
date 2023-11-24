import https from "@/utils/https";

/**
 * 获取验证码
*/
export const apiGetMsgCode = () => https.get('/login/msgCode');

/**
 * 登录or注册
*/
export const apiLogin = (params: { mobile: string }) => https.post('login/signIn', params);