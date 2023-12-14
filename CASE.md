# 遗留 case

# 暂未解决 case

1、目前@shopify/flash-list 版本：1.6.2，安卓由于 kotlinVersion 版本不兼容问题，暂时 android/build.gradle 写死，kotlinVersion = "1.7.22"，后续@shopify/flash-list 官方解决，再进行升级@shopify/flash-list 版本

# react-native-root-toast

目前全局 Toast 使用 react-native-root-toast 库，通常大多数情况不需要其他额外设置，直接调用即可。只有在某个屏幕（screen）presentation 属性值为“modal”（iOS 特有路由展示方式）时需要在组件根元素外层包裹<RootSiblingParent/>组件，如：
import { RootSiblingParent } from 'react-native-root-siblings';

<RootSiblingParent>
    //...TODO SOMETHING
</RootSiblingParent>
