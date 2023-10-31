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

type TypeNewsListProps = {
    isAll: boolean
}

function TypeNewsList({ isAll }: TypeNewsListProps) {
    const { scrollY, initTopbarHeight, allTypeListRef } = useContext(HomePageContext);
    // 滑动事件
    const scrollHandler = useAnimatedScrollHandler((event) => {
        if (isAll) {
            scrollY.value = event.contentOffset.y;
        }
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
    return (
        <View style={styles.page}>
            <AnimatedFlashList
                ref={ref => {
                    if (isAll) {
                        allTypeListRef.current = ref;
                    }
                }}
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
                ListHeaderComponent={<HomeHeaderActivity isAll={isAll} />}
                ListFooterComponent={<LoadMore isLoadingMore={loadingStatus.isLoadingMore} />}
                refreshControl={<RefreshControl refreshing={loadingStatus.isRefreshing} onRefresh={initRefresh} progressViewOffset={isAll ? initTopbarHeight : initTopbarHeight - 90}></RefreshControl>}
                onEndReached={loadMoreData}
                onEndReachedThreshold={0.8}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        width: WINDOW_WIDTH,
        height: WINDOW_HEIGHT
    }
});

export default TypeNewsList;