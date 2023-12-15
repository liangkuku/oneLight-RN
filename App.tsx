import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabBar from '@/components/BottomTabBar';
import { AppPaths, RootMainPaths } from '@/pages/screensMap';
import { StoreContext, stores } from '@/store';
import { RootSiblingParent } from 'react-native-root-siblings';
import { PATH } from '@/common/consts';
import Storage from '@/storage';
import { STORAGE_KEYS } from '@/interfaces/commonEnum';

// 顶级根路由栈
const Stack = createNativeStackNavigator();
// 底部导航栈
const BottomTabNavigator = createBottomTabNavigator();

function App() {
  const isLoadedApp = Storage.getBoolean(STORAGE_KEYS.IS_LOADEDAPP) ?? false;
  const hideSplashScreen = () => {
    SplashScreen.hide();
  };
  return (
    <RootSiblingParent>
      <StoreContext.Provider value={stores}>
        <NavigationContainer onReady={hideSplashScreen}>
          <Stack.Navigator
            initialRouteName={isLoadedApp ? PATH.MAINSCREEN : PATH.WELCOMESCREEN}
            screenOptions={{
              statusBarTranslucent: true,
              statusBarColor: 'transparent',
              headerTitleAlign: 'center',
              statusBarStyle: 'dark',
            }}>
            <Stack.Screen
              name={PATH.MAINSCREEN}
              component={RootMainRoutes}
              options={{ headerShown: false, title: '' }}
            />
            {AppPaths.map(route => (
              <Stack.Screen
                name={route.path}
                component={route.component}
                options={{
                  title: route.title,
                  presentation: route.presentation ?? 'card',
                  headerShown: route.headerShown ?? true,
                }}
                key={route.path}
              />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      </StoreContext.Provider>
    </RootSiblingParent>
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
