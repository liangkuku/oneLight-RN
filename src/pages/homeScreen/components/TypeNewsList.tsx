import { useContext, useState } from "react";
import { View, RefreshControl, StyleSheet } from "react-native";
import { HomePageContext } from "../utils/context";
import Animated, { useAnimatedScrollHandler } from "react-native-reanimated";
import { getNavigationConsts } from "@/utils/loadAppTools";
import EmptyComponent from "@/components/EmptyComponent";
import News from "@/components/News";
import LoadMore from "@/components/LoadMore";
import newsDataMock from '@/mock/newsData';
import HomeHeaderActivity from "./HomeHeaderActivity";
import { FlashList } from "@shopify/flash-list";

const apifunc = async () => {
    return new Promise((res) => {
        setTimeout(() => {
            const data: NewsItem[] = newsDataMock.map((item, index) => ({
                ...item,
                id: index + '-' + (new Date()).getTime()
            }));
            res(data);
        }, 800);
    });
};

const AnimatedFlashList = Animated.createAnimatedComponent(FlashList<NewsItem>);

function TypeNewsList() {
    const { scrollY, initTopbarHeight } = useContext(HomePageContext);
    // const flatListRef = useAnimatedRef<FlatList<NewsItem>>();
    // 滑动事件
    const scrollHandler = useAnimatedScrollHandler((event) => {
        scrollY.value = event.contentOffset.y;
    });
    const [loadingStatus, setLoadingStatus] = useState({ isRefreshing: false, isLoadingMore: false });
    const [newsData, setNewsData] = useState<NewsItem[]>([]);
    // 接口查询list数据源
    const getNewsData = async (type = 'loadmore') => {
        if (loadingStatus.isLoadingMore || loadingStatus.isRefreshing) return;
        setLoadingStatus({
            isRefreshing: type === 'init' ? true : false,
            isLoadingMore: type === 'loadmore' ? true : false,
        });
        const apiData: NewsItem[] = await apifunc() as NewsItem[];
        setNewsData(type === 'loadmore' ? [...newsData, ...apiData] : apiData);
        setLoadingStatus({
            isRefreshing: false,
            isLoadingMore: false,
        });
    };
    // 下拉刷新
    const initRefresh = () => {
        getNewsData('init');
    };
    // 上滑加载
    const loadMoreData = () => {
        getNewsData('loadmore');
    };
    // 滑动停止
    const scrollEnd = () => {
        console.log('9898滑动停止onMomentumScrollEnd');
    };
    const onScrollEndDrag = () => {
        console.log('9898滑动停止onScrollEndDrag');
    };
    return (
        <View style={styles.page}>
            <AnimatedFlashList
                // ref={ref => flatListRef.current = ref}
                contentInsetAdjustmentBehavior='never'
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: getNavigationConsts().bottomTabsHeight
                }}
                estimatedItemSize={110}
                keyExtractor={(item) => item.id}
                onScroll={scrollHandler}
                data={newsData}
                ListEmptyComponent={<EmptyComponent isShow={!loadingStatus.isLoadingMore && !loadingStatus.isRefreshing} />}
                renderItem={({ item }) => <News news={item} />}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                ListHeaderComponent={<HomeHeaderActivity />}
                ListFooterComponent={<LoadMore isLoadingMore={loadingStatus.isLoadingMore} />}
                refreshControl={<RefreshControl refreshing={loadingStatus.isRefreshing} onRefresh={initRefresh} progressViewOffset={initTopbarHeight}></RefreshControl>}
                onEndReached={loadMoreData}
                onEndReachedThreshold={0.8}
                onMomentumScrollEnd={scrollEnd}
                onScrollEndDrag={onScrollEndDrag}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        width: WINDOW_WIDTH
    }
});

export default TypeNewsList;