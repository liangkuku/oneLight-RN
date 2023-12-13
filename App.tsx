import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabBar from '@/components/BottomTabBar';
import { BusinessPaths, RootMainPaths } from '@/pages/screensMap';
import { StoreContext, stores } from '@/store';

// 顶级根路由栈
const Stack = createNativeStackNavigator();
// 底部导航栈
const BottomTabNavigator = createBottomTabNavigator();

function App() {
  SplashScreen.hide();
  return (
    <StoreContext.Provider value={stores}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            statusBarTranslucent: true,
            statusBarColor: 'transparent',
            headerTitleAlign: 'center',
          }}>
          <Stack.Screen
            name='BottomRoot'
            component={RootMainRoutes}
            options={{ headerShown: false, title: '' }}
          />
          {BusinessPaths.map(route => (
            <Stack.Screen
              name={route.path}
              component={route.component}
              options={{ title: route.title, presentation: route.presentation ?? 'card' }}
              key={route.path}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </StoreContext.Provider>
  );
}

function RootMainRoutes() {
  return (
    <BottomTabNavigator.Navigator screenOptions={{ headerShown: false }} tabBar={BottomTabBar}>
      {RootMainPaths.map(route => (
        <BottomTabNavigator.Screen name={route.path} component={route.component} key={route.path} />
      ))}
    </BottomTabNavigator.Navigator>
  );
}

export default App;
