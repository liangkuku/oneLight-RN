import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabBar from '@/components/BottomTabBar';
import { BusinessPaths, RootMainPaths, WelcomePaths } from '@/pages/screensMap';
import { StoreContext, stores, useStores } from '@/store';
import { observer } from 'mobx-react-lite';
import { RootSiblingParent } from 'react-native-root-siblings';

// 顶级根路由栈
const Stack = createNativeStackNavigator();
// 底部导航栈
const BottomTabNavigator = createBottomTabNavigator();

const App = observer(() => {
  const { RouterTypetore } = useStores();
  SplashScreen.hide();
  return (
    <RootSiblingParent>
      <StoreContext.Provider value={stores}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              statusBarTranslucent: true,
              statusBarColor: 'transparent',
              headerTitleAlign: 'center',
              statusBarStyle: 'dark',
            }}>
            {RouterTypetore.isShowMainRouter ? (
              <>
                <Stack.Screen
                  name='BottomRoot'
                  component={RootMainRoutes}
                  options={{ headerShown: false, title: '' }}
                />
                {BusinessPaths.map(route => (
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
              </>
            ) : (
              <>
                {WelcomePaths.map(route => (
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
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </StoreContext.Provider>
    </RootSiblingParent>
  );
});

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
