import {useEffect, useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {getFontSize, getViewSize} from '@/utils/sizeTool';
import {
  StyleSheet,
  ActivityIndicator,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {commonStyles} from '@/common/styles';
import OlText from '@/components/OneLightText';
import {apiGetMsgCode} from '@/services/login';

type CodeSenderProps = {
  mobile: string;
};
function CodeSender({mobile}: CodeSenderProps) {
  const [status, setStatus] = useState(true);
  const [second, setSecond] = useState(5);
  const secondRef = useRef(5);
  const timerRef = useRef<any>(null);
  const reGetCode = () => {
    if (!status) {
      Toast.show('操作过于频繁');
    }
  };
  const sendCode = async () => {
    setStatus(false);
    interval(() => {
      setSecond(second => second - 1);
    }, 1000);
    const res = await apiGetMsgCode(mobile);
    if (res.success) {
      Toast.show(res.data.message);
    }
  };
  const interval = (fn: () => void, time: number) => {
    if (secondRef.current === 0) {
      setStatus(true);
      setSecond(5);
      clearTimeout(timerRef.current);
      return;
    }
    timerRef.current = setTimeout(() => {
      fn();
      interval(fn, time);
    }, time);
  };

  useEffect(() => {
    secondRef.current = second;
  });
  return status ? (
    <TouchableWithoutFeedback onPress={sendCode}>
      <View style={styles.container}>
        <OlText style={styles.strText}>获取验证码</OlText>
        <Icon name='paper-plane' size={getViewSize(18)} />
      </View>
    </TouchableWithoutFeedback>
  ) : (
    <TouchableWithoutFeedback onPress={reGetCode}>
      <View style={styles.container}>
        <OlText style={[styles.strText, styles.disabledColor]}>
          重新获取({second}秒)
        </OlText>
        <ActivityIndicator />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  strText: {
    fontSize: getFontSize(18),
    marginRight: getViewSize(6),
  },
  disabledColor: {
    color: commonStyles.grey_placeholder,
  },
});

export default CodeSender;
