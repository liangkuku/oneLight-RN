import https from '@/utils/https';
import CryptoAes from 'crypto-js/aes';

const secretKey = 'oneLight';
/**
 * 获取验证码
 */
export const apiGetMsgCode = (mobile: string): Promise<ResponseType> => {
  const secret = CryptoAes.encrypt(mobile, secretKey).toString();
  return https.get('/login/msgCode', {params: {mobile, secret}});
};

/**
 * 登录or注册
 */
export const apiLogin = (params: {
  mobile: string;
  msgCode: string;
}): Promise<ResponseType> => {
  const secret = CryptoAes.encrypt(params.mobile, secretKey).toString();
  return https.post('login/signIn', {params: {...params, secret}});
};
