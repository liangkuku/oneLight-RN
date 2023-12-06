import OlText from '@/components/OneLightText';
import { ScrollView, View } from 'react-native';

function HomeScreen({ navigation }) {
  const tt = () => {
    navigation.navigate('Market');
  };
  return (
    <View style={{ backgroundColor: 'red', flex: 1 }}>
      <ScrollView>
        <View style={{ height: 100, backgroundColor: 'blue', marginBottom: 20 }}>
          <OlText onPress={tt}>我是首页</OlText>
        </View>
        <View style={{ height: 100, backgroundColor: 'green', marginBottom: 20 }}>
          <OlText onPress={tt}>我是首页</OlText>
        </View>
        <View style={{ height: 100, backgroundColor: 'yellow', marginBottom: 20 }}>
          <OlText onPress={tt}>我是首页</OlText>
        </View>
        <View style={{ height: 100, backgroundColor: 'black', marginBottom: 20 }}>
          <OlText onPress={tt}>我是首页</OlText>
        </View>
        <View style={{ height: 100, backgroundColor: 'blue', marginBottom: 20 }}>
          <OlText onPress={tt}>我是首页</OlText>
        </View>
        <View style={{ height: 100, backgroundColor: 'green', marginBottom: 20 }}>
          <OlText onPress={tt}>我是首页</OlText>
        </View>
        <View style={{ height: 100, backgroundColor: 'yellow', marginBottom: 20 }}>
          <OlText onPress={tt}>我是首页</OlText>
        </View>
        <View style={{ height: 100, backgroundColor: 'black', marginBottom: 20 }}>
          <OlText onPress={tt}>我是首页</OlText>
        </View>
        <View style={{ height: 100, backgroundColor: 'blue', marginBottom: 20 }}>
          <OlText onPress={tt}>我是首页</OlText>
        </View>
        <View style={{ height: 100, backgroundColor: 'green', marginBottom: 20 }}>
          <OlText onPress={tt}>我是首页</OlText>
        </View>
        <View style={{ height: 100, backgroundColor: 'yellow', marginBottom: 20 }}>
          <OlText onPress={tt}>我是首页</OlText>
        </View>
        <View style={{ height: 100, backgroundColor: 'black', marginBottom: 20 }}>
          <OlText onPress={tt}>我是首页</OlText>
        </View>
        <View style={{ height: 100, backgroundColor: 'blue', marginBottom: 20 }}>
          <OlText onPress={tt}>我是首页</OlText>
        </View>
        <View style={{ height: 100, backgroundColor: 'green', marginBottom: 20 }}>
          <OlText onPress={tt}>我是首页</OlText>
        </View>
        <View style={{ height: 100, backgroundColor: 'yellow', marginBottom: 20 }}>
          <OlText onPress={tt}>我是首页</OlText>
        </View>
        <View style={{ height: 100, backgroundColor: 'black', marginBottom: 20 }}>
          <OlText onPress={tt}>我是首页</OlText>
        </View>
        <View style={{ height: 100, backgroundColor: 'blue', marginBottom: 20 }}>
          <OlText onPress={tt}>我是首页</OlText>
        </View>
        <View style={{ height: 100, backgroundColor: 'green', marginBottom: 20 }}>
          <OlText onPress={tt}>我是首页</OlText>
        </View>
        <View style={{ height: 100, backgroundColor: 'yellow', marginBottom: 20 }}>
          <OlText onPress={tt}>我是首页</OlText>
        </View>
        <View style={{ height: 100, backgroundColor: 'black', marginBottom: 20 }}>
          <OlText onPress={tt}>我是首页</OlText>
        </View>
        <View style={{ height: 100, backgroundColor: 'blue', marginBottom: 20 }}>
          <OlText onPress={tt}>我是首页</OlText>
        </View>
        <View style={{ height: 100, backgroundColor: 'green', marginBottom: 20 }}>
          <OlText onPress={tt}>我是首页</OlText>
        </View>
        <View style={{ height: 100, backgroundColor: 'yellow', marginBottom: 20 }}>
          <OlText onPress={tt}>我是首页</OlText>
        </View>
        <View style={{ height: 100, backgroundColor: 'black', marginBottom: 20 }}>
          <OlText onPress={tt}>我是首页</OlText>
        </View>
        <View style={{ height: 100, backgroundColor: 'blue', marginBottom: 20 }}>
          <OlText onPress={tt}>我是首页</OlText>
        </View>
        <View style={{ height: 100, backgroundColor: 'green', marginBottom: 20 }}>
          <OlText onPress={tt}>我是首页</OlText>
        </View>
        <View style={{ height: 100, backgroundColor: 'yellow', marginBottom: 20 }}>
          <OlText onPress={tt}>我是首页</OlText>
        </View>
        <View style={{ height: 100, backgroundColor: 'black', marginBottom: 20 }}>
          <OlText onPress={tt}>我是首页</OlText>
        </View>
      </ScrollView>
    </View>
  );
}

function MarketScreen({ navigation }) {
  const tt = () => {
    navigation.navigate('Test2');
  };
  return (
    <View
      style={{ backgroundColor: 'blue', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ backgroundColor: 'pink', width: 100, height: 100 }}>
        <OlText onPress={tt}>我是集市</OlText>
      </View>
    </View>
  );
}
function CircleScreen() {
  return (
    <View
      style={{
        backgroundColor: 'yellow',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{ backgroundColor: 'red', width: 100, height: 100 }}>
        <OlText>我是圈子</OlText>
      </View>
    </View>
  );
}
function MineScreen() {
  return (
    <View
      style={{
        backgroundColor: 'violet',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{ backgroundColor: 'green', width: 100, height: 100 }}>
        <OlText>我是我的</OlText>
      </View>
    </View>
  );
}

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
export { HomeScreen, MarketScreen, CircleScreen, MineScreen, Test1, Test2 };
