import {View} from 'react-native';
import OlText from '@/components/OneLightText';

function TestScreen() {
  const tt = () => {
    Toast.show('sssaaa');
  };
  return (
    <View>
      <OlText>我是路由测试页</OlText>
      <OlText>我是路由测试页</OlText>
      <OlText>我是路由测试页</OlText>
      <OlText>我是路由测试页</OlText>
      <OlText>我是路由测试页</OlText>
      <OlText onPress={tt}>我是路由测试页</OlText>
    </View>
  );
}

export default TestScreen;
