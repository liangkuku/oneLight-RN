import {View} from 'react-native';
import OlText from '@/components/OneLightText';
import {RootSiblingParent} from 'react-native-root-siblings';

function TestScreen() {
  const tt = () => {
    Toast.show('sssaaa');
  };
  return (
    <RootSiblingParent>
      <View>
        <OlText>我是路由测试页</OlText>
        <OlText>我是路由测试页</OlText>
        <OlText>我是路由测试页</OlText>
        <OlText>我是路由测试页</OlText>
        <OlText>我是路由测试页</OlText>
        <OlText onPress={tt}>我是路由测试页</OlText>
      </View>
    </RootSiblingParent>
  );
}

export default TestScreen;
