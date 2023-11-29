import {Assets, TextField} from 'react-native-ui-lib';
import {getFontSize, getViewSize} from '@/utils/sizeTool';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useState} from 'react';
import Animated, {FadeIn, FadeOut, Layout} from 'react-native-reanimated';
import CodeSender from './components/CodeSender';
import FastImage from 'react-native-fast-image';
import {commonStyles, getCommonShadowStyle} from '@/common/styles';
import OlText from '@/components/OneLightText';
import {login} from '@/utils/login';

function LoginScreen() {
  const [isShowPassCode, setIShowPassCode] = useState(false);
  const [mobile, setMobile] = useState('');
  const [msgCode, setPassCode] = useState('');
  const loginHandle = async () => {
    if (!isShowPassCode || !msgCode) {
      console.log(`9898请输入${!isShowPassCode ? '手机号码' : '验证码'}`);
      return;
    }
    login(mobile, msgCode);
  };
  const validateMobileNum = (val: string) => {
    const reg = /^1[3,4,5,6,7,8,9][0-9]{9}$/;
    const isMobileNum = reg.test(val);
    if (isShowPassCode !== isMobileNum) {
      setIShowPassCode(isMobileNum);
    }
    return reg.test(val);
  };
  return (
    <Animated.View
      style={styles.container}
      entering={FadeIn.duration(500)}
      exiting={FadeOut.duration(500)}>
      <FastImage
        style={[styles.viewMargin, styles.logo]}
        source={Assets.icons.logo}
      />
      <OlText style={[styles.title, styles.viewMargin]}>
        嗨<OlText style={styles.appName}>, oneLight</OlText>
      </OlText>
      <TextField
        value={mobile}
        style={styles.textInput}
        containerStyle={[styles.textContainer, styles.viewMargin]}
        floatingPlaceholderStyle={styles.placeholder}
        maxLength={11}
        keyboardType='phone-pad'
        placeholder={'输入手机号（新号码自动注册）'}
        floatingPlaceholder
        validate={validateMobileNum}
        validateOnChange
        onChangeText={setMobile}
      />
      {isShowPassCode ? (
        <Animated.View
          entering={FadeIn.duration(300)}
          exiting={FadeOut.duration(300)}>
          <TextField
            value={msgCode}
            style={styles.textInput}
            containerStyle={[styles.textContainer, styles.viewMargin]}
            floatingPlaceholderStyle={styles.placeholder}
            placeholder={'密码'}
            floatingPlaceholder
            onChangeText={setPassCode}
            trailingAccessory={<CodeSender mobile={mobile} />}
          />
        </Animated.View>
      ) : null}
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
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  viewMargin: {
    marginBottom: getViewSize(30),
  },
  title: {
    fontSize: getFontSize(38),
    fontWeight: '500',
    textAlign: 'center',
  },
  appName: {
    fontSize: getFontSize(25),
    fontWeight: '400',
  },
  textContainer: {
    paddingBottom: getViewSize(6),
    borderBottomWidth: getViewSize(1),
    borderBottomColor: commonStyles.grey_placeholder,
  },
  textInput: {
    fontSize: getFontSize(18),
  },
  placeholder: {
    fontSize: getFontSize(18),
  },
  loginMethods: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginMethod: {
    marginHorizontal: getViewSize(25),
    width: getViewSize(30),
    height: getViewSize(30),
  },
  btnContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginBtn: {
    paddingVertical: getViewSize(15),
    paddingHorizontal: getViewSize(60),
    borderRadius: getViewSize(30),
    backgroundColor: commonStyles.black,
    ...getCommonShadowStyle(),
  },
  loginText: {
    color: commonStyles.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  logo: {
    width: getViewSize(65),
    height: getViewSize(65),
  },
  or: {
    textAlign: 'center',
    color: commonStyles.grey_placeholder,
  },
});

export default LoginScreen;
