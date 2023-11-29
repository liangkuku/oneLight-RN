import {commonStyles, getCommonShadowStyle} from '@/common/styles';
import OlText from '@/components/OneLightText';
import {login} from '@/utils/login';
import {memo} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import Animated, {Layout} from 'react-native-reanimated';
import {Assets} from 'react-native-ui-lib';

type HandlerbarProps = {
  isShowPassCode: boolean;
  mobile: string;
  msgCode: string;
};

function Handlerbar({isShowPassCode, mobile, msgCode}: HandlerbarProps) {
  const loginHandle = async () => {
    if (!isShowPassCode || !msgCode) {
      Toast.show(`请输入${!isShowPassCode ? '手机号码' : '验证码'}`);
      return;
    }
    login(mobile, msgCode);
  };
  return (
    <Animated.View layout={Layout.duration(300)} style={styles.btnContainer}>
      <OlText style={[styles.or, styles.viewMargin]}>或</OlText>
      <View style={[styles.loginMethods, styles.viewMargin]}>
        <FastImage style={styles.loginMethod} source={Assets.icons.wechat} />
        <FastImage style={styles.loginMethod} source={Assets.icons.alipay} />
      </View>
      <TouchableOpacity onPress={loginHandle} style={styles.loginBtn}>
        <OlText style={styles.loginText}>登录</OlText>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  or: {
    textAlign: 'center',
    color: commonStyles.grey_placeholder,
  },
  viewMargin: {
    marginBottom: 30,
  },
  loginMethods: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginMethod: {
    marginHorizontal: 25,
    width: 30,
    height: 30,
  },
  loginText: {
    color: commonStyles.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  loginBtn: {
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
    backgroundColor: commonStyles.black,
    ...getCommonShadowStyle(),
  },
});

export default memo(Handlerbar);
