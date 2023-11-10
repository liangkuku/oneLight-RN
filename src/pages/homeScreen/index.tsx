import { useEffect, useRef } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import AnimatedHeader from './components/AnimatedHeader';
import { useSharedValue } from 'react-native-reanimated';
import BlurBox from '@/components/BlurBox';
import NewsListContainer from './components/NewsListContainer';
import { HomeScreenContext } from './utils/context';
import { getNavigationConsts } from '@/utils/loadAppTools';

function HomeScreen() {
    console.log('9898pagehome刷新了');
    const initTopbarHeight = getNavigationConsts().statusBarHeight + 170;
    // 动画共享滑动距离
    const sharedScrollY = useSharedValue(0);
    // 最外层所有list列表容器ref
    const newsListContainerRef = useRef(null);
    // 首页‘全部->all’类型列表ref
    const allTypeListRef = useRef(null);
    // 分类栏容器ref
    const categoryBarRef = useRef(null);
    useEffect(() => {
        setTimeout(() => {
            SplashScreen.hide();
        }, 3000);
    }, []);
    const providerValue = {
        initTopbarHeight, // 顶部动画组件的高度
        newsListContainerRef, // 最外层所有list列表容器ref
        categoryBarRef, // 分类栏容器ref
        sharedScrollY, // 动画共享滑动距离
        allTypeListRef, // 首页‘全部->all’类型列表ref
    };
    return (
        <HomeScreenContext.Provider value={providerValue}>
            <View style={styles.page} >
                <NewsListContainer ref={newsListContainerRef} />
                {/* 涉及blur组件需要放在下方 */}
                <AnimatedHeader />
                <BlurBox />
            </View>
        </HomeScreenContext.Provider>
    );
}

const styles = StyleSheet.create({
    page: {
        ...Platform.select({
            ios: {
                height: WINDOW_HEIGHT
            },
            android: {
                flex: 1
            }
        })
    }
});

export default HomeScreen;
