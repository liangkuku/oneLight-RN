import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Test1, Test2 } from './apptest';
import BottomTabBar from '@/components/BottomTabBar';
import HomeScreen from '@/pages/homeScreen';
import MarketScreen from '@/pages/marketScreen';
import CircleScreen from '@/pages/circleScreen';
import MineScreen from '@/pages/mineScreen';

// 顶级根路由栈
const Stack = createNativeStackNavigator();
// 底部导航栈
const BottomTabNavigator = createBottomTabNavigator();

function App() {
  SplashScreen.hide();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{statusBarTranslucent: true,statusBarColor: 'transparent'}}>
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
      <BottomTabNavigator.Screen name='Home' component={HomeScreen} />
      <BottomTabNavigator.Screen name='Market' component={MarketScreen} />
      <BottomTabNavigator.Screen name='Circle' component={CircleScreen} />
      <BottomTabNavigator.Screen name='Mine' component={MineScreen} />
    </BottomTabNavigator.Navigator>
  );
}

export default App;
