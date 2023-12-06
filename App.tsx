import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CircleScreen, HomeScreen, MarketScreen, MineScreen, Test1, Test2 } from './apptest';
import BottomTabBar from '@/components/BottomTabBar';

// 顶级根路由栈
const Stack = createNativeStackNavigator();
// 底部导航栈
const BottomTabNavigator = createBottomTabNavigator();

function App() {
  SplashScreen.hide();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='RootRoutes' component={RootRoutes} options={{ headerShown: false }} />
        <Stack.Screen name='Test1' component={Test1} />
        <Stack.Screen name='Test2' component={Test2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function RootRoutes() {
  return (
    <BottomTabNavigator.Navigator screenOptions={{ headerShown: false }} tabBar={BottomTabBar}>
      <BottomTabNavigator.Screen name='HomeStack' component={HomeScreen} />
      <BottomTabNavigator.Screen name='MarketStack' component={MarketScreen} />
      <BottomTabNavigator.Screen name='CircleStack' component={CircleScreen} />
      <BottomTabNavigator.Screen name='MineStack' component={MineScreen} />
    </BottomTabNavigator.Navigator>
  );
}

export default App;
