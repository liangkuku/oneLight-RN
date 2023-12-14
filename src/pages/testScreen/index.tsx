import { StyleSheet, View } from 'react-native';
import OlText from '@/components/OneLightText';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

function TestScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const tt = () => {
    console.log('9898sssaaa');
    navigation.navigate('Test2');
  };
  return (
    <View style={styles.page}>
      <OlText>我是路由测试页</OlText>
      <OlText>我是路由测试页</OlText>
      <OlText>我是路由测试页</OlText>
      <OlText>我是路由测试页</OlText>
      <OlText>我是路由测试页</OlText>
      <OlText onPress={tt}>我是路由测试页----点击</OlText>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'pink',
  },
});

export default TestScreen;
