import OlText from '@/components/OneLightText';
import { View } from 'react-native';

function Test1() {
  return (
    <View
      style={{
        backgroundColor: 'violet',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{ backgroundColor: 'green', width: 100, height: 100 }}>
        <OlText>Test1</OlText>
      </View>
    </View>
  );
}

function Test2() {
  return (
    <View
      style={{
        backgroundColor: 'violet',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{ backgroundColor: 'green', width: 100, height: 100 }}>
        <OlText>Test2</OlText>
      </View>
    </View>
  );
}
export { Test1, Test2 };
