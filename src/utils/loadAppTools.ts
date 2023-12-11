import { Colors, Typography, Spacings, Assets } from 'react-native-ui-lib';
import Storage from '@/storage';
import { Dimensions } from 'react-native';
import { commonStyles } from '@/common/styles';
import { STORAGE_KEYS } from '@/interfaces/commonEnum';
import https from './https';
import { ToastStore } from '@/store';

//设置全局工具方法、变量
export const setGlobalTools = () => {
  // 全局Toast工具
  Toast = {
    show: (message: string, duration?: number) => ToastStore.show(message, duration),
  };
};

//初始化storage数据
export const initStorageData = () => {
  // 初始化登录状态
  const loginStatus = Storage.getBoolean(STORAGE_KEYS.LOGIN_STATUS);
  if (loginStatus) {
    const Authorization = Storage.getString(STORAGE_KEYS.TOKEN);
    const uid = Storage.getString(STORAGE_KEYS.UID);
    https.defaults.headers.common = { Authorization, uid };
    Storage.set(STORAGE_KEYS.LOGIN_STATUS, true);
  } else {
    Storage.set(STORAGE_KEYS.LOGIN_STATUS, false);
  }
  // 是否是第一次加载APP
  const isLoadedApp = Storage.getBoolean(STORAGE_KEYS.IS_LOADEDAPP);
  if (!isLoadedApp) {
    Storage.set(STORAGE_KEYS.IS_LOADEDAPP, false);
  } else {
    Storage.set(STORAGE_KEYS.IS_LOADEDAPP, true);
  }
};

//设置导航默认样式
export const setDefaultNavigationStyle = () => {
  Navigation.setDefaultOptions({
    topBar: {
      visible: true,
      drawBehind: false,
      animate: true,
      animateLeftButtons: true,
      animateRightButtons: true,
      backButton: { popStackOnPress: true },
      noBorder: true,
      scrollEdgeAppearance: {
        active: false,
        noBorder: true,
      },
      title: {
        text: 'oneLight', //默认title
      },
    },
    statusBar: {
      backgroundColor: 'transparent',
      drawBehind: true,
      translucent: true,
    },
    layout: {
      componentBackgroundColor: commonStyles.pageBgColor,
    },
    animations: {
      setRoot: {
        alpha: {
          from: 0,
          to: 1,
          duration: 300,
        },
      },
    },
  });
};

//加载app系统默认主题、默认样式、根样式等
export const loadSysStyle = () => {
  Colors.loadSchemes({
    light: {
      screenBG: '#F7F8F9',
      textLinkColor: '#4597f7',
      textColor: Colors.grey10,
      moonOrSun: Colors.yellow30,
      mountainForeground: Colors.green30,
      mountainBackground: Colors.green50,
      $backgroundSuccess: Colors.green40,
    },
    dark: {
      screenBG: Colors.grey10,
      textLinkColor: '#4597f7',
      textColor: Colors.white,
      moonOrSun: Colors.grey80,
      mountainForeground: Colors.violet10,
      mountainBackground: Colors.violet20,
      $backgroundSuccess: Colors.green40,
    },
  });

  Typography.loadTypographies({
    heading: { fontSize: 36, fontWeight: '600' },
    subheading: { fontSize: 28, fontWeight: '500' },
    body: { fontSize: 18, fontWeight: '400' },
  });

  Spacings.loadSpacings({
    page: 20,
    card: 12,
    gridGutter: 16,
  });

  Assets.loadAssetsGroup('icons', {
    logo: require('@/static/icons/appLogo.png'),
    alipay: require('@/static/icons/alipay.png'),
    wechat: require('@/static/icons/wechat.png'),
    mobile: require('@/static/icons/mobilePhone.png'),
  });
  Assets.loadAssetsGroup('bottomBarIcons', {
    home: require('@/static/bottomBarIcons/home.png'),
    homeSelect: require('@/static/bottomBarIcons/homeSelect.png'),
    mine: require('@/static/bottomBarIcons/mine.png'),
    mineSelect: require('@/static/bottomBarIcons/mineSelect.png'),
    market: require('@/static/bottomBarIcons/market.png'),
    marketSelect: require('@/static/bottomBarIcons/marketSelect.png'),
    circle: require('@/static/bottomBarIcons/circle.png'),
    circleSelect: require('@/static/bottomBarIcons/circleSelect.png'),
    add: require('@/static/bottomBarIcons/add.png'),
    addSelect: require('@/static/bottomBarIcons/addSelect.png'),
  });
};

//监听导航Navigation事件
export const navigationEventListen = () => {
  //监听按钮事件
  Navigation.events().registerNavigationButtonPressedListener(({ buttonId, componentId }) => {
    if (buttonId === 'closeModal') {
      Navigation.dismissModal(componentId);
    }
  });
  //监听命令事件
  Navigation.events().registerCommandListener((name, params) => {
    console.log('9898name', name);
    console.log('9898params', params);
  });

  Navigation.events().registerComponentDidAppearListener(
    ({ componentId, componentName, passProps }) => {
      console.log('9898--componentId', componentId);
      console.log('9898--componentName', componentName);
      console.log('9898--passProps', passProps);
    },
  );
};
