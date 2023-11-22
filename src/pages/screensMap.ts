import WelcomeScreen from './welcomeScreen';
import LoginScreen from './loginScreen';
import HomeScreen from './homeScreen';
import MineScreen from './mineScreen';
import MarketScreen from './marketScreen';
import ErrorScreen from './errorScreen';
import CircleScreen from './circleScreen';
import AddNewsScreen from './addNewsScreen';
import TestScreen from './testScreen';

export default [
  {
    path: 'TestScreen',
    component: TestScreen,
  },
  {
    path: 'AddNewsScreen',
    component: AddNewsScreen,
  },
  {
    path: 'ErrorScreen',
    component: ErrorScreen,
  },
  {
    path: 'LoginScreen',
    component: LoginScreen,
  },
  {
    path: 'WelcomeScreen',
    component: WelcomeScreen,
    options: {
      topBar: {
        visible: false,
      },
    },
  },
  {
    path: 'HomeScreen',
    component: HomeScreen,
  },
  {
    path: 'MineScreen',
    component: MineScreen,
  },
  {
    path: 'MarketScreen',
    component: MarketScreen,
  },
  {
    path: 'CircleScreen',
    component: CircleScreen,
  },
];
