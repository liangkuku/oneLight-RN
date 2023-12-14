import { PATH } from '@/common/consts';
import WelcomeScreen from './welcomeScreen';
import LoginScreen from './loginScreen';
import HomeScreen from './homeScreen';
import MineScreen from './mineScreen';
import MarketScreen from './marketScreen';
import CircleScreen from './circleScreen';
import TestScreen from './testScreen';
import TestScreen1 from './testScreen1';

const WelcomePaths: Route[] = [
  {
    path: PATH.WELCOMESCREEN,
    component: WelcomeScreen,
    title: '欢迎',
    headerShown: false,
  },
  {
    path: PATH.WELCOME_LOGINSCREEN,
    component: LoginScreen,
    title: '登录',
    presentation: 'modal',
  },
];

const BusinessPaths: Route[] = [
  {
    path: 'Test',
    component: TestScreen,
    title: '测试1',
  },
  {
    path: 'Test2',
    component: TestScreen1,
    title: '测试2',
    presentation: 'modal',
  },
  {
    path: PATH.LOGINSCREEN,
    component: LoginScreen,
    title: '登录',
    presentation: 'modal',
  },
];

const RootMainPaths = [
  {
    path: PATH.HOMESCREEN,
    component: HomeScreen,
    title: '首页',
  },
  {
    path: PATH.MARKETSCREEN,
    component: MarketScreen,
    title: '集市',
  },
  {
    path: PATH.CIRCLESCREEN,
    component: CircleScreen,
    title: '圈子',
  },
  {
    path: PATH.MINESCREEN,
    component: MineScreen,
    title: '我的',
  },
];

export { RootMainPaths, BusinessPaths, WelcomePaths };
