import { useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import AnimatedHeader from './components/AnimatedHeader';
import { useSharedValue } from 'react-native-reanimated';
import NewsListContainer from './components/NewsListContainer';
import { HomeScreenContext } from './utils/context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { commonStyles } from '@/common/styles';

function HomeScreen() {
  const { top } = useSafeAreaInsets();
  const initTopbarHeight = top + 170;
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
      <View style={styles.page}>
        <NewsListContainer ref={newsListContainerRef} />
        {/* 涉及blur组件需要放在下方 */}
        <AnimatedHeader />
      </View>
    </HomeScreenContext.Provider>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: commonStyles.pageBgColor
  },
});

export default HomeScreen;
