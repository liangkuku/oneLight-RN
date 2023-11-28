/**
 * 注意：此文件因涉及Screens（所有屏幕组件），一旦某一业务组件引用此文件方法会造成循环引用，
 * 所以轻易不要在此文件添加业务公共方法，若确实需要添加，注意避免循环引用
 */
import Screens from '@/pages/screensMap';
import React from 'react';
import {Navigation} from 'react-native-navigation';
import {RootSiblingParent} from 'react-native-root-siblings';
//注册屏幕组件
export const screensRegister = () => {
  Screens.forEach(screenInfo => {
    const ScreenComponent = screenInfo.component;
    const WrappedScreen = (props: {componentId: string}) => (
      <RootSiblingParent>
        <ScreenComponent {...props} />
      </RootSiblingParent>
    );
    Navigation.registerComponent(screenInfo.path, () => WrappedScreen);
  });
};
