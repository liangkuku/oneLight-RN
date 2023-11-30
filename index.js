import {
  loadSysStyle,
  navigationEventListen,
  setDefaultNavigationStyle,
  initStorageData,
  setGlobalTools
} from '@/utils/loadAppTools';
import {screensRegister} from '@/utils/screensRegister';
import { setAppRouter } from '@/utils/setRouterTools';

const appLoader = async () => {
  //设置全局工具方法、变量
  setGlobalTools()
  
  //初始化storage数据
  initStorageData()

  //加载app系统默认主题、默认样式、根样式等
  loadSysStyle()

  //监听导航Navigation事件
  navigationEventListen()

  //设置导航默认样式
  setDefaultNavigationStyle()

  //注册屏幕组件
  screensRegister()

  //设置app路由
  setAppRouter(true)
}

// 全局错误处理器
const errorHandler = (error, isFatal) => {
  // 在此处处理错误，例如记录错误或向用户显示错误信息
  console.error('9898有用--error', error);
  console.error('9898有用--isFatal', isFatal);
  if (isFatal) {
    console.log('9898有用--致命啦崩溃啦')
  } else {
    console.log('9898有用--不致命')
  }
};

ErrorUtils.setGlobalHandler(errorHandler)

appLoader()

