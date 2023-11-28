import {LayoutRoot, Navigation} from 'react-native-navigation';
import Storage from '@/storage';
import {Assets} from 'react-native-ui-lib';
import {commonStyles} from '@/common/styles';
import {STORAGE_KEYS} from '@/interfaces/commonEnum';

const welcomeRoot = {
  root: {
    stack: {
      children: [
        {
          component: {
            name: 'WelcomeScreen',
            options: {
              topBar: {
                visible: false,
              },
            },
          },
        },
      ],
    },
  },
};
const bottomRoot: LayoutRoot = {
  root: {
    bottomTabs: {
      id: 'BOTTOM_TABS_LAYOUT',
      children: [
        {
          stack: {
            children: [
              {
                component: {
                  id: 'HomeScreen',
                  name: 'HomeScreen',
                  options: {
                    topBar: {
                      visible: false,
                    },
                  },
                },
              },
            ],
            options: {
              bottomTab: {
                text: '首页',
                icon: Assets.bottomBarIcons.home,
                selectedIcon: Assets.bottomBarIcons.homeSelect,
              },
            },
          },
        },
        {
          stack: {
            children: [
              {
                component: {
                  id: 'MarketScreen',
                  name: 'MarketScreen',
                  options: {
                    topBar: {
                      visible: false,
                    },
                  },
                },
              },
            ],
            options: {
              bottomTab: {
                text: '集市',
                icon: Assets.bottomBarIcons.market,
                selectedIcon: Assets.bottomBarIcons.marketSelect,
              },
            },
          },
        },
        {
          stack: {
            children: [
              {
                component: {
                  id: 'AddNewsScreen',
                  name: 'AddNewsScreen',
                  options: {
                    topBar: {
                      visible: false,
                    },
                  },
                },
              },
            ],
            options: {
              bottomTab: {
                text: '发布',
                icon: Assets.bottomBarIcons.add,
                selectedIcon: Assets.bottomBarIcons.addSelect,
              },
            },
          },
        },
        {
          stack: {
            children: [
              {
                component: {
                  id: 'CircleScreen',
                  name: 'CircleScreen',
                  options: {
                    topBar: {
                      visible: false,
                    },
                  },
                },
              },
            ],
            options: {
              bottomTab: {
                text: '圈子',
                icon: Assets.bottomBarIcons.circle,
                selectedIcon: Assets.bottomBarIcons.circleSelect,
              },
            },
          },
        },
        {
          stack: {
            children: [
              {
                component: {
                  id: 'MineScreen',
                  name: 'MineScreen',
                  options: {
                    topBar: {
                      visible: false,
                    },
                  },
                },
              },
            ],
            options: {
              bottomTab: {
                text: '我的',
                icon: Assets.bottomBarIcons.mine,
                selectedIcon: Assets.bottomBarIcons.mineSelect,
              },
            },
          },
        },
      ],
      options: {
        bottomTabs: {
          currentTabIndex: 0,
          translucent: true,
          drawBehind: true,
          tabsAttachMode: 'together',
          backgroundColor: 'transparent',
          animate: true,
          animateTabSelection: true,
          titleDisplayMode: 'alwaysShow',
        },
        bottomTab: {
          textColor: '#959595',
          selectedTextColor: commonStyles.black,
          fontSize: 12,
          animateBadge: true,
          fontWeight: '500',
        },
      },
    },
  },
};

function getRouters(
  loginStatus: boolean | undefined,
  isLoadedApp: boolean | undefined,
) {
  if (loginStatus || isLoadedApp) return bottomRoot;
  if (!loginStatus && isLoadedApp) return bottomRoot;
  return welcomeRoot;
}

//设置app路由
export const setAppRouter = async (isInitApp?: boolean) => {
  // 登录态
  const loginStatus = Storage.getBoolean(STORAGE_KEYS.LOGIN_STATUS);
  // 是否登录过APP
  const isLoadedApp = Storage.getBoolean(STORAGE_KEYS.IS_LOADEDAPP);
  if (isInitApp === true) {
    Navigation.events().registerAppLaunchedListener(() => {
      Navigation.setRoot(getRouters(loginStatus, isLoadedApp));
    });
  } else {
    Navigation.setRoot(getRouters(loginStatus, isLoadedApp));
  }
};
